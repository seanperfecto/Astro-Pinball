const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./lib/pinball_app.js",
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", "*" ]
  },
  devtool: 'source-map',
};
