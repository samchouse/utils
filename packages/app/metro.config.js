/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const extraNodeModules = {
  '@utils/lib': path.resolve(path.join(__dirname, '..', 'lib'))
};
const watchFolders = [path.resolve(path.join(__dirname, '..', 'lib'))];

module.exports = {
  resolver: {
    extraNodeModules
  },
  watchFolders
};
