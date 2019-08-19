const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig");
const filesExts = require("./config/filesExts");

module.exports = {
  preset: "ts-jest",
  errorOnDeprecated: true,
  coverageReporters: ["json-summary", "text", "html", "lcov"],
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec).ts?(x)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  collectCoverageFrom: ["src/**/*.ts?(x)", "!src/**/*.stories.ts?(x)"],
  modulePaths: ["<rootDir>/"],
  globalSetup: "./config/jest-global-setup.js",
  setupFiles: ["jest-date-mock", "./config/jest-setup.js"],
  moduleNameMapper: {
    // https://jestjs.io/docs/en/webpack#handling-static-assets
    "\\.md$": "<rootDir>/__mocks__/mdMock.js",
    "\\.svg$": "<rootDir>/__mocks__/svgMock.js",
    "\\.(css)$": "identity-obj-proxy",
    [`\\.(${filesExts.join("|")})$`]: "<rootDir>/__mocks__/fileMock.js",
    ...pathsToModuleNameMapper(compilerOptions.paths || {}, {
      prefix: "<rootDir>/",
    }),
  },
  globals: {
    "ts-jest": { isolatedModules: true },
  },
};
