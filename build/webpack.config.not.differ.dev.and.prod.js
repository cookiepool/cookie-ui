// build/webpack.config.js
// node.js里面自带的操作路径的模块
const path = require("path");
// 引入htmlWebpackPlugin自动导入js文件
const htmlWebpackPlugin = require('html-webpack-plugin');
// 引入vue-loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 引入webpack
const webpack = require('webpack');
// 引入清除打包后文件的插件（最新版的需要解构，不然会报不是构造函数的错，而且名字必须写CleanWebpackPlugin）
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // 指定模式，这儿有none production development三个参数可选
  // 具体作用请查阅官方文档，（跟下面的DefinePlugin二选一）
  mode: "development",
  // webpack打包的入口文件
  entry: {
    main: path.resolve(__dirname, "../src/main.js")
  },
  // webpack打包的输出相关的额配置
  output: {
    // 打包过后的文件的输出的路径
    path: path.resolve(__dirname, "../dist"),
    // 打包后生成的js文件，带hash值来保证文件的唯一性
    filename: "js/[name].[hash:4].js",
    // 生成的chunk文件名
    chunkFilename: "js/[name].[hash:4].js",
    // 资源的引用路径（这个跟你打包上线的配置有关系）
    publicPath: "/"
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
            loader: 'style-loader',
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
              // 当文件大于5kb时走file-loader相关的配置
              limit: 5120,
              // 这个参数要设置成false,不然生成图片的路径时[object Module]
              esModule: false,
              // 当文件大于5kb时走file-loader相关的配置
              fallback: 'file-loader',
              // 生成的路径和文件名
              name: 'images/[name].[hash:4].[ext]'
						}
					}
				]
			},
      {
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
              limit: 5120,
              esModule: false,
              fallback: 'file-loader',
              name: 'media/[name].[hash:4].[ext]'
						}
					}
				]
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
              limit: 5120,
              esModule: false,
              fallback: 'file-loader',
              name: 'fonts/[name].[hash:4].[ext]'
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
    new htmlWebpackPlugin({
      // 指定模板
      template: path.resolve(__dirname, '../public/index.html'),
      // 输出的文件
      filename: path.resolve(__dirname, '../dist/index.html')
    }),
    new VueLoaderPlugin(),
    // 辅助HotModuleReplacementPlugin插件
    new webpack.NamedModulesPlugin(),
    // 启用热更新必须的
    new webpack.HotModuleReplacementPlugin(),
    // 定义环境变量（跟上面mode的参数二选一即可）
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('development')
    //   }
    // })
  ],
  resolve: {
		alias: {
      // 写了这句，我们可以这样写代码 import Vue from 'vue'
      'vue$': 'vue/dist/vue.runtime.esm.js',
      // 写了这句，我们可以这样写代码 import api from '@/api/api.js'，省去到处找路径定位到src的麻烦
      '@': path.resolve(__dirname, '../src')
    },
    // 添加一个 resolve.extensions 属性，方便我们引入依赖或者文件的时候可以省略后缀
    // 我们在引入文件时可以这样写 import api from '@/api/api'。
    extensions: ['*', '.js', '.vue']
	},
  devServer: {
    // 默认情况不设置这个只能通过localhost:9000来访问，现在可以通过本机局域网ip来访问，
    // 比如192.168.12.21:9000，手机在这个局网内也可以访问
    host: '0.0.0.0',
    hot: true,
    port: 9200,
    contentBase: './dist'
  }
};
