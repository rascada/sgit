'use strict';

let fs = require('fs');

module.exports = {
  description: 'store credential',
  method(sgit) {
    sgit
      .reset()
      .usage('usage: sgit cred <token>')
      .demand(2, ' wrong');

    let args = sgit.argv._;
    if (args.length > 1)
      fs.writeFile('./token.json',
        JSON.stringify(args[1]),
        function() {
          console.log(`\n token saved`);
        });
  },

  token() {
    try {
      return require('../token');
    } catch (e) {
      return false;
    }
  },
};
