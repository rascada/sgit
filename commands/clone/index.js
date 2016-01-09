'use strict';

let questions = require('./questions');
let inquirer = require('inquirer');
let clone = require('./clone');

module.exports = {
  description: 'interactive clone repo',
  method(sgit) {
    inquirer.prompt(questions(sgit.argv), function(answer) {
      //let token = require('../cred').token();

      //console.log(`${token}:x-oauth-basic@`);

      clone({
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
