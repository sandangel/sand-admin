const webpack = require('webpack');
const { join } = require('path');

module.exports = {
  entry: { prerender: join(__dirname, './prerender.ts') },
  resolve: { extensions: ['.js', '.ts'] },
  target: 'node',
  // this makes sure we include node_modules and other 3rd party libraries
  externals: [/(node_modules|main\..*\.js)/],
  output: {
    path: join(__dirname, '../dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { configFile: join(__dirname, './tsconfig.server.json') }
      }
    ]
  },
  plugins: [
    // Temporary Fix for issue: https://github.com/angular/angular/issues/11580
    // for "WARNING Critical dependency: the request of a dependency is an expression"
    new webpack.ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      join(__dirname, '../apps/sand-admin/src'), // location of your src
      {} // a map of your routes
    ),
    new webpack.ContextReplacementPlugin(/(.+)?express(\\|\/)(.+)?/, join(__dirname, '../apps/sand-admin/src'), {})
  ]
};
