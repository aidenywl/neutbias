module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};

module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  rootDir: '../',
  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  // Bridges the gap between Jest and webpack by creating a mock CSS module when a CSS file is imported.
  // This returns the expected class names when we use css-modules.
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
