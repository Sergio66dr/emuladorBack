var express = require('express');
const request = require('request');
var router = express.Router();
const path = require('path');

router.get('/:assets_id', (req, res) => {
  var fullUrl = 'https://mbaas.lab.cam.davivienda.com/catalogo/v1'+ req.originalUrl;

  if ( req.originalUrl === '/asset/assetScriptTagginPlan') {
    return res.send(`var getPayload = (formulario, paises) => {
      const form = formulario.getRawValue();
      return {
        documento: {
          tipo: form.tipoDocumento,
          no: form.numeroDoc
        },
        pais: {
          nombre: paises.filter( item => item.value === form.pais)[0].label,
          codigo: form.pais
        }
      };
    };`)
  }
  
  request(fullUrl, { json: true }, (err, res2, body) => {
    if ( !res2 ) {
      return res.status(500).json({});
    }
    return res.send(res2.body);
  });  
});

module.exports = router;