var express = require("express");
const request = require("request");
var router = express.Router();
const fs = require('fs');
const path = require('path');
const env = require('../environtment');

const respuesta = (req, res) => {
  const kind = req.params.kind;
  const filtro = req.params.filtro;
  const query = req.query;
  
  if ( req.originalUrl.indexOf('ING001/visible') !== -1 ) {
    return res.json([{"condiciones":[],"descripcion":"Crédito de consumo con aprobación en línea","status":"visible","data":{"workflow":"CRECAM"},"tipo":"workflow","titulo":"Crédito Móvil","imagen":"asset_IMG_ING001_001"},{"status":"visible","condiciones":[],"imagen":"asset_IMG_ING001_002","titulo":"Cuenta Móvil","tipo":"workflow","data":{"workflow":"CTACAM"},"descripcion":"Ábrala desde su celular sin costo y comience a usarla de inmediato"},{"titulo":"Tarjeta Móvil","tipo":"urlExterna","data":{"urlExterna":{"urlExterna":"https://crediquick.apptividad.net/DAVICR_Autoatencion_QA/Apptividad.Ozono.WebApp/Home/IndexDeepLinkWithSSOT?pSSOT=9CE0EC2D-47E8-47DC-BB06-CA83E0DF5E6F&pModelId=PRIV_DAVI_AUTO_ATENCION;;1"}},"condiciones":[],"imagen":"asset_IMG_ING001_003","status":"visible","descripcion":"Solicítela y recíbala en su domicilio"},{"condiciones":[],"status":"visible","titulo":"Depósitos a Plazo","tipo":"postMessage","descripcion":"Abra un Depósito a Plazo 100% Digital","imagen":"asset_IMG_ING001_004","data":{"postMessage":"op_cdt"}},{"tipo":"workflow","imagen":"asset_IMG_ING001_005","status":"visible","data":{"workflow":"LIBCAM"},"titulo":"Crédito con Deducción de Planilla","condiciones":[],"descripcion":"Préstamo Personal con aprobación en línea y descontado de planilla"},{"tipo":"workflow","imagen":"asset_IMG_ING001_006","status":"visible","data":{"workflow":"TRACKCAM"},"titulo":"Estado de Solicitudes","condiciones":[],"descripcion":""}]);
  }

  if ( req.originalUrl.indexOf('null') !== -1 ) {
    return res.json([]);;
  }

  const catalogo = JSON.parse(fs.readFileSync('./catalogo/CATALOGO.CAM.txt', 'utf8'));
  let catFilt = catalogo.filter(item => item.kind == kind);
  catFilt = catFilt.filter( item => 
      item.params.pais === query.pais && 
      item.params.lenguaje === query.lenguaje &&
      item.params.canal === query.canal &&
      item.params.modulo === query.modulo &&
      item.params.aliado === query.aliado
  );
  if ( catFilt.length === 1 && query.property && filtro ) {
    const cat = catFilt[0].data.filter( item => item[query.property] === filtro)
    console.log('MOCK')
    return res.json(cat)
  }
  if ( catFilt.length === 1 ) {
    const cat = catFilt[0]
    console.log('MOCK')
    return res.json(cat.data)
  }

  let url = `${env.data}${kind}`
  let params = ''
  Object.keys(query).map( item => {
    params = `${params}${item}=${query[item]}&`
    return item
  })
  
  if ( filtro ) {
    url = `${url}/${filtro}`
  }
  url = `${url}?${params}`



  request(url, { json: true }, (err, res2, body) => {
    console.log('AMBIENTE')
    if (err) {
      return res.status(666).json(err)
    }
    console.log('RES')
    return res.json(body)
  })
}

const respuestaScript = (req, res) => {
  const i = req.params.index
  const item = datosPrueba[i]
  res.setHeader("Content-disposition", `attachment; filename=${item.kind}.txt`)
  res.setHeader("Content-type", "text/plain")
  res.charset = "UTF-8"
  res.write(`curl --location --request ${item.type} 'http://localhost:5011/catalogo/v1/data/${item.kind}'
  --header 'Content-Type: application/json'
  --data-raw '{ "data": ${JSON.stringify(item.data)}}'`)
  res.end()
}

