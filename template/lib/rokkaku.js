'use strict';

var path = require('path');

function rokkaku(args) {
  console.log(args + ' from Rokkaku');
  console.log(path.resolve(__dirname, '../'));
  return rokkaku;
}

module.exports = rokkaku;
