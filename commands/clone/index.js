'use strict';

let questions = require('./questions');
let inquirer = require('inquirer');
let host = require('./host');
let Git = require('nodegit');

module.exports = {
  description: 'interactive clone repo',
  method() {
    inquirer.prompt(questions, function(answer) {
      let link = `${host(answer.host)}/${answer.scope}/${answer.repo}`;

      Git
        .Clone(link, answer.folder)
        .then(function(repo) {
          console.log(`Cloned ${answer.repo} successfully!`);
        })
        .catch(err => console.error(err));
    });
  },
};
