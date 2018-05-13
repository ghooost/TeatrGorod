const path = require('path');

module.exports = {
  entry: ['whatwg-fetch',"babel-polyfill",'./src/index.js'],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '..')
  },
  module: {
    "rules":[{
      test: /\.js$/,
       exclude: /node_modules/,
       use: [{
         loader: 'babel-loader',
         options: {
           presets: ['env']
         }
       }]
    }]
  }
};
