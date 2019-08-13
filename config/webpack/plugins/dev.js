const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const common = [
  new webpack.NamedModulesPlugin(),
  new HardSourceWebpackPlugin(),
  new HardSourceWebpackPlugin.ExcludeModulePlugin([
    {
      // HardSource works with mini-css-extract-plugin but due to how
      // mini-css emits assets, assets are not emitted on repeated builds with
      // mini-css and hard-source together. Ignoring the mini-css loader
      // modules, but not the other css loader modules, excludes the modules
      // that mini-css needs rebuilt to output assets every time.
      test: /mini-css-extract-plugin[\\/]dist[\\/]loader/,
    },
  ]),
];

const main = [...common, new BundleAnalyzerPlugin({ openAnalyzer: false })];

module.exports = {
  devPlugins: main,
  storybookDevPlugins: common,
};
