'use strict';

let host = require('./host');
let Git = require('nodegit');

module.exports = class Clone {
  constructor(repo) {
    this.repo = repo;

    return this.start();
  }

  start(repo) {
    repo = repo || this.repo;

    return new Promise((res, rej) => {
      let url = `${host(repo.host)}/${repo.scope}/${repo.name}`;

      Git
        .Clone(url, repo.folder, {
          remoteCallbacks: {
            certificateCheck: _ => 1,
            credentials: _ => {
              Git.Cred.userpassPlaintextNew(token, 'x-oauth-basic');
            },
          },
        })
        .catch(er => rej(er))
        .done(function(rep) {
          /*
          if (rep instanceof Git.Repository)
            console.info('We cloned the repo!');
          else
            console.error('Something borked :(');
          */
          res(repo);
        });
    });
  }
};
