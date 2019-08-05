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
  mdLoadersStorybook: mdLoader,
};
