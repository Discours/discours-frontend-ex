// File should be .js, 'cause it is imported to postcss.config.js

const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

module.exports = {
  breakpoints,
  customMedia: {
    "--viewport-xs": `(min-width: ${breakpoints.xs}px)`,
    "--viewport-sm": `(min-width: ${breakpoints.sm}px)`,
    "--viewport-md": `(min-width: ${breakpoints.md}px)`,
    "--viewport-lg": `(min-width: ${breakpoints.lg}px)`,
    "--viewport-xl": `(min-width: ${breakpoints.xl}px)`,
  },
};
