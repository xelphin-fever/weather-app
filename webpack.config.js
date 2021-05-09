const path = require('path');

module.exports = {
  entry: './src/index.js', // path of entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
