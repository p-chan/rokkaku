'use strict';

var path = require('path');
var shell = require('shelljs');
var chalk = require('chalk');

function rokkaku(args) {
  rokkaku.init(args);
  return rokkaku;
}

rokkaku.init = function (args) {
  var binDir = path.resolve(__dirname, '../');
  shell.mkdir('-p', args);
  shell.cp('-R', path.join(binDir, 'template/*'), './' + args);
  console.log(chalk.green('[INFO] Complated'));
}

module.exports = rokkaku;
