var express = require('express');
const request = require('request');
var router = express.Router();
const path = require('path');

// El query "type" solo es para desarrollo local.

const respuesta = (req, res) => {
  var fullUrl = 'https://mbaas.lab.cam.davivienda.com/catalogo/v1'+ req.originalUrl;
    request(fullUrl, { json: true }, (err, res2, body) => {
       return res.json(res2.body);
    });
};

router.get('/:data_id', respuesta);
router.get('/:data_id/:filtro', respuesta);

module.exports = router;