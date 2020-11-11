var express = require('express');
const uuidv1 = require('uuid/v1');
var router = express.Router();
var datos = null;
var flujo = '';
var n = 0;
var reAuth = 0;
var _reAuth = Infinity;

countrie = (req, res, next) => {
  reAuth = 0;
  console.clear();
  flujo = req.body.assertion;
  datos = require(`../OTPs/${req.body.assertion}`);
  console.log('pais:XXX::::::',);
  req.body = {
    token: req.body.grant_type === 'refresh_token' ? 'miFefreshToken' :datos.token
  };
  _reAuth = datos.reAuth === undefined ? 3 : datos.reAuth
  next();
};

router.post('/workflow', (req, res) => {
  console.clear();
  console.log(n + 1);
  n = n + 1;
  var paso = req.body.stepId;
  if ( paso === 'RET000' ) {
    datos[req.body.payload.stepId].payload.retoma = req.body.payload.retoma;
    // persistir(req.body.payload.stepID, req.body.payload.retoma);
    paso = req.body.payload.stepId
  }
  var response = {
    data: {
      status: datos[datos.workflow[paso]].status,
      clientId: '1234-4567-8901-2345-6789-0123',
      payload: datos[datos.workflow[paso]].payload,
      stepId: datos.workflow[paso],
      message: datos[datos.workflow[paso]].message
    },
    errors: []
  };
  console.log('==============================================================================');
  console.log(req.body.stepId);
  console.warn(response);
  console.log('==============================================================================');
  // if (n === 1) {
  //   res.status(401).json(response);
  // }
  // if (n > 1 || n === 0) {
  //   if ( n > 3) {
  //     n = 0;
  //   }
  setTimeout(() => res.status(200).json(response), 1);
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
  let response = {
    state: 1,
    access_token: 'eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vbWJhYXMuY2FtLmRhdml2aWVuZGEuY29tL2F1dGgvdjEva2V5c3RvcmUvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiMTU5MDk5OTA0NiJ9.eyJhdWQiOiJEQVY6Q0xPVUQ6QVVUSCIsImV4cCI6MTYwMDQ5ODg3NywiaWF0IjoxNjAwNDk3MDc3LCJpc3MiOiJEQVY6Q0xPVUQ6QVVUSCIsInN1YiI6ImI5MjQ2NWQwLWZhNDEtMTFlYS1iMTEzLWVmMTU2M2Q2NGNmZCIsInVzZSI6Im8iLCJwcm9kdWN0IjoiTU5VSU5HX1NWXzEiLCJqdGkiOiJiOTU2OTk2MC1mYTQxLTExZWEtYjFkYy1lYjk1MTk2MmQzZTYifQ.ianYIupen8VK8Pjahgn79R7JV9FB05fwhvWovGaCH4zspo1toVZ2PaeMN_tlhf1aZxtkTcZCMpKGe697ew43NmSSFTBpaXZTJfmzkZ-r9QyY3tADH3KFyplrxZBzolYO_jiby72SN83p1CeI4uPjRQVrgupJnzMj9kRyeyp1Twn5GzLk1A7Xh6MFWDr1bvil036-f1yIiAJTyuAR9DLiynVlZTsAm4ooZssuS81-_m--jRnxeJiXWXC4QjWeXNsNN5sbAsVZpEAc2ncgRMbNytnvc-x4AE9uOONmGqaPDQnc_HGcmqYstG98czrycEHAHL2obNV1oreN4T3zUj20yg',
    refresh_token: uuidv1()
  };
  reAuth = 0;
  res.json(response);
});


router.post('/reAuth', (req, res) => {
  res.json({
    access_token: uuidv1()
  });
});

module.exports = router;