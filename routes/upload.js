var express = require('express');
var storage = require('../storage')();
var router = express.Router();
var get_ip = require('ipware')().get_ip;
const path = require('path');
const uuidv4 = require('uuid/v4');

router.post('/', (req, res) => {
  
  storage.storage(
    req,
    (bytesReceived, bytesExpected) => {
      console.log('Porcentaje de Recibimiento: ', (100/bytesExpected)*bytesReceived + '%');
    },
    (name, field) => {
      console.log('Got a field:', name, field);
      // LHCD
      if (name === 'img_001') {
        const name = path.join(__dirname, `../public/${uuidv4()}.png`);
        require("fs").writeFile(name, field.replace(/^data:image\/png;base64,/, ""), 'base64', err => { });
      }

      // BIOMETRIA
      if (name === 'img_frontDni_0' || name === 'img_frontDni' || name === 'img_backDni_0' || name === 'img_backDni') {
        const name = path.join(__dirname, `../public/${uuidv4()}.jpeg`);
        require("fs").writeFile(name, field.replace(/^data:image\/jpeg;base64,/, ""), 'base64', err => { });
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

module.exports = router;