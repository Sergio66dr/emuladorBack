var express = require("express");
const request = require("request");
var router = express.Router();
const path = require("path");

const respuesta = (req, res) => {
  var fullUrl = `${env.data}${req.originalUrl}`;
  if ( req.originalUrl.indexOf('ING001') !== -1 ) {
    return res.json(
      [
        {
        "condiciones": [],
        "descripcion": "Crédito de consumo con aprobación en línea",
        "status": "visible",
        "data": {
          "workflow": "CRECAM"
        },
        "tipo": "workflow",
        "titulo": "Crédito Móvil",
        "imagen": "asset_IMG_ING001_001"
      }, {
        "status": "visible",
        "condiciones": [],
        "imagen": "asset_IMG_ING001_002",
        "titulo": "Cuenta Móvil",
        "tipo": "workflow",
        "data": {
          "workflow": "CTACAM"
        },
        "descripcion": "Ábrala desde su celular sin costo y comience a usarla de inmediato"
      }, {
        "titulo": "Tarjeta Móvil",
        "tipo": "urlExterna",
        "data": {
          "urlExterna": {
            "urlExterna": "https://crediquick.apptividad.net/DAVICR_Autoatencion_QA/Apptividad.Ozono.WebApp/Home/IndexDeepLinkWithSSOT?pSSOT=9CE0EC2D-47E8-47DC-BB06-CA83E0DF5E6F&pModelId=PRIV_DAVI_AUTO_ATENCION;;1"
          }
        },
        "condiciones": [],
        "imagen": "asset_IMG_ING001_003",
        "status": "visible",
        "descripcion": "Solicítela y recíbala en su domicilio"
      }, {
        "condiciones": [],
        "status": "visible",
        "titulo": "Depósitos a Plazo",
        "tipo": "postMessage",
        "descripcion": "Abra un Depósito a Plazo 100% Digital",
        "imagen": "asset_IMG_ING001_004",
        "data": {
          "postMessage": "op_cdt"
        }
      }]
    );
  }

  if ( req.originalUrl === '/data/DIMENCIONES_LHC?pais=SV&modulo=CRECAM&lenguaje=ES&canal=2&limit=-1') {
    return res.json([{
      "width": 500,
      "height": 1686
    }]);
  }

  if ( req.originalUrl === '/data/DIMENCIONES_LHC?pais=SV&modulo=CRECAM&lenguaje=ES&canal=1&limit=-1') {
    return res.json([{
      "width": 990,
      "height": 1165
    }]);
  }

  if ( req.originalUrl === "/data/VALIDACIONES_CVI001?pais=CR&modulo=CTACAM&lenguaje=ES&limit=-1" || req.originalUrl === "/data/VALIDACIONES_CVI001?pais=CR&modulo=CRECAM&lenguaje=ES&limit=-1") {
    return res.json([{
      "claveVirtualConfirm": {
        "rules": {
          "restric": "1234567890qwertyuiopasdfghjklmnbvcxzQWERTYUIOPLKJHGFDSAZXCVBNM,.",
          "regex": "^((.*[1234567890]+.*[qwertyuiopasdfghjklmnbvcxzQWERTYUIOPLKJHGFDSAZXCVBNM]+.*)|(.*[qwertyuiopasdfghjklmnbvcxzQWERTYUIOPLKJHGFDSAZXCVBNM]+.*[1234567890]+.*))$",
          "maxLength": 30,
          "minLength": 8
        },
        "errors": {
          "title": "Información Incorrecta:",
          "message": [{
            "label": "Información requerida.",
            "type": "required"
          }, {
            "type": "pattern",
            "label": "Debe de contener al menos una letra y un número."
          }, {
            "type": "minlength",
            "label": "No se permiten menos de 8 digitos."
          }, {
            "label": "No se permiten más de 30 digitos.",
            "type": "maxlength"
          }]
        },
        "placeholder": ""
      },
      "tooltip": {
        "ccMessage": "<label>La clave virtual:</label><ul><li>Debe incluir de 8 a 30 caracteres.</li><li>Debe contener números y letras.</li><li>No se debe utilizar tilde.</li><li>No debe contener caracteres especiales, sólo permite el uso de la coma y punto.</li><li>El usuario y la clave no deben ser iguales, ni debén ser el Nro. Cédula, identificación, pasaporte, DIMEX y DIDI.</li></ul> ",
        "ccWord": "i"
      },
      "claveVirtual": {
        "errors": {
          "message": [{
            "label": "Información requerida.",
            "type": "required"
          }, {
            "type": "pattern",
            "label": "Debe de contener almenos una letra y un número."
          }, {
            "label": "No se permiten menos de 8 digitos.",
            "type": "minlength"
          }, {
            "label": "No se permiten más de 30 digitos.",
            "type": "maxlength"
          }],
          "title": "Información Incorrecta:"
        },
        "placeholder": "",
        "rules": {
          "regex": "^((.*[1234567890]+.*[qwertyuiopasdfghjklmnbvcxzQWERTYUIOPLKJHGFDSAZXCVBNM]+.*)|(.*[qwertyuiopasdfghjklmnbvcxzQWERTYUIOPLKJHGFDSAZXCVBNM]+.*[1234567890]+.*))$",
          "restric": "1234567890qwertyuiopasdfghjklmnbvcxzQWERTYUIOPLKJHGFDSAZXCVBNM,.",
          "minLength": 8,
          "maxLength": 30
        }
      }
    }]);
  }

  request(fullUrl, { json: true }, (err, res2, body) => {
    return res.json(res2.body);
  });
};

router.get("/:data_id", respuesta);
router.get("/:data_id/:filtro", respuesta);

module.exports = router;
