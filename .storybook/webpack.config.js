const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const WebpackBar = require("webpackbar");
const ProgressPlugin = require("webpack").ProgressPlugin;
const { cssLoaderStorybook } = require("../config/webpack/loaders/css");
const { storybookFsLoader } = require("../config/webpack/loaders/fs");
const { mdLoadersStorybook } = require("../config/webpack/loaders/md");
const { tsLoaderStorybook } = require("../config/webpack/loaders/ts");
const { storybookCssPlugins } = require("../config/webpack/plugins/css");

module.exports = ({ config, mode }) => {
  // Config
  config.devtool = "cheap-module-eval-source-map";
  config.resolve.extensions.unshift(".ts", ".tsx");

  // Plugins
  config.plugins = config.plugins.filter(
    (m) => m instanceof ProgressPlugin === false,
  ); // We are using Webpackbar, so no need in ProgressPlugin
  config.plugins.push(new HardSourceWebpackPlugin());
  config.plugins.push(new WebpackBar());
  config.plugins.push(...storybookCssPlugins);

  config.resolve.plugins = [new TsconfigPathsPlugin()];

  // Loaders
  config.module.rules = [
    tsLoaderStorybook,
    mdLoadersStorybook,
    storybookFsLoader,
    cssLoaderStorybook,
  ];

  return config;
};
