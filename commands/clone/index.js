'use strict';

let questions = require('./questions');
let inquirer = require('inquirer');
let host = require('./host');
let Git = require('nodegit');

module.exports = {
  description: 'interactive clone repo',
  method(sgit) {
    inquirer.prompt(questions(sgit.argv), function(answer) {
      let link = `${host(answer.host)}/${answer.scope}/${answer.repo}`;

      Git
        .Clone(link, answer.folder)
        .then(function(repo) {
          console.log(`\n Cloned ${answer.scope}/${answer.repo} from ${answer.host} to ./${answer.folder}`);
        })
        .catch(er => console.error(`\n ${er.toString()}`));
    });
  },
};
