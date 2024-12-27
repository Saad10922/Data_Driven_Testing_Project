import type {Config} from 'jest';
const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.ts'],
  transform: { // Any file ending with .ts will be process by ts-jest
    '^.+\\.ts$': 'ts-jest'
  },
  // globals: {// configures that ts-jest will use TypeScript Configuration File
  //   'ts-jest': {
  //     tsconfig: 'tsconfig.json'
  //   }
  // },
  moduleFileExtensions: ['ts', 'js', 'tsx', 'json'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  setupFiles : ['./jest.setup.ts'],
};
export default config;