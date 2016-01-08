module.exports = [{
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
