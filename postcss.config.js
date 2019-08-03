module.exports = {
  plugins: {
    "postcss-normalize": {},
    "postcss-custom-properties": {
      preserve: true,
      importFrom: "src/styles/themes/default.css",
    },
    autoprefixer: {},
    cssnano: {
      preset: "default",
    },
  },
};
