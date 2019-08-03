const mdLoader = {
  test: /\.md$/,
  use: [
    {
      loader: require.resolve("html-loader"),
    },
    {
      loader: require.resolve("markdown-loader"),
    },
  ],
};

module.exports = {
  mdLoader,
  mdLoadersStorybook: [
    {
      test: mdLoader.test,
      exclude: /README\.md$/,
      use: mdLoader.use,
    },
    {
      test: /README\.md$/,
      use: [
        {
          loader: require.resolve("raw-loader"),
        },
      ],
    },
  ],
};
