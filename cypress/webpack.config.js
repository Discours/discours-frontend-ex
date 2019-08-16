const { tsLoaders } = require("../config/webpack/loaders/ts");

module.exports = {
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: tsLoaders,
  },
};
