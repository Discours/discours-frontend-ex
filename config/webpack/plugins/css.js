const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const cssPlugins = [
  new MiniCssExtractPlugin({
    filename: "assets/css/[name].css",
    chunkFilename: "assets/css/[id].css",
    ignoreOrder: false, // Enable to remove warnings about conflicting order
  }),
];

module.exports = {
  cssPlugins,
  storybookCssPlugins: cssPlugins,
};
