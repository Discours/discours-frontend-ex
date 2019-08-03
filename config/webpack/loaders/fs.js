const filesExts = require("../../filesExts");

const fsLoader = {
  test: new RegExp(`\.(${filesExts.join("|")})$`),
  use: [
    {
      loader: require.resolve("file-loader"),
      options: { outputPath: "assets/images" },
    },
  ],
};

module.exports = {
  fsLoader,
  storybookFsLoader: fsLoader,
};
