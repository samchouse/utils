/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
const nodeExternals = require('webpack-node-externals');
const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin');

module.exports = function config(options, webpack) {
  return {
    ...options,
    entry: ['webpack/hot/poll?100', options.entry],
    externals: [
      nodeExternals({
        allowlist: ['webpack/hot/poll?100']
      })
    ],
    plugins: [
      ...options.plugins,
      new webpack.IgnorePlugin({
        checkResource(resource) {
          const lazyImports = [
            '@nestjs/microservices',
            '@nestjs/microservices/microservices-module',
            '@nestjs/websockets',
            '@nestjs/websockets/socket-module',
            '@nestjs/platform-express',
            'cache-manager',
            'class-validator',
            'class-transformer'
          ];

          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          if (!lazyImports.includes(resource)) return false;

          try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            require.resolve(resource);
          } catch (err) {
            return true;
          }
          return false;
        }
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.WatchIgnorePlugin({
        paths: [/\.js$/, /\.d\.ts$/]
      }),
      new RunScriptWebpackPlugin({ name: options.output.filename })
    ],
    ignoreWarnings: [
      /node_modules\/express\/lib\/view\.js/,
      /node_modules\/@nestjs\/common\/utils\/load-package\.util\.js/,
      /node_modules\/@nestjs\/core\/helpers\/load-adapter\.js/,
      /node_modules\/optional\/optional\.js/,
      () => false
    ]
  };
};
