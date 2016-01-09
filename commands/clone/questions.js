'use strict';

let resolveHost = require('./host');

module.exports = function(argv) {
  let repo = false;
  let host = 'github';

  if (argv.length > 2) {
    repo = 2;
    host = argv[1];
  }else if (argv.length > 1) repo = 1;

  if (repo) repo = argv[repo].split('/');

  return [{
      name: 'host',
      message: 'host:',
      default: resolveHost(host, true),
    }, {
      name: 'scope',
      message: 'user / organization:',
      validate: scope => !scope ? `Can't clone without scope` : true,
      default: answer => repo ? repo[0] : '',
    }, {
      name: 'repo',
      message: 'repo:',
      validate: repo => !repo ? `Can't clone nothing` : true,
      default: answer => repo ? repo[1] : '',
    }, {
      name: 'folder',
      message: 'folder name:',
      default: answer => answer.repo,
    },
  ];
};
