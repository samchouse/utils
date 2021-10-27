const merge = require('lodash.merge');

const sorter = require('@trivago/prettier-plugin-sort-imports');
const tailwind = require('prettier-plugin-tailwind');

module.exports = {
  ...require('../../.prettierrc.js'),
  twConfig: './packages/web/tailwind.config.js',
  plugins: [merge(sorter, tailwind)]
};
