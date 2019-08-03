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
        modules: {
          mode: "local",
          localIdentName: DEV ? "[path][name]__[local]" : "[hash:base64]",
          hashPrefix: "discours",
        },
      },
    },
  ],
};

module.exports = {
  cssLoader,
  cssLoaderStorybook: cssLoader,
};
