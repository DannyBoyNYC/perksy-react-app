module.exports = {
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  collectCoverageFrom: ['src/components/**/[A-Z]*.js'],
  coverageDirectory: '.coverage',
  setupFiles: ['./jest.setup.js'],
  setupTestFrameworkScriptFile: 'jest-enzyme',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16'
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: ['./node_modules/']
};
