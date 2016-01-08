'use strict';

module.exports = function host(host) {
  switch (host.toLowerCase()) {
    case 'bitbucket':
      return 'https://bitbucket.org';
    case 'gitlab':
      return 'https://gitlab.com';
    default:
      return 'https://github.com';
  }
};
