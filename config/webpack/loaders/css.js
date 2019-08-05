const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { IS_DEV } = require("../env");
const path = require("path");

const cssLoader = {
  test: /\.css$/i,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: (resourcePath, context) => {
          // publicPath is the relative path of the resource to the context
          // e.g. for ./css/admin/main.css the publicPath will be ../../
          // while for ./css/main.css the publicPath will be ../
          return path.relative(path.dirname(resourcePath), context) + "/";
        },
      },
    },
    {
      // TODO hot reload
      loader: require.resolve("css-loader"),
      options: {
        import: true,
        importLoaders: 1, // https://github.com/postcss/postcss-loader#css-modules
        modules: {
          mode: "local",
          localIdentName: IS_DEV
            ? "[path]__[local]"
            : "[name]__[local]__[hash:base64]",
          hashPrefix: "discours",
        },
      },
    },
    require.resolve("postcss-loader"),
  ],
};

module.exports = {
  cssLoader,
  cssLoaderStorybook: cssLoader,
};
