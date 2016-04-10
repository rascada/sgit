module.exports = [{
    name: 'user',
    message: 'username:',
    validate: user => !user ? `Need user to add key to` : true,
  }, {
    name: 'publickey',
    message: 'public key:',
    validate: key => !key ? `need key to add` : true,
  }, {
    name: 'privatekey',
    message: 'private key:',
    validate: key => !key ? `need key to add` : true,
  }, {
    name: 'passphrase',
    message: 'passphrase:',
  },
];
