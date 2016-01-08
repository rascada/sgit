'use strict';

let questions = require('./questions');
let inquirer = require('inquirer');
let host = require('./host');

module.exports = {
  clone() {
    inquirer.prompt(questions, function(answer) {
      let link = `${host(answer.host)}/${answer.scope}/${answer.repo}`;

      Git
        .Clone(link, answer.repo)
        .then(function(repo) {
          console.log(`Cloned ${answer.repo} successfully!`);
        })
        .catch(err => console.error(err));
    });
  },
};
