/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageProvider: 'v8',
  modulePathIgnorePatterns: ['.+/index.d.ts']
};

module.exports = config;
