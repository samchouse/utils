/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  displayName: 'lib',
  preset: '../../jest.preset.ts',
  coverageDirectory: '../../coverage/lib',
  setupFilesAfterEnv: ['./jest.extends.ts']
};
