'use strict';

let resolveHost = require('./host');

module.exports = function(argv) {
  let args = argv._;
  let repo = false;
  let host = 'github';

  if (args.length > 2) {
    repo = 2;
    host = args[1];
  }else if (args.length > 1) repo = 1;

  if (repo) repo = args[repo].split('/');
  else if (args[1]) host = args[1];

  return [
    {
      name: 'host',
      message: 'host:',
      default: resolveHost(host, true),
      when: answer => {
        if (!argv.p) {
          answer.host = resolveHost(host, true);
          return false;
        }

        return true;
      },
    }, {
      name: 'scope',
      message: 'user / organization:',
      validate: scope => !scope ? `Can't clone without scope` : true,
      default: answer => repo ? repo[0] : '',
      when: answer => {
        if (repo && !argv.p) {
          answer.scope = repo[0];
          return false;
        }

        return true;
      },
    }, {
      name: 'repo',
      message: 'repo:',
      validate: repo => !repo ? `Can't clone nothing` : true,
      default: answer => repo ? repo[1] : '',
      when: answer => {
        if (repo && !argv.p) {
          answer.repo = repo[1];
          return false;
        }

        return true;
      },
    }, {
      name: 'folder',
      message: 'folder name:',
      default: answer => answer.repo || repo[1],
      when: answer => {
        if (!argv.p) {
          answer.folder = answer.repo;
          return false;
        }

        return true;
      },
    },
  ];
};
