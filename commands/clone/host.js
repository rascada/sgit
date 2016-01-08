'use strict';

module.exports = function host(host, name) {
  host = resolveHost(host);

  return !name
    ? host
    : host
      .match(/\/[\w]+/)[0]
      .replace('/', '');
};

function resolveHost(host) {
  switch (host.toLowerCase()) {
    case 'bitbucket':
      return 'https://bitbucket.org';
    case 'gitlab':
      return 'https://gitlab.com';
    default:
      return 'https://github.com';
  }
};
