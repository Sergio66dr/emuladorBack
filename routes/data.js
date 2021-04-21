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
