const {
  utils: { getPackages }
} = require('@commitlint/config-lerna-scopes');

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': (ctx) =>
      getPackages(ctx).then((packages) => [
        2,
        'always',
        packages.concat(['deps'])
      ])
  }
};
