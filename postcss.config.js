const constants = require('./src/design-system/constants.js');

module.exports = () => ({
  plugins: [
    // This is general (without restricting to supportedBrowsers) because of #2068.
    require('postcss-normalize')(),
    require('autoprefixer')(),
    require('postcss-simple-vars')({ variables: constants }),
  ],
});
