const filesExts = require("../../filesExts");

const assetsLoaders = [
  {
    test: new RegExp(`\.(${filesExts.join("|")})$`),
    use: [
      {
        loader: require.resolve("file-loader"),
        options: { outputPath: "assets/images" },
      },
    ],
  },
];

module.exports = {
  assetsLoaders,
  storybookAssetsLoaders: assetsLoaders,
};
