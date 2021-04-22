require('bytenode'); 
module.exports = require('./application.'+process.platform+'.'+process.version.split('.')[0]+'.jsc')