var express = require("express");
const request = require("request");
var router = express.Router();
const path = require("path");

const respuesta = (req, res) => {
  const ambiente = 'lab.cam';
  var fullUrl = `https://mbaas.${ambiente}.davivienda.com/catalogo/v1${req.originalUrl}`;
  if ( req.originalUrl === '/data/ING001PROD/visible?pais=CR&lenguaje=ES&canal=2&property=status' ) {
    fullUrl = `https://mbaas.${ambiente}.davivienda.com/catalogo/v1/data/ING001/visible?pais=CR&lenguaje=ES&canal=2&property=status`;
  }

  if ( req.originalUrl === '/data/VALIDACIONES_SIM001?pais=HN&modulo=CRECAM&lenguaje=ES&limit=-1') {
    return res.json([{
      simboloMoneda: "L",
      ingresosMensuales: {
        validationForMinLength: 4,
        validationForMaxLength: 7,
        restric: "0123456789"
      },
      errores: {
        ingresosMensuales: [
          { type: 'required', label: 'Información requerida.'},
          {
            type: 'pattern',
            label: ' Formato incorrecto, se permiten 4 digitos minitmos y 7 maximos, con 2 decimales opcionales.'
          },
          { type: 'minlength', label: 'No se permiten menos de 4 digitos.'},
          { type: 'maxlength', label: 'No se permiten más de 7 digitos.'},
        ],
        valorDeseado: [],
        plazo: [],
        creditoLibranza: []
      }
    }]);
  }

  if ( req.originalUrl === '/data/VALIDACIONES_SIM001?pais=CR&modulo=CRECAM&lenguaje=ES&limit=-1') {
    return res.json([{
      "simboloMoneda": "₡"
    }]);
  }

  if ( req.originalUrl === '/data/VALIDACIONES_SIM001?pais=SV&modulo=CRECAM&lenguaje=ES&limit=-1') {
    return res.json([{
      simboloMoneda: "$"
    }]);
  }

  if ( req.originalUrl === '/data/VALIDACIONES_SIM001?pais=PA&modulo=CRECAM&lenguaje=ES&limit=-1') {
    return res.json([{
      simboloMoneda: "$"
    }]);
  }

  if ( req.originalUrl === '/data/i18n_CRE001?lenguaje=ES&pais=HN') {
    return res.json([{
      titulo: "Seleccione las condiciones de su crédito:",
      ingresosMensuales: {
        label: "¿Cuáles son sus ingresos mensuales en Lempiras?",
        mensajeGeneralError: "Información Incorrecta:"
      },
      rango: {
        label: "Escoja el valor deseado",
        min: "Min.",
        max: "Máx.",
      },
      plazo: {
        label: "Escoja el plazo",
        labelNoPlazo: "¿Cuáles son sus ingresos mensuales en Lempiras?",
        min: "Min.",
        max: "Máx.",
      },
      boton: {
        label: "Simular Crédito"
      }
    }]);
  }

  if ( req.originalUrl === '/data/i18n_CRE001?lenguaje=ES&pais=CR') {
    return res.json([{
      titulo: "Seleccione las condiciones de su crédito:",
      rango: {
        label: "Escoja el valor deseado",
        min: "Min.",
        max: "Máx.",
      },
      plazo: {
        label: "Escoja el plazo",
        min: "Min.",
        max: "Máx.",
      },
      boton: {
        label: "Simular Crédito"
      }
    }]);
  }

  if ( req.originalUrl === '/data/VALIDACIONES_SIM001?pais=SV&modulo=CRECAM&lenguaje=ES&limit=-1') {
    return res.json([{
      simboloMoneda: "$"
    }]);
  }

  if ( req.originalUrl === '/data/i18n_CRE001?lenguaje=ES&pais=SV') {
    return res.json([{
      titulo: "Seleccione las condiciones de su crédito:",
      rango: {
        label: "Escoja el valor deseado",
        min: "Min.",
        max: "Máx.",
      },
      plazo: {
        label: "Escoja el plazo",
        min: "Min.",
        max: "Máx.",
      },
      boton: {
        label: "Simular Crédito"
      }
    }]);
  }

  if ( req.originalUrl === '/data/i18n_CRE001?lenguaje=ES&pais=PA') {
    return res.json([{
      titulo: "Seleccione las condiciones de su crédito:",
      rango: {
        label: "Escoja el valor deseado",
        min: "Min.",
        max: "Máx.",
      },
      plazo: {
        label: "Escoja el plazo",
        min: "Min.",
        max: "Máx.",
      },
      boton: {
        label: "Simular Crédito"
      }
    }]);
  }

  if ( req.originalUrl === '/data/i18n_CRE002?lenguaje=ES&pais=HN') {
    return res.json([{
      "titulo": "Las condiciones de su crédito móvil que desea solicitar son:",
      "valor": "Valor:",
      "plazo": {
        "label": "Plazo:",
        "plazo": "meses"
      },
      "cuota": "La cuota mensual aproximada de su crédito es de:*",
      "boton": {
        "nuevaSimulacion": "Nueva simulación",
        "solicitarCredito": "Solicitar crédito"
      }
    }]);
  }

  if ( req.originalUrl === '/data/i18n_CRE002?lenguaje=ES&pais=PA') {
    return res.json([{
      "titulo": "Las condiciones de su crédito móvil que desea solicitar son:",
      "valor": "Valor:",
      "plazo": {
        "label": "Plazo:",
        "plazo": "meses"
      },
      "cuota": "La cuota mensual aproximada de su crédito es de:*",
      "boton": {
        "nuevaSimulacion": "Nueva simulación",
        "solicitarCredito": "Solicitar crédito"
      }
    }]);
  }

  if ( req.originalUrl === '/data/i18n_CRE002?lenguaje=ES&pais=SV') {
    return res.json([{
      "titulo": "Las condiciones de su crédito móvil que desea solicitar son:",
      "valor": "Valor:",
      "plazo": {
        "label": "Plazo:",
        "plazo": "meses"
      },
      "cuota": "La cuota mensual aproximada de su crédito es de:*",
      "boton": {
        "nuevaSimulacion": "Nueva simulación",
        "solicitarCredito": "Solicitar crédito"
      }
    }]);
  }

  if ( req.originalUrl === '/data/i18n_CRE002?lenguaje=ES&pais=CR') {
    return res.json([{
      "titulo": "Las condiciones de su crédito móvil que desea solicitar son:",
      "valor": "Valor:",
      "plazo": {
        "label": "Plazo:",
        "plazo": "meses"
      },
      "cuota": "La cuota mensual aproximada de su crédito es de:*",
      "boton": {
        "nuevaSimulacion": "Nueva simulación",
        "solicitarCredito": "Solicitar crédito"
      }
    }]);
  }

  if ( req.originalUrl === '/data/MSG_RESULTADO_SIMULACION?pais=HN&modulo=CRECAM&lenguaje=ES&limit=-1') {
    return res.json([{
      "tooltip": "La información mostrada es ''Preliminar''",
      "pieDePagina": "Tengan en cuenta que las condiciones del crédito pueden variar por sus ingresos, deudas que tenga en el sistema financiero y políticas del banco",
      "subProducto": "creditoPreaprobado"
    }, {
      "tooltip":"La información mostrada es ''Preliminar''",
      "pieDePagina":"*Tenga en cuenta que este valor es estimado y puede variar de acuerdo a las condiciones de la tasa que asignaremos luego de la evaluación."
    }]);
  }

  if ( req.originalUrl === '/data/BEN001?pais=HN&modulo=CRECAM&lenguaje=ES&limit=-1') {
    return res.json([
      {
      "asset": "asset_SVG_BEN001_ESTADISTICA",
      "id": "0",
      "descripcion": "Tasa de interes preferencial.",
      "icono": "estadistica",
      "titulo": ""
    }, {
      "asset": "asset_SVG_BEN001_PERSONA",
      "id": "1",
      "titulo": "",
      "descripcion": "Seguro de desempleo.",
      "icono": "persona"
    }, {
      "asset": "asset_SVG_BEN001_DOLAR",
      "descripcion": "Fácil y rápido, disponible cuando lo necesite.",
      "id": "2",
      "icono": "dolar",
      "titulo": ""
    }, {
      "id": "3",
      "asset": "asset_SVG_BEN001_OK",
      "titulo": "",
      "descripcion": "Sin Aval.",
      "icono": "ok"
    }, {
      "titulo": "",
      "id": "4",
      "icono": "cronometro",
      "asset": "asset_SVG_BEN001_CRONOMETRO",
      "descripcion": "Aprobación inmediata."
    },
    
    {
      "asset": "asset_SVG_BEN001_ESTADISTICA",
      "id": "0",
      "descripcion": "Tasa de interes preferencial.",
      "icono": "estadistica",
      "titulo": "",
      "subProducto": "creditoPreaprobado"
    }, {
      "asset": "asset_SVG_BEN001_PERSONA",
      "id": "1",
      "titulo": "",
      "descripcion": "Seguro de desempleo.",
      "icono": "persona",
      "subProducto": "creditoPreaprobado"
    }, {
      "asset": "asset_SVG_BEN001_DOLAR",
      "descripcion": "Fácil y rápido, disponible cuando lo necesite.",
      "id": "2",
      "icono": "dolar",
      "titulo": "",
      "subProducto": "creditoPreaprobado"
    }, {
      "id": "3",
      "asset": "asset_SVG_BEN001_OK",
      "titulo": "",
      "descripcion": "Sin Aval.",
      "icono": "ok",
      "subProducto": "creditoPreaprobado"
    }, {
      "titulo": "",
      "id": "4",
      "icono": "cronometro",
      "asset": "asset_SVG_BEN001_CRONOMETRO",
      "descripcion": "Aprobación inmediata.",
      "subProducto": "creditoPreaprobado"
    },
    
  ]);
  }

  if ( req.originalUrl === '/data/VALIDACIONES_BEN001?pais=HN&modulo=CRECAM&lenguaje=ES&limit=-1') {
    return res.json([{
      "titulo": "Adquiera su crédito móvil en menos de 10 minutos y acceda a los siguientes beneficios:",
      "detalles": [],
      "encabezado": "Beneficios y características",
      "nombreProducto": "Crédito Móvil"
    }, {
      "titulo": "Adquiera su crédito móvil en menos de 10 minutos y acceda a los siguientes beneficios:",
      "detalles": [],
      "encabezado": "Beneficios y características",
      "nombreProducto": "Crédito Móvil Preaprobado",
      "subProducto": "creditoPreaprobado"
    }]);
  }

  if ( req.originalUrl === '/data/i18n_BEN001?lenguaje=ES&pais=HN') {
    return res.json([{
      boton: {
        label: "Continuar"
      }
    }]);
  }

  if ( req.originalUrl === '/data/i18n_BEN001?lenguaje=ES&pais=PA') {
    return res.json([{
      boton: {
        label: "Continuar"
      }
    }]);
  }

  if ( req.originalUrl === '/data/i18n_BEN001?lenguaje=ES&pais=SV') {
    return res.json([{
      boton: {
        label: "Continuar"
      }
    }]);
  }

  if ( req.originalUrl === '/data/i18n_BEN001?lenguaje=ES&pais=CR') {
    return res.json([{
      boton: {
        label: "Continuar"
      }
    }]);
  }

  if (req.originalUrl === '/data/i18n_CRE006?lenguaje=ES&pais=HN') {
    return res.json([{
      "plazo": {
        "etiqueta": "Plazo:",
        "plazo": "meses"
      },
      "cuotaCredito": "Cuota:",
      "botones": {
        "cancelar": "Cancelar",
        "aceptarOferta": "Aceptar Oferta"
      },
      "valor": "Valor:",
      "encabezado": "Felicitaciones, su crédito ha sido <b>preaprobado</b>",
      "encabezadoRetanqueo": "Tenga en cuenta que el monto preaprobado, se debitará del saldo del credito vigente",
      "tasaInteresCredito": {
        "etiqueta": "Tasa:",
        "plazo": "Mensual"
      },
      "comisionDesembolso": "Comisión de desembolso:",
      "montoDesembolsar": "Monto a desembolsar:",
      "saldoCreditoVigente": "Saldo de crédito vigente:"
    }]);
  }

  
  if (req.originalUrl === '/data/i18n_CRE012?lenguaje=ES&pais=HN') {
    return res.json([
      {
        "encabezado": "Felicitaciones, estamos próximos a desembolsar su crédito",
        "botones": {
          "continuar": "Continuar"
        },
        "producto": {
          "etiqueta": "Producto:",
          "valor": "Crédito Móvil"
        },
        "valorCredito": "Valor del crédito:",
        "saldoCreditoVigente": "Saldo del crédito vigente:",
        "comisionDesembolso": "Comisión de Desembolso:",
        "montoDesembolsar": "Monto a Desembolsar:",
        "plazoCredito": {
          "etiqueta": "Plazo de crédito:",
          "plazo": "meses"
        },
        "cuentaDesembolso": "Cuenta de desembolso:",
        "fechaHora": "Fecha y hora:",
        "numeroPrestamo": "Número de Préstamo:",
        "costoTransaccion": "Costo de la transacción:"
      }
    ]);
  }

  if (req.originalUrl === '/data/i18n_CRE012?lenguaje=ES&pais=SV') {
    return res.json([
      {
        "encabezado": "Felicitaciones, su crédito ha sido desembolsado",
        "botones": {
          "continuar": "Continuar"
        }
      }
    ]);
  }

  if (req.originalUrl === '/data/i18n_CRE012?lenguaje=ES&pais=PA') {
    return res.json([
      {
        "encabezado": "Felicitaciones, estamos próximos a desembolsar su crédito",
        "botones": {
          "continuar": "Continuar"
        }
      }
    ]);
  }

  if (req.originalUrl === '/data/i18n_CRE012?lenguaje=ES&pais=CR') {
    return res.json([
      {
        "encabezado": "Felicitaciones, estamos próximos a desembolsar su crédito",
        "botones": {
          "continuar": "Continuar"
        }
      }
    ]);
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

  if ( req.originalUrl === '/data/CONFIG_COMPRESS_BIOMETRIA') {
    return res.json([{
      "config": {
        "sizeBase64": 512000,
        "sizeFile": 500,
        "step": 0.05
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
