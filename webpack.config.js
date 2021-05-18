const path = require('path')

module.exports = {
  entry: './src/date-functions/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'date-functions.js',
    library: {
      name: 'dateFunctions',
      type: 'umd'
    }
  }
}
