const { DEV } = require("../env");

const cssLoader = {
  test: /\.css$/i,
  use: [
    require.resolve("style-loader"),
    {
      loader: "css-modules-typescript-loader",
      options: {
        mode: process.env.CI ? "verify" : "emit",
      },
    },
    {
      loader: require.resolve("css-loader"),
      options: {
        importLoaders: 1, // https://github.com/postcss/postcss-loader#css-modules
        modules: {
          mode: "local",
          localIdentName: DEV ? "[path][name]__[local]" : "[hash:base64]",
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
