const path = require("path");

const tsLoaders = [
  {
    test: /\.tsx?$|.orig.js$/,
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
  },
];

module.exports = {
  tsLoaders,
  storybookTsLoaders: {
    ...tsLoader,
    use: [
      ...tsLoader.use,
      {
        loader: "react-docgen-typescript-loader",
      },
    ],
  },
};
