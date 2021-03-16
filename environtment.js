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
  { name: 'port', alias: 'p', type: Number, defaultOption: '3000' },
  { name: 'pais', alias: 'z', type: String, defaultOption: 'CAM' }
]
const options = commandLineArgs(optionDefinitions);

console.log('Ambiente:', `${options.pais}:::${options.environment}`);

module.exports = { CAM, CO }[options.pais][options.environment];