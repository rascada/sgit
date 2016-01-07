#! /usr/bin/env node

'use strict';

let inquirer = require('inquirer');
let sGit = require('commander');
let Git = require('nodegit');

let pkg = require('./package');
let host = require('./host');

sGit
  .usage(' ')
  .version(pkg.version)
  .parse(process.argv);

let questions = [{
    name: 'host',
    message: 'host',
    default: 'github',
  }, {
    name: 'scope',
    message: 'user / organization:',
    validate: scope => !scope ? `Can't clone without scope` : true,
  }, {
    name: 'repo',
    message: 'repo:',
    validate: repo => !repo ? `Can't clone nothing` : true,
  },
];

inquirer.prompt(questions, function(answer) {
  let link = `${host(answer.host)}/${answer.scope}/${answer.repo}`;

  Git
    .Clone(link, answer.repo)
    .then(function(repo) {
      console.log(`Cloned ${answer.repo} successfully!`);
    })
    .catch(err => console.error(err));
});
