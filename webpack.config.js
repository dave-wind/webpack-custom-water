// nodejs内置的处理路径相关的模块
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var cleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // 入口文件 确保从根目录 绝对定位到指定位置 path.resolve 是处理配置路径相关的 methods webpack3.0要求配置路径相关的时候使用绝对路径
  // __dirname: 获得当前执行文件所在目录的完整目录名
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'), // 指定输出根目录 ./dist 就是dist 同级目录
    filename: 'js/bundle-[hash].js', //二级目录 js相对位置
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html', // 定义插件读取的模板文件是根目录下的index.html
      filename: 'index.html' // 定义通过模板文件新生成的页面名称
    }),
    new cleanWebpackPlugin(
      ['dist'], // 匹配要删除的文件夹
      {
        root: __dirname,
        verbose: true, // 开启在控制台输出信息
        dry: false // Default: false - remove files
      }
    ),
    new ExtractTextPlugin('css/dave-[hash].css')
  ],
  module: {
    rules: [
      {
        test: /\.css$/, // 匹配所有css 文件
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader', options: {importLoaders: 1}}, // 解决 css-loader 与postcs-loader冲突的问题
          {loader: 'postcss-loader'}
        ],
        exclude: /node_modules/ // 排除node_modules文件夹下面所有资源的匹配
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({ // 分离打包css 不是加载css 进style
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', options: {importLoaders: 2, minimize: true}},
            {loader: 'postcss-loader'},
            {loader: 'sass-loader'} // sass 放后面 因为要先加载处理 sass
          ]
        })
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
