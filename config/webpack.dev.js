var webpack = require('webpack');
var path = require('path');
var AsyncAwaitPlugin = require('webpack-async-await') ;

var SRC_DIR = path.join(__dirname, '..', 'src');

module.exports = {
  debug: true,
  devtool: 'eval',
  entry: ['webpack-hot-middleware/client', './src/assets/js/app.js'],
  module: {
    preLoaders: [{
      test: /\.tsx?$/,
      loader: 'tslint',
      include: SRC_DIR
    }],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: SRC_DIR,
      },
      {
        test: /\.tsx?$/,
        loaders: [
          'babel', 'ts'
        ],
        include: SRC_DIR
      },
      {
        test: /\.(sass|css)$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(svg|woff|woff2|ttf|eot)(\?.*$|$)/,
        loader: 'file'
      },
    ]
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '..', 'static', 'build'),
    publicPath: '/build/'
  },
  plugins: [
    new AsyncAwaitPlugin({}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    root: [path.resolve('../app')],
    extensions: ['', '.jsx', '.js', '.tsx', '.ts']
  }
};
