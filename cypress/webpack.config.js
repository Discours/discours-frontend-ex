const { tsLoader } = require("../config/webpack/loaders/ts");

module.exports = {
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [tsLoader],
  },
};
