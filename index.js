#! /usr/bin/env node

'use strict';

let commands = require('./commands');
let pkg = require('./package');

let Git = require('nodegit');
let sGit = require('yargs')
    .usage('Usage: sgit <command>')
    .command('clone', 'interactive clone repo')
    .demand(1, ' must provide command!')
    .version(pkg.version)
    .help('help')
    .alias('help', 'h')
    .alias('version', 'v');

if (sGit.argv._[0] && commands[sGit.argv._[0]])
  commands[sGit.argv._[0]]();
