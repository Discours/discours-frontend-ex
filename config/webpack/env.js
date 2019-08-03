module.exports = {
  IS_DEV: process.env.NODE_ENV !== "production",
  IS_E2E: !!process.env.E2E,
};
