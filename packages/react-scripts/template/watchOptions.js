const ignoredFiles = require('react-dev-utils/ignoredFiles');

const watchOptions = {
  ignored: ignoredFiles('src'),
};

module.exports = watchOptions;
