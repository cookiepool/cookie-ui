
const merge = require('webpack-merge');
const webpackLibBaseConfig = require('./webpack.lib.base.js');

module.exports = merge(webpackLibBaseConfig, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    index: path.resolve(__dirname, "../packages/cookieui.js")
  },
  output: {
    // 打包过后的文件的输出的路径
    path: path.resolve(__dirname, "../lib"),
    // 打包后生成的js文件，带hash值来保证文件的唯一性
    filename: "[name].js",
    // // 资源的引用路径（这个跟你打包上线的配置有关系）
    publicPath: "/",
    library: 'cookieui',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true
  },
})