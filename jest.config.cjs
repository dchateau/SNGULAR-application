// jest.config.js
module.exports = {
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  // If you are using import.meta.env from Vite:
  globals: {
    'import.meta.env': {
      NODE_ENV: 'test', // or other environment variables used in your tests
    },
  },
  testEnvironment: 'jsdom',
};