const respuestaScriptv2 = (req, res) => {
  let kind = req.body.kind + '?'
  if (req.body.lenguaje === '') {
    delete req.body.lenguaje
  } else {
    kind += `lenguaje=${req.body.lenguaje}&`
  }
  if (req.body.canal === '') {
    delete req.body.canal
  } else {
    kind += `canal=${req.body.canal}&`
  }
  if (req.body.modulo === '') {
    delete req.body.modulo
  } else {
    kind += `modulo=${req.body.modulo}&`
  }
  if (req.body.pais === '') {
    delete req.body.pais
  } else {
    kind += `pais=${req.body.pais}&`
  }
  if (req.body.aliado === '') {
    delete req.body.aliado
  } else {
    kind += `aliado=${req.body.aliado}`
  }

  if ( req.body.type === 'DELETE') {
    res.setHeader("Content-disposition", `attachment; filename=${kind}.txt`)
    res.setHeader("Content-type", "text/plain")
    res.charset = "UTF-8"
    res.write(`curl --location --request ${req.body.type} 'http://localhost:5011/catalogo/v1/data/${kind}' --header 'Content-Type: application/json' --data-raw '{}'`)
    return res.end()
  }

  request({
    method : 'GET',
    url: `http://localhost:5021/catalogo/v1/data/${kind}limit=-1`,
    headers : { "content-type": "application/json" },
    json: true
  },
  (err, res2, body2) => {
    if ( err ) {
      console.log(err)
      return
    }
    res.setHeader("Content-disposition", `attachment; filename=${kind}.txt`)
    res.setHeader("Content-type", "text/plain")
    res.charset = "UTF-8"
    res.write(`curl --location --request ${req.body.type} 'http://localhost:5001/catalogo/v1/data/${kind}'
    --header 'Content-Type: application/json'
    --data-raw '{ "data": ${JSON.stringify(body2)}}'`)
    res.end()
  })
}

writeCatalogo = (nombre) => {
  return (req, res) => {
    const name = path.join(__dirname, `../catalogo/${nombre}`)
    fs.exists(name, exists => {
      if ( exists ) {
        fs.unlink(name, () => {
          fs.writeFile(name, JSON.stringify(req.body.data), error => {
            if (!error)
              res.json({ status: 'borrado y Archivo Guardado'})
            else
              res.json({ status: 'borrado y algo paso', ...err})
          })
        })
      } else {
        fs.writeFile(name, JSON.stringify(req.body.data), error => {
          if (!error)
            res.json({ status: 'Archivo Guardado'})
          else
            res.json({ status: 'No lo creo', ...error})
        })
      }
    })
  }
}

obtenerCatalogo = (nombre) => (req, res) => {
  const name = path.join(__dirname, `../catalogo/${nombre}`)
  fs.exists(name, exists => {
    if ( exists ) {
      res.json(
        JSON.parse(fs.readFileSync(name, 'utf8'))
      )
    } else {
      fs.writeFile(name, JSON.stringify([]), error => {
        if (!error)
          res.json(
            JSON.parse(fs.readFileSync(name, 'utf8'))
          )
        else
          res.json({ status: 'algo paso', ...error})
      })
    }
  })
}

// Carga de catalogo
router.get("/archivo_CAM", obtenerCatalogo('CATALOGO.CAM.txt'))
router.get("/archivo_CO", obtenerCatalogo('CATALOGO.CO.txt'))
router.post("/archivo_CAM", writeCatalogo('CATALOGO.CAM.txt'))
router.post("/archivo_CO", writeCatalogo('CATALOGO.CO.txt'))
router.get("/FullJson", (req, res) => res.json(datosPrueba))

// Generacion de Scripts
router.post("/Script", respuestaScriptv2)
router.get("/Script/:index", respuestaScript)

// catalogo
router.get("/:kind", respuesta)
router.get("/:kind/:filtro", respuesta)

module.exports = router
