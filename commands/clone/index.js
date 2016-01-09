'use strict';

let questions = require('./questions');
let inquirer = require('inquirer');
let Clone = require('./Clone');

module.exports = {
  description: 'interactive clone repo',
  method(sgit) {
    inquirer.prompt(questions(sgit.argv), function(answer) {
      let clone = new Clone({
        host: answer.host,
        scope: answer.scope,
        name: answer.repo,
        folder: answer.folder,
      })
      .then(repo =>
        console.log(`\n Cloned ${repo.scope}/${repo.name} from ${repo.host} to ./${repo.folder}`)
      )
      .catch(er => console.log(`\n ${er.toString()}`));
    });
  },
};
