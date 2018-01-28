const wp = require('@cypress/webpack-preprocessor');
const watch = require('@cypress/watch-preprocessor');

module.exports = on => {
  const options = {
    webpackOptions: require('../webpack.cypress.config')
  };
  on('file:preprocessor', wp(options));
};
