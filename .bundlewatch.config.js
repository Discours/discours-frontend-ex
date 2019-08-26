module.exports = {
  files: [
    {
      path: "www/**/*.js",
      maxSize: "500kB",
    },
    {
      path: "www/**/*.css",
      maxSize: "50kB",
    },
  ],
  defaultCompression: "gzip",
};
