require('bytenode'); 
module.exports = require('./application.'+process.platform+'.'+process.version+'.jsc')