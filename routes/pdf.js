var express = require('express');
var router = express.Router();
const IncomingForm = require('formidable').IncomingForm;
const fs = require('fs');
const path = require('path');
const uuidv4 = require('uuid/v4');
const jsreport = require('jsreport-core')()
let flag = false;
jsreport.init().then( (event) => {
    flag = true;
    console.log('jsreport DONE!');
}).catch( (err) => {
    flag = false;
    console.log(err);
});

router.post('/', (req, res) => {
    const obj = {};
    var form = new IncomingForm();
    form
    .on('progress', (bytesReceived, bytesExpected) => {
        console.log('Porcentaje de Recibimiento: ', (100/bytesExpected)*bytesReceived + '%');
    })
    .on('field', (name, field) => {
        if ( name === 'data' || name === 'phantom') {
            obj[name] = JSON.parse(field);
        } else {
            obj[name] = field;
        }
    })
    .on('error', (err) => {
        res.json({err});
    })
    .on('end', () => {
        if ( !flag ) {
            res.status(500).json({ a: 555 });
        }
        delete obj.phantom.customPhantomJS;
        return jsreport.render({
            "template": {
                "content": obj.template,
                "engine": "handlebars",
                "recipe": "phantom-pdf",
                "phantom": {
                    "customPhantomJS": true,
                    ...obj.phantom
                }
            },
            "data": obj.data
        }).then((resp) => {
            const name = `phantom_${uuidv4()}.pdf`;
            resp.result.pipe(
                fs.createWriteStream(path.join(__dirname, `../pdfFiles/${name}`))
            );
            res.json({
                fileName: name,
                date: new Date()
            });
        });
    })
    .parse(req);
});

router.get('/:file_name', (req, res) => {
    var filePath = path.join(__dirname, `../pdfFiles/${req.params.file_name}`);
    var stat = fs.statSync(filePath);
    res.writeHead(200, {
        'Content-type': 'application/pdf',
        'Content-disposition': `inline; filename=${req.params.file_name}`,
        'Access-Control-Allow-Origin': '*',
        'Content-Length': stat.size
    });
    var readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
});

module.exports = router;