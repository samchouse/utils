/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.extraNodeModules['@utils/lib'] = path.resolve(
  path.join(__dirname, '..', 'lib')
);
defaultConfig.watchFolders.push(
  path.resolve(path.join(__dirname, '..', 'lib'))
);

module.exports = defaultConfig;
