// build/webpack.config.js
// node.js里面自带的操作路径的模块
const path = require("path");
// 引入vue-loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 用于提取css到文件中
const miniCssExtractPlugin = require('mini-css-extract-plugin');
// 用于压缩css代码
const optimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');
// 引入清除打包后文件的插件（最新版的需要解构，不然会报不是构造函数的错，而且名字必须写CleanWebpackPlugin）
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // 我们打包组件库时不需要把Vue打包进去
  externals: {
    'vue': {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }	
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: miniCssExtractPlugin.loader, // 使用miniCssExtractPlugin.loader代替style-loader
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass')
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
				test: /\.(jpe?g|png|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {              
              limit: 5120, // 当文件大于5kb时走file-loader相关的配置             
              esModule: false, // 这个参数要设置成false,不然生成图片的路径时[object Module]              
              fallback: 'file-loader', // 当文件大于5kb时走file-loader相关的配置
              name: 'images/[name].[hash:4].[ext]' // 生成的路径和文件名
						}
					}
				]
			},
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    // 新建miniCssExtractPlugin实例并配置
    new miniCssExtractPlugin({
      filename: '[name].css'
    }),
    // 压缩css
    new optimizeCssnanoPlugin({
      sourceMap: true,
      cssnanoOptions: {
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
        }],
      },
    }),
  ],
  resolve: {
		alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js',
    },
    extensions: ['*', '.js', '.vue']
	}
};