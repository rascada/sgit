#! /usr/bin/env node

'use strict';

let commands = require('./commands');
let pkg = require('./package');

let Git = require('nodegit');
let sGit = require('yargs')
    .usage('Usage: sgit <command>')
    .demand(1, ' must provide command!')
    .version(pkg.version)
    .help('help')
    .alias('help', 'h')
    .alias('version', 'v');

Object.keys(commands)
  .forEach(name =>
    sGit.command(name, commands[name].description));

if (sGit.argv._[0] && commands[sGit.argv._[0]])
  commands[sGit.argv._[0]].method();
