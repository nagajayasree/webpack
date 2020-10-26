const path = require("path");
/**
 *  placeholders
 * [hash],[chunkhash],[name],
 * [id],[query],[contenthash]
 */

module.exports = {
  mode: "development",
  entry: {
    myfile: "./src/message.js",
  },
   output: {
//      filename:"bundle.js",
//     filename: "../bundle/build.js",
      path: path.resolve(__dirname, "bundle"),
    filename: "js/[name].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
