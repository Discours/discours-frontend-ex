const path = require("path");

const mainTsLoader = {
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

const storybookMainTsLoader = {
  ...mainTsLoader,
  use: [
    ...mainTsLoader.use,
    {
      loader: "react-docgen-typescript-loader",
    },
  ],
};

const tsLoaders = [mainTsLoader];
const storybookTsLoaders = [storybookMainTsLoader];

module.exports = {
  tsLoaders,
  storybookTsLoaders,
};
