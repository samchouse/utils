import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: 'lib',
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/lib',
  setupFilesAfterEnv: ['./jest.extends.ts']
};

export default config;
