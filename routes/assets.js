var express = require('express');
const request = require('request');
const env = require('../environtment');
var router = express.Router();
const path = require('path');

router.get('/:assets_id', (req, res) => {
  var fullUrl = `${env.asset}${req.originalUrl}`;

  // if( req.originalUrl === '/asset/assetInitialStyle.minify.css') {
  //   fullUrl = 'https://mbaas.desa.cam.davivienda.com/catalogo/v1'+ req.originalUrl;
  //   // return res.send(``);
  // }

  // if( req.originalUrl === '/asset/assetForbiddenStyle.minify.css') {
  //   fullUrl = 'https://mbaas.desa.cam.davivienda.com/catalogo/v1'+ req.originalUrl;
  //   // return res.send(``);
  // }

  // if( req.originalUrl === '/asset/assetMenuStyle.minify.css') {
  //   fullUrl = 'https://mbaas.desa.cam.davivienda.com/catalogo/v1'+ req.originalUrl;
  //   // return res.send(``);
  // }

  // if( req.originalUrl === '/asset/assetCamStyle.minify.css') {
  //   fullUrl = 'https://mbaas.desa.cam.davivienda.com/catalogo/v1'+ req.originalUrl;
  //   // return res.send(``);
  // }
  
  request(fullUrl, { json: true }, (err, res2, body) => {
    if ( !res2 ) {
      return res.status(500).json({});
    }
    return res.send(res2.body);
  });  
});

module.exports = router;