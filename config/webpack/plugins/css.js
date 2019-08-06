const MiniCssExtractPlugin = require("extract-css-chunks-webpack-plugin");

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
