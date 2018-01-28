const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './integration/index.ts'),
  output: {
    path: path.resolve(__dirname, 'spec'),
    filename: 'spec.bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'ts-loader',
        options: {
          configFile: path.resolve(__dirname, './tsconfig.e2e.json')
        }
      }
    ]
  }
};
