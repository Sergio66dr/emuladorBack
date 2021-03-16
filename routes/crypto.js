var express = require("express");
var router = express.Router();
let _datos;
router.post("/AES", (req, res) => {
  res.json(_datos.getDatos().aes);
});

router.get("/certificado/:id", (req, res) => {
  res.json({ data: _datos.getDatos().cert.crypto.credencial, cert: _datos.getDatos().cert });
});

module.exports = ( datos ) => {
  _datos = datos;
  return router
};
