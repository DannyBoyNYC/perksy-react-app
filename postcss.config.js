const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    autoprefixer({
      browsers: ['last 3 versions', 'IE >= 11']
    }),
    cssnano()
  ]
};
