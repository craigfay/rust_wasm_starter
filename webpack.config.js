const path = require('path');

module.exports = {
  mode: "development",
  entry: './js_src/main.js',
  output: {
    path: path.resolve(__dirname, 'js_dist'),
    filename: "bundle.js",
    publicPath: 'js_dist/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
};
