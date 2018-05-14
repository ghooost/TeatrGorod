const path = require('path');

module.exports = {
  entry: {
    'index.js':['whatwg-fetch',"babel-polyfill",'./src/js/index.js']
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, '.')
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
