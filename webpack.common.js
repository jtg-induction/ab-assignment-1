const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  module: {
    rules: [                            
      {
        test: /\.html$/,
        use: ["html-loader"]
      }
    ]
  }
};
