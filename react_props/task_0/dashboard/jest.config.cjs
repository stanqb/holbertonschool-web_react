module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/fileMock.cjs',
  },
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  testMatch: ['<rootDir>/src/**/*.spec.js'],
};
