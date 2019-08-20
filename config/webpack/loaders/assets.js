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
  {
    test: /\.svg$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: false,
          dimensions: false,
          titleProp: true,
          svgoConfig: {
            plugins: {
              prefixIds: false,
              prefixClassNames: false,
            },
          },
        },
      },
    ],
  },
];

module.exports = {
  assetsLoaders,
  storybookAssetsLoaders: assetsLoaders,
};
