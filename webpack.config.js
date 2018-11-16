const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: "babel-loader",
        exclude: "/node_modules",
        query: {
          presets: ["es2015"]
        }
      }
    ]
  }
};
