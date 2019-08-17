require("./config/errorReporting/setEnvGitHash");

const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CaseSensitivePathsWebpackPlugin = require("case-sensitive-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const WebpackBar = require("webpackbar");
const errorReportingPlugin = require("./config/errorReporting/webpack");
require("ts-node").register({ compilerOptions: { module: "commonjs" } });
const { SUPPORTED_LOCALES } = require("./src/config/locales.ts");
const { IS_DEV, IS_E2E } = require("./config/webpack/env");
const { cssLoader } = require("./config/webpack/loaders/css");
const { mdLoader } = require("./config/webpack/loaders/md");
const { tsLoader } = require("./config/webpack/loaders/ts");
const { fsLoader } = require("./config/webpack/loaders/fs");
const { cssPlugins } = require("./config/webpack/plugins/css");
const { devPlugins } = require("./config/webpack/plugins/dev");

const paths = {
  input: "src",
  static: "public",
  output: "www",
  template: "src/index.ejs",
  entry: {
    errorReporting: "./config/errorReporting/frontend.js",
    main: "./src/index.tsx",
  },
};

const TITLE = "Дискурс";
const LANGUAGES_REGEX = new RegExp(
  `(${SUPPORTED_LOCALES.join("|")})($|\.js$|\/index\.js$)`,
);

const plugins = [
  new WebpackBar(),
  new webpack.ContextReplacementPlugin(/date-fns[/\\]locale$/, LANGUAGES_REGEX),
  new CleanWebpackPlugin([paths.output]),
  new CopyWebpackPlugin([paths.static]),
  new CaseSensitivePathsWebpackPlugin({ debug: false }),
  new webpack.EnvironmentPlugin({
    // null for not required variables
    // undefined - for required
    SENTRY_DSN: null,
    SENTRY_ENV: null,
    GIT_HASH: null,
  }),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, paths.template),
    hash: false,
    filename: "index.html",
    inject: "body",
    title: TITLE,
    minify: {
      collapseWhitespace: false,
    },
  }),
  errorReportingPlugin,
  ...cssPlugins,
];

if (IS_DEV) {
  plugins.push(...devPlugins);
} else {
  plugins.push(
    new BundleAnalyzerPlugin({ openAnalyzer: false, analyzerMode: "static" }),
  );
}

module.exports = {
  entry: paths.entry,
  devtool: IS_DEV ? "cheap-module-eval-source-map" : "source-map", // https://webpack.js.org/configuration/devtool/
  devServer: {
    // https://webpack.js.org/configuration/dev-server/
    port: "3000",
    contentBase: path.join(__dirname, paths.static),
    historyApiFallback: true,
    hot: true,
    watchOptions: {
      poll: 1000,
      aggregateTimeout: 500,
      ignored: ["node_modules", "dist"],
    },
    stats: "minimal",
    open: IS_E2E ? false : true,
  },
  mode: IS_DEV ? "development" : "production",
  output: {
    path: path.resolve(__dirname, paths.output),
    filename: IS_DEV ? "[name].js" : "assets/js/[name].[hash].js",
    chunkFilename: IS_DEV ? "[name].js" : "assets/js/[name].[hash].bundle.js",
  },
  plugins,
  resolve: {
    extensions: [".ts", ".tsx", ".wasm", ".mjs", ".js", ".json"],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      tsLoader,
      {
        test: /\.jsx?$/,
        include: /node_modules/,
        use: [require.resolve("react-hot-loader/webpack")],
      },
      fsLoader,
      mdLoader,
      cssLoader,
    ],
  },
};
