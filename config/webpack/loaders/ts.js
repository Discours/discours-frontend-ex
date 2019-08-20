const path = require("path");

const tsLoader = {
  test: /\.tsx?$|.orig.js$/,
  exclude: /node_modules/,
  use: [
    {
      loader: "awesome-typescript-loader",
      options: {
        transpileOnly: true,
        useCache: true,
        sourceMap: true,
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
