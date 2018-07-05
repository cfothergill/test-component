const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  mode: 'development',

  entry: {
    main: [
      'babel-polyfill',
      './src/index.js',
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [{
      test: /\.js/,
      include: path.resolve(__dirname, 'src'),
      loaders: 'babel-loader',
    }, {
      test: /\.(sa|sc|c)ss$/,
      include: path.resolve(__dirname, 'src'),
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    }],
  },

  plugins: [
    new HTMLPlugin({
      filename: path.resolve(__dirname, 'dist/index.html'),
      template: path.resolve(__dirname, 'index.ejs'),
    }),
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
};
