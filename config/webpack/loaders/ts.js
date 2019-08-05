const path = require("path");

const tsLoader = {
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: "awesome-typescript-loader",
      options: {
        transpileOnly: true,
        useCache: true,
        sourceMap: true,
        getCustomTransformers: path.join(__dirname, "../polyfills.js"),
      },
    },
  ],
};

module.exports = {
  tsLoader,
  tsLoaderStorybook: {
    ...tsLoader,
    use: [
      ...tsLoader.use,
      {
        loader: "react-docgen-typescript-loader",
      },
    ],
  },
};
