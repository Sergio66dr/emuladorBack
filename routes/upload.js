var express = require('express');
var storage = require('../storage')();
var router = express.Router();
const crypto = require('crypto');
const forge = require('node-forge');
var get_ip = require('ipware')().get_ip;
const path = require('path');
const uuidv4 = require('uuid/v4');
let _datos;

var decryptAESCBC = (encrypted, keyBase64, ivBase64) => {
  console.log({ keyBase64, ivBase64 });
  keyBase64 = forge.util.decode64(keyBase64);
  ivBase64 = forge.util.decode64(ivBase64);
  encrypted = forge.util.decode64(encrypted);
  var decipher = forge.cipher.createDecipher('AES-CBC', keyBase64);
  decipher.start({iv: ivBase64 || '' });
  decipher.update( forge.util.createBuffer( encrypted ) );
  decipher.finish();
  return decipher.output.getBytes();
}

let key;
let iv;

router.post('/', (req, res) => {
  
  storage.storage(
    req,
    (bytesReceived, bytesExpected) => {
      console.log('Porcentaje de Recibimiento: ', (100/bytesExpected)*bytesReceived + '%');
    },
    (name, field) => {
      // console.log('Got a field:', name, field);
      // LHCD
      if (name === 'img_001') {
        const name = path.join(__dirname, `../public/LHC_${uuidv4()}.png`);
        require("fs").writeFile(name, (
          // decryptAESCBC(
            field
           // , _datos.getDatos().aes.key, _datos.getDatos().aes.iv
           // )
        ).replace(/^data:.*;base64,/, ""), 'base64', err => { });
      }

      // BIOMETRIA
      if (name === 'img_frontDni_0' || name === 'img_frontDni' || name === 'img_backDni_0' || name === 'img_backDni') {
        const name = path.join(__dirname, `../public/${uuidv4()}.jpeg`);
        require("fs").writeFile(name, field.replace(/^data:.*;base64,/, ""), 'base64', err => { });
      }
    },
    (name, file) => {
    },
    (err) => {},
    () => {},
    () => {
      res.json({
        data: {
          status: true,
          imagesRef: { img_face: '', img_faceMap: '' },
          fechaFtp: new Date(),
          nombreArchivo: 'XXXXX'
        }
      });
    }
   );
});

module.exports = ( datos ) => {
  _datos = datos;
  return router
};