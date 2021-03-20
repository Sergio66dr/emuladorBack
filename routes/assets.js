var express = require("express");
const request = require("request");
var router = express.Router();
const env = require('../environtment');
const fs = require('fs');

html5 = true;

const ambiente = {
  lab: '5021',
  desa: '5020',
  5021: 'laboratorio',
  5020: 'desarrollo'
}

const centroAmerica = [
  // Libranza Autorizaciones
  { type: 'xPUT', kind: 'assetsCartaCondicionesMinimas?pais=SV&modulo=CTACAM&lenguaje=ES', data: fs.readFileSync('./assets/assetsCartaCondicionesMinimas.html', 'utf8') },
  { type: 'xPUT', kind: 'assetsCartaCondicionesMinimas?pais=SV&modulo=CRECAM&lenguaje=ES', data: fs.readFileSync('./assets/assetsCartaCondicionesMinimas.html', 'utf8') },
  { type: 'xPUT', kind: 'assetsFormularioDeVinculacion?pais=SV&modulo=CTACAM&lenguaje=ES', data: fs.readFileSync('./assets/assetsFormularioDeVinculacion.html', 'utf8') },
  { type: 'xPUT', kind: 'assetsFormularioDeVinculacion?pais=SV&modulo=CRECAM&lenguaje=ES', data: fs.readFileSync('./assets/assetsFormularioDeVinculacion.html', 'utf8') },
  { type: 'xPUT', kind: 'assetsCuentaCargoCasoMora?pais=SV&modulo=CTACAM&lenguaje=ES', data: fs.readFileSync('./assets/assetsCuentaCargoCasoMora.html', 'utf8') },
  { type: 'xPUT', kind: 'assetsCuentaCargoCasoMora?pais=SV&modulo=CRECAM&lenguaje=ES', data: fs.readFileSync('./assets/assetsCuentaCargoCasoMora.html', 'utf8') },
  { type: 'xPUT', kind: 'assetFormularioW9?pais=SV&modulo=CTACAM&lenguaje=ES', data: fs.readFileSync('./assets/assetFormularioW9.html', 'utf8') },
  { type: 'xPUT', kind: 'assetFormularioW9?pais=SV&modulo=CRECAM&lenguaje=ES', data: fs.readFileSync('./assets/assetFormularioW9.html', 'utf8') },
  // prueba
  { type: 'xPOST', kind: 'assetPruebaGenerar?pais=PA&modulo=CTACAM&lenguaje=ES', data: fs.readFileSync('./assets/assetsCuentaCargoCasoMora.html', 'utf8')},
  // SCSS
  { type: 'xDELETE', kind: 'assetCamStyle.minify.css', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')},
  { type: 'xPUT', kind: 'assetCamStyle.minify.css?pais=SV&modulo=CRECAM&lenguaje=ES', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')},
  { type: 'xPUT', kind: 'assetCamStyle.minify.css?pais=SV&modulo=CTACAM&lenguaje=ES', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')},
  { type: 'xPUT', kind: 'assetCamStyle.minify.css?pais=SV&modulo=CRECAM&lenguaje=ES', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')},
  { type: 'xPUT', kind: 'assetCamStyle.minify.css?pais=SV&modulo=CTACAM&lenguaje=ES', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')},
  { type: 'xPUT', kind: 'assetCamStyle.minify.css?pais=SV&modulo=LIBCAM&lenguaje=ES', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')},
  { type: 'xPUT', kind: 'assetCamStyle.minify.css?pais=SV&modulo=LIBCAM&lenguaje=ES', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')},

  { type: 'xPUT', kind: 'assetCamStyle.minify.css?pais=PA&modulo=CRECAM&lenguaje=ES', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')},
  { type: 'xPUT', kind: 'assetCamStyle.minify.css?pais=PA&modulo=CTACAM&lenguaje=ES', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')},
  { type: 'xPUT', kind: 'assetCamStyle.minify.css?pais=PA&modulo=CRECAM&lenguaje=ES', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')},
  { type: 'xPUT', kind: 'assetCamStyle.minify.css?pais=PA&modulo=CTACAM&lenguaje=ES', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')},
  { type: 'xPUT', kind: 'assetCamStyle.minify.css?pais=PA&modulo=LIBCAM&lenguaje=ES', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')},
  { type: 'xPUT', kind: 'assetCamStyle.minify.css?pais=PA&modulo=LIBCAM&&lenguaje=ES', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')},

  { type: 'xPUT', kind: 'assetCamStyle.minify.css?pais=CR&modulo=CRECAM&lenguaje=ES', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')},
  { type: 'xPUT', kind: 'assetCamStyle.minify.css?pais=CR&modulo=CTACAM&lenguaje=ES', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')},
  { type: 'xPUT', kind: 'assetCamStyle.minify.css?pais=CR&modulo=CRECAM&lenguaje=ES', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')},
  { type: 'xPUT', kind: 'assetCamStyle.minify.css?pais=CR&modulo=CTACAM&lenguaje=ES', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')},
  { type: 'xPUT', kind: 'assetCamStyle.minify.css?pais=CR&modulo=LIBCAM&lenguaje=ES', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')},
  { type: 'xPUT', kind: 'assetCamStyle.minify.css?pais=CR&modulo=LIBCAM&lenguaje=ES', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')},

  { type: 'xPUT', kind: 'assetCamStyle.minify.css?pais=HN&modulo=CRECAM&lenguaje=ES', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')},
  { type: 'xPUT', kind: 'assetCamStyle.minify.css?pais=HN&modulo=CTACAM&lenguaje=ES', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')},
  { type: 'xPUT', kind: 'assetCamStyle.minify.css?pais=HN&modulo=CRECAM&lenguaje=ES', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')},
  { type: 'xPUT', kind: 'assetCamStyle.minify.css?pais=HN&modulo=CTACAM&lenguaje=ES', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')},
  { type: 'xPUT', kind: 'assetCamStyle.minify.css?pais=HN&modulo=LIBCAM&lenguaje=ES', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')},
  { type: 'xPUT', kind: 'assetCamStyle.minify.css?pais=HN&modulo=LIBCAM&lenguaje=ES', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')},

  { type: 'xPUT', kind: 'assetInitialStyle.minify.css', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')},//fs.readFileSync('./assets/assetInitialStyle.minify.css', 'utf8')},
  { type: 'xPUT', kind: 'assetMenuStyle.minify.css', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')},//fs.readFileSync('./assets/assetMenuStyle.minify.css', 'utf8')},
  { type: 'xPUT', kind: 'assetForbiddenStyle.minify.css', data: fs.readFileSync('./assets/assetCamStyle.minify.css', 'utf8')} //fs.readFileSync('./assets/assetForbiddenStyle.minify.css', 'utf8')}
  ,

  // fake

  { type: "xPUT", kind: "asset_IMG_ING001_001", data: "data:image/png;base64,"+fs.readFileSync('./assets/blob_http___localhost_4201_f7aa3956-3b11-4a42-a673-f9a4fbba95d9.png', 'base64')},
  { type: "xPUT", kind: "asset_IMG_ING001_002", data: "data:image/png;base64,"+fs.readFileSync('./assets/blob_http___localhost_4201_f7aa3956-3b11-4a42-a673-f9a4fbba95d9.png', 'base64')},
  { type: "xPUT", kind: "asset_IMG_ING001_003", data: "data:image/png;base64,"+fs.readFileSync('./assets/blob_http___localhost_4201_f7aa3956-3b11-4a42-a673-f9a4fbba95d9.png', 'base64')},
  { type: "xPUT", kind: "asset_IMG_ING001_004", data: "data:image/png;base64,"+fs.readFileSync('./assets/blob_http___localhost_4201_f7aa3956-3b11-4a42-a673-f9a4fbba95d9.png', 'base64')},

  // Libranza
  { type: "xPUT", kind: "assetImagenRechazo", data: fs.readFileSync('./assets/rechazo.txt', 'utf8')},
  { type: "xPUT", kind: "asset_IMG_ING001_005", data: "data:image/png;base64,"+fs.readFileSync('./assets/blob_http___localhost_4201_f7aa3956-3b11-4a42-a673-f9a4fbba95d9.png', 'base64')},
  { type: "xPUT", kind: "asset_IMG_ING001_006", data: "data:image/png;base64,"+fs.readFileSync('./assets/blob_http___localhost_4201_f7aa3956-3b11-4a42-a673-f9a4fbba95d9.png', 'base64')},
  { type: "xPUT", kind: "assetTerminosCondiciones_SeguroVidaDesempleo?pais=CR&modulo=LIBCAM&lenguaje=ES", data: fs.readFileSync('./assets/assetTerminosCondiciones_SeguroVidaDesempleo.html', 'utf8') },
  { "type": "PUT", "kind":"asset_AUTORIZACION_INFORMACION_CREDITICIA?pais=CR&modulo=LIBCAM&lenguaje=ES", data: fs.readFileSync('./assets/datosMinimosCR_LIBRANZA.html', 'utf8') },
  { "type": "PUT", "kind":"asset_POLITICA_PRIVACIDAD?pais=CR&modulo=LIBCAM&lenguaje=ES", data: fs.readFileSync('./assets/DatosMinimos_Libranza_CR_PolíticadePrivacidad.html', 'utf8') },
  { "type": "PUT", "kind":"asset_TERMINOS_CONDICIONES_PRODUCTO?pais=CR&modulo=LIBCAM&lenguaje=ES", data: fs.readFileSync('./assets/ingreso_TerminosCondiciones_LIBRANZA.html', 'utf8') },
  { "type": "PUT", "kind":"assetImagenMiniAdd", data: fs.readFileSync('./assets/addMini.txt', 'utf8') },
  { "type": "PUT", "kind":"assetImagenMiniRemove", data: fs.readFileSync('./assets/removeMini.txt', 'utf8') },
  { "type": "PUT", "kind":"assetImagenBigRemove", data: fs.readFileSync('./assets/removeMini.txt', 'utf8') },
  

  // pdf416
  // 27 de Febrero 2021
  { type: 'xPUT', kind: 'asset_CONTRATO_CUENTA_AHORROS?pais=SV&modulo=CTACAM&lenguaje=ES', data: fs.readFileSync('./assets/CONTRATO_CUENTA_AHORROS.html', 'utf8') },
  { type: 'xPUT', kind: 'asset_CONTRATO_CUENTA_AHORROS?pais=SV&modulo=CRECAM&lenguaje=ES', data: fs.readFileSync('./assets/CONTRATO_CUENTA_AHORROS.html', 'utf8') },
  { type: 'xPUT', kind: 'asset_CONTRATO_BANCA_ELECTRONICA?pais=SV&modulo=CTACAM&lenguaje=ES', data: fs.readFileSync('./assets/BANCA.html', 'utf8') },
  { type: 'xPUT', kind: 'asset_CONTRATO_BANCA_ELECTRONICA?pais=SV&modulo=CRECAM&lenguaje=ES', data: fs.readFileSync('./assets/BANCA.html', 'utf8') }
];

const ClientePN = [];

let datosPrueba = centroAmerica.map( (item, i) => ({...item, i}));

const respuestaScript = (req, res) => {
  const i = req.params.index;
  const item = datosPrueba[i];
  res.setHeader("Content-disposition", `attachment; filename=${item.kind}.txt`);
  res.setHeader("Content-type", "text/plain");
  res.charset = "UTF-8";
  res.write(
    `curl --location --request ${item.type} 'http://localhost:5011/catalogo/v1/asset/${item.kind}' --header 'Content-Type: application/json' --data-raw '${JSON.stringify({data: item.data})}'`
  );
  res.end();
};

const respuestaScriptv2= (req, res) => {
  let kind = req.body.kind + '?';
  if (req.body.lenguaje === '') {
    delete req.body.lenguaje;
  } else {
    kind += `lenguaje=${req.body.lenguaje}&`
  }
  if (req.body.canal === '') {
    delete req.body.canal;
  } else {
    kind += `canal=${req.body.canal}&`
  }
  if (req.body.modulo === '') {
    delete req.body.modulo;
  } else {
    kind += `modulo=${req.body.modulo}&`
  }
  if (req.body.pais === '') {
    delete req.body.pais;
  } else {
    kind += `pais=${req.body.pais}&`
  }
  if (req.body.aliado === '') {
    delete req.body.aliado;
  } else {
    kind += `aliado=${req.body.aliado}`
  }

  if ( req.body.type === 'DELETE') {
    res.setHeader("Content-disposition", `attachment; filename=${kind}.txt`);
    res.setHeader("Content-type", "text/plain");
    res.charset = "UTF-8";
    res.write(`curl --location --request ${req.body.type} 'http://localhost:5011/catalogo/v1/asset/${kind}' --header 'Content-Type: application/json' --data-raw '{}'`);
    return res.end();
  }

  request({
    method : 'GET',
    url: `http://localhost:5021/catalogo/v1/asset/${kind}`,
    headers : { "content-type": "text/plain" },
    json: true
  },
  (err, res2, body2) => {
    if ( err ) {
      console.log(err);
      return;
    }
    res.setHeader("Content-disposition", `attachment; filename=${kind}.txt`);
    res.setHeader("Content-type", "text/plain");
    res.charset = "UTF-8";
    res.write(`curl --location --request ${req.body.type} 'http://localhost:5001/catalogo/v1/data/${kind}'
    --header 'Content-Type: application/json' --data-raw '{ "data": ${body2}}`);
    res.end();
  })
};

const cargarCatalogoMiddleware = (req, res, next) => {
  let desarrollo = datosPrueba
    .filter( item => item.type === 'POST' || item.type === 'PUT' || item.type === 'DELETE')
    .map( item => ({...item, ambiente: ambiente.desa }));
  let laboratorio = datosPrueba
    .filter( item => item.type === 'POST' || item.type === 'PUT' || item.type === 'DELETE')
    .map( item => ({...item, ambiente: ambiente.lab }));
  let mbaas = [];
  if (!req.params.ambiente && !req.params.kind ) {
    desarrollo.map( item => mbaas.push(item));
  }
  if (!req.params.ambiente && !req.params.kind ) {
    laboratorio.map( item => mbaas.push(item));
  }

  if (req.params.ambiente === 'desa' && !req.params.kind ) {
    desarrollo.map( item => mbaas.push(item));
  }
  if (req.params.ambiente === 'lab'  && !req.params.kind ) {
    laboratorio.map( item => mbaas.push(item));
  }

  if (req.params.ambiente === 'desa' && req.params.kind ) {
    desarrollo.filter( item => item.kind.indexOf(req.params.kind) !== -1 ).map( item => mbaas.push(item));
  }
  if (req.params.ambiente === 'lab'  && req.params.kind ) {
    laboratorio.filter( item => item.kind.indexOf(req.params.kind) !== -1 ).map( item => mbaas.push(item));
  }

  mbaas = mbaas.map( (item, index) => ({ ...item, time: index * 2500}));
  // mbaas.map( (item) => setTimeout( () => requestMBAASs(item) ,item.time));
  req.MBAAS = {
    mbaas: mbaas.map( item => {
      item.port = item.ambiente;
      item.ambiente = ambiente[item.port];
      item.curl = `http://localhost:3001/asset/Script/`;
      return item;
    })
  };
  next();
};

const success = (req, res) => {
  const itemsSUCCESS = req.MBAAS.mbaas.filter( item => item.type === 'POST' || item.type === 'PUT' || item.type === 'DELETE');
  return res.render('emulador', { title: 'MBAAS', n: req.MBAAS.mbaas.length, items: itemsSUCCESS });
};

requestMBAASs = ( item) => {
  console.log('se hizo', item.kind);
  request({
    method: item.type,
    url: `http://localhost:${item.port}/catalogo/v1/asset/${item.kind}`,
    body: { data: item.data },
    headers : {
      "content-type": "application/json"
    },
    json: true
  },
  (err, res2, body2) => {
    if ( err ) {
      console.log(err);
      return;
    }
    console.log(`${item.type}/> ${ambiente[item.ambiente]} -${item.kind} --raw `, body2);
  })
};
// Carga de catalogo
router.get("/Catalogo", cargarCatalogoMiddleware, success);
router.get("/Catalogo/:ambiente", cargarCatalogoMiddleware, success);
router.get("/Catalogo/:ambiente/:kind", cargarCatalogoMiddleware, success);

// Generacion de Scripts
router.post("/Script", respuestaScriptv2);
router.get("/Script", (req, res) => res.render('script', { url: 'http://localhost:3001/asset/Script', title: 'Generar Script de Asset a partir QA' }));
router.get("/Script/:index", respuestaScript);

// catalogo
router.get('/:assets_id', (req, res) => {
  var fullUrl = `http://localhost:5021/catalogo/v1${req.originalUrl}`;

  if ( req.originalUrl === "/asset/astACTPN_AREAS_GEOGRAFICAS?pais=CO&modulo=ACTPN&lenguaje=ES&kind=actpn") {
    return res.send("{}");
  }


  const kind = datosPrueba.filter( item => `/asset/${item.kind}&limit=-1` === req.originalUrl || `/asset/${item.kind}` === req.originalUrl )[0];
  if ( kind ) {
    return res.send(kind.data);
  }

  if( req.originalUrl === '/asset/assetScriptTagginPlan') {
    fullUrl = 'https://mbaas.desa.cam.davivienda.com/catalogo/v1'+ req.originalUrl;
    return res.send(`assetScriptTagginPlan = ( v ) => console.log({ [v]: v });`);
  }

  if ( req.originalUrl === '/asset/assetsScritpRules_OTP001?pais=HN&canal=1&lenguaje=ES&modulo=CRECAM') {
    return res.send(`assetsScritpRules_OTP001 = {
      validationForRequired: (parametro1) => {
        return (parametro2) => {
          return (control) => {
            if ( control.value === parametro1 || control.value === parametro2) {
              return null;
            }
            return {
              invalido: true
            };
          };
        };
      }
    }`);
  }


  // vinculaicon
  // cuenta ahorro Movil
  
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
    if ( !res2 ) {
      return res.status(500).json({});
    }
    return res.send(res2.body);
  });  
});

module.exports = router;