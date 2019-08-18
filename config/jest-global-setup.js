module.exports = async () => {
  process.env.TZ = "UTC"; // Needed for TZ to be 0 in all tests
};
