#! /usr/bin/env node

'use strict';

let commands = require('./commands');
let pkg = require('./package');

let sgit = require('yargs')
    .usage('Usage: sgit <command>')
    .demand(1, ' must provide command!')
    .version(pkg.version)
    .help('help')
    .alias('help', 'h')
    .alias('version', 'v')
    .option('prompt', {
      alias: 'p',
      boolean: true,
      desc: 'Prompt all unknown questions',
    });

Object.keys(commands)
  .forEach(name =>
    sgit.command(name, commands[name].description));

if (sgit.argv._[0] && commands[sgit.argv._[0]])
  commands[sgit.argv._[0]].method(sgit);
