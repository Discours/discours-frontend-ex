module.exports = {
  plugins: {
    "postcss-normalize": {},
    "postcss-custom-properties": {
      preserve: true,
      importFrom: "src/styles/themes/light.css",
    },
    autoprefixer: {},
    cssnano: {
      preset: "default",
    },
  },
};
