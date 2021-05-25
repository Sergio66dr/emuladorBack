var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.json([{
    data: {
      event: 'appReady',
      response: {
        uuidDevice: '111111',
        commonsParamsRequest: {
          appId: 'v465465'
        },
        os: "windows",
        enrollmentType: 'Emulador',
        mobileEnrollmentKey: '99999999999999999999999999999'
      }
    }
  }, {
    data: {
      event: 'appReady',
      response: {
        uuidDevice: '22222',
        commonsParamsRequest: {
          appId: 'v465465'
        },
        os: "windows",
        enrollmentType: 'Emulador',
        mobileEnrollmentKey: '99999999999999999999999999999'
      }
    }
  }]);
});

module.exports = router;