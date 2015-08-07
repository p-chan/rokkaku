#!/usr/bin/env node
'use strict';

var rokkaku = require('../lib/rokkaku.js');
var program = require('commander');
var pkg = require('../package.json');

program
  .version(pkg.version, '-v, --version')
  .description(pkg.description)
  .parse(process.argv);

if (!program.args.length) {
  program.help();
} else {
  rokkaku(program.args);
}
