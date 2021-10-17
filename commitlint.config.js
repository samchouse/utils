const path = require('path');
const globby = require('globby');

const getPackages = (context) => {
  return Promise.resolve().then(() => {
    const ctx = context || {};
    const cwd = ctx.cwd || process.cwd();

    const { workspaces } = require(path.join(cwd, 'package.json'));
    return globby(
      workspaces.packages.map((pkg) => (pkg += '*')),
      { cwd, deep: 2 }
    ).then((names = []) => {
      return [
        ...new Set(names.map((name) => path.basename(path.dirname(name))))
      ];
    });
  });
};

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': (ctx) =>
      getPackages(ctx).then((packages) => [2, 'always', packages])
  }
};
