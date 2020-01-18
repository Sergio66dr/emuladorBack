var express = require('express');
var router = express.Router();
var datos = null;
var flujo = '';
var n = 0;

countrie = (req, res, next) => {
  //console.clear();
  flujo = req.body.assertion;
  datos = require(`../OTPs/${req.body.assertion}`);
  console.log('pais:XXX::::::',);
  req.body = { token: req.body.grant_type === 'refresh_token' ? 'eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vbWJhYXMuZGVzYS5jby5kYXZpdmllbmRhLmNvbS9hdXRoL3YxL2tleXN0b3JlLy53ZWxsLWtub3duL2p3a3MuanNvbiIsImtpZCI6IjE1NzY2MzM4MTIifQ.eyJhdWQiOiJEQVY6Q0xPVUQ6QVVUSCIsImV4cCI6MTU3OTAzOTAxNCwiaWF0IjoxNTc5MDM3MjE0LCJpc3MiOiJEQVY6Q0xPVUQ6QVVUSCIsInN1YiI6Ijk0NTIzMmYwLTM3MTQtMTFlYS05MWFlLThmMTkxOGM3NGFkOCIsInVzZSI6InIiLCJwcm9kdWN0IjoiTU5VSU5HX0NSXzEiLCJqdGkiOiI5NjJlMWVlMC0zNzE0LTExZWEtODQ3Yy1hOWIwZTNjNzM5NWIifQ.K6yil8Q9AuR8cagCwMdN_S1OurSwkbHirWoswtBQ2LlHapSoqasdwyAiOhbMh9tZU5lMEr3e_avtnvJQMdEpmNjWB3GgEmzpDoquwOUScNsPVG524Zjb9mMb1BSW75q1W1j5FdSNXcW_RDHm2pa7ikDKlGHVg_wgKImzoMiXiTMKZDMJfCsN_btEdNaEN5viWV_-fi3ozsTX-pzW-jqO-htkOMtKb3N2qUKrx5dk5zNnIToqfgRfDDpUoC0chl7vyG6ZZV0B3mQ0XQlbsg3Yz-qe0D10b1cbK4g3nK7Ok1BlEje2bEzXWbYWXXW6ciT09iy4O1uCcge81tR6xGqlmA' :datos.token}
  next();
};

router.post('/workflow', (req, res) => {
  // console.clear();
  console.log(req.ip);
  console.log(req.ip);
  console.log(req.ip);
  console.log(req.ip);
  console.log(req.ip);
  console.log(req.ip);
  console.log(req.body.stepId);
  var paso = req.body.stepId;
  var response = {
    data: {
      status: datos[datos.workflow[paso]].status,
      clientId: '1234-4567-8901-2345-6789-0123',
      payload: datos[datos.workflow[paso]].payload,
      stepId: datos.workflow[paso]
    },
    errors: []
  };
  console.log('==============================================================================');
  console.warn(response);
  console.log('==============================================================================');
  // if (n === 1) {
  //   res.status(401).json(response);
  // }
  // if (n > 1 || n === 0) {
  //   if ( n > 3) {
  //     n = 0;
  //   }
  res.status(200).json(response);
  // }
  // n = n + 1;
});

// access_token

// {
//   "iss": "Online JWT Builder",
//   "iat": 1565906011,
//   "exp": 1597442011,
//   "aud": "www.example.com",
//   "sub": "jrocket@example.com",
//   "cliendtID": "0123456789",
//   "partner": "ML",
//   "product": "CAM",
//   "lenguaje": "es-CR",
//   "canal": "web",
//   "pais": "CR",
//   "modulo": "que???"
// }

router.post('/auth', countrie, (req, res) => {
  console.log('XXXXXXXXX:::::::::::::',req.body);
  res.json({
    state:1, 
    access_token: req.body.token,
    refresh_token:'abslslRSkskED2233ksksk82sss7jjsjjsRRksksF92DDD'
  });
});

module.exports = router;