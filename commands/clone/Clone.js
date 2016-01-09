'use strict';

let host = require('./host');
let Git = require('nodegit');

module.exports = class Clone {
  constructor(repo) {
    this.repo = repo;

    return this.clone();
  }

  url() {
    let repo = this.repo;
    let url = `${host(repo.host)}/${repo.scope}/${repo.name}`;

    if (repo.token) {
      let token = require('../cred').token();
      let pos = url.indexOf('://') + 3;

      url = url.slice(0, pos) + `${token}:x-oauth-basic@` + url.slice(pos) + '.git';
    }

    return repo.url = url;
  }

  success(git) {
    return repo =>
      git.done(rep =>
        rep instanceof Git.Repository ? res(repo) : rej('something broken'));
  }

  clone(repo) {
    if (!repo) repo = this.repo;

    return new Promise((res, rej) => {
      let git = Git.Clone(this.url(), repo.folder);

      git
        .then(this.success(git))
        .catch(er => {
          console.log(` failed to fetch ${repo.url}`);
          if (!repo.token) {
            repo.token = true;
            this.clone(repo).then(this.success(git)).catch(er => rej(er));
          } else rej(er);
        });
    });
  }
};
