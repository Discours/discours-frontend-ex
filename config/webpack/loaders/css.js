const MiniCssExtractPlugin = require("extract-css-chunks-webpack-plugin");
const { IS_DEV } = require("../env");
const path = require("path");

const cssLoaders = [
  {
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
          hot: IS_DEV,
          reloadAll: true,
        },
      },
      {
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
  },
];

module.exports = {
  cssLoaders,
  storybookCssLoaders: cssLoaders,
};
