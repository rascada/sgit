'use strict';

let fs = require('fs');

module.exports = {
  description: 'store credential',
  method(sgit) {
    sgit
      .reset()
      .usage('usage: sgit cred <user> <password>')
      .demand(3, '\n wrong');

    let args = sgit.argv._;
    if (args.length > 1)
      fs.writeFile('./cred.json',
        JSON.stringify([args[1], args[2]]),
        function() {
          console.log(`\n credential for ${args[1]} saved`);
        });
  },
};
