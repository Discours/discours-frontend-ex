const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const WebpackBar = require("webpackbar");
const ProgressPlugin = require("webpack").ProgressPlugin;
const { storybookCssLoaders } = require("../config/webpack/loaders/css");
const { storybookAssetsLoaders } = require("../config/webpack/loaders/assets");
const { storybookMdLoaders } = require("../config/webpack/loaders/md");
const { storybookTsLoaders } = require("../config/webpack/loaders/ts");
const { storybookCssPlugins } = require("../config/webpack/plugins/css");
const { storybookDevPlugins } = require("../config/webpack/plugins/dev");

module.exports = ({ config, mode }) => {
  // Config
  config.devtool = "cheap-module-eval-source-map";
  config.resolve.extensions.unshift(".ts", ".tsx");

  // Plugins
  config.plugins = config.plugins.filter(
    (m) => m instanceof ProgressPlugin === false,
  ); // We are using Webpackbar, so no need in ProgressPlugin
  config.plugins.push(new WebpackBar());
  config.plugins.push(...storybookCssPlugins);
  config.plugins.push(...storybookDevPlugins);

  config.resolve.plugins = [new TsconfigPathsPlugin()];

  // Loaders
  config.module.rules = [
    ...storybookTsLoaders,
    ...storybookMdLoaders,
    ...storybookAssetsLoaders,
    ...storybookCssLoaders,
  ];

  return config;
};
