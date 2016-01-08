'use strict';

let fs = require('fs');
let inquirer = require('inquirer');
let questions = require('./questions');
let Git = require('nodegit');

module.exports = {
  description: 'key',
  method(sgit) {
    sgit.reset()
      .usage('Usage: sgit key <command>')
      .command('add', 'add ssh key and pin it to user')
      .example('sgit key add <username> <ssh key>')
      .demand(2, ' must provide command!');

    switch (sgit.argv._[1]){
      case 'add':
        inquirer.prompt(questions, function(answer) {
          let cred = [];
          try { cred = require('../../credential'); }catch (e) {}

          cred.push(answer);
          fs.writeFile(`./credential.json`, JSON.stringify(cred), err => {
            if (err) throw err;
            console.log(' ssh key saved');
          });
        });

        break;
    }
  },
};
