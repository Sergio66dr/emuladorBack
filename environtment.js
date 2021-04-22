const commandLineArgs = require('command-line-args');
const prod = require('./environtment.cam.prod');
const qa = require('./environtment.cam.qa');
const desa = require('./environtment.cam.desa');

const prod_co = require('./environtment.co.prod');
const qa_co = require('./environtment.co.qa');
const desa_co = require('./environtment.co.desa');

const CAM = { qa, desa, prod };
const CO = { qa: qa_co, desa: desa_co, prod: prod_co };


const optionDefinitions = [
  { name: 'environment', alias: 'c', type: String },
  { name: 'json', alias: 'j', type: String, defaultOption: '{}' }
]
let options = commandLineArgs(optionDefinitions);
options = JSON.parse(options.json);
options.catalogo = 'CATALOGO.' + (options.catalogo || 'CAM') + '.txt';
console.log(options);

const env = { CAM, CO }[options.pais][options.environment];
env.catalogo = options.catalogo;
module.exports = env;