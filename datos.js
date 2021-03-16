const crypto = require('crypto');
const forge = require('node-forge');
const uuidv4 = require('uuid/v4');

const aes ={
    key: forge.util.encode64( forge.random.getBytesSync(32) ),
    iv: forge.util.encode64( forge.random.getBytesSync(32) )
};
var cert;

const _uuidv4 = uuidv4();
  crypto.generateKeyPair('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
      cipher: 'aes-256-cbc',
      passphrase: aes.key
    }
  }, (err, publicKey, privateKey) => {
    cert = {
      crypto: {
        metodo: "encriptacionClaveA",
        credencial : `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC2y/NlNoLoM+RocGoGmnjvb8Lj
dsOfW6T3mjUmvt9MWA1p7I4nHQG/WhAfN+uMfho0ZxlGS8wvUP80LO0UFQJ0zcjF
2nFTD1YvdiIKPKEcjb0B7xE2WxL7ZNcWWhbrpY+kIWKR0LUENqXQzx1gCF71vodz
1VlVEWgEm7LDL8GQJwIDAQAB
-----END PUBLIC KEY-----`
    }
     };
  });

  module.exports = { getDatos: () => ({ aes, cert }) };