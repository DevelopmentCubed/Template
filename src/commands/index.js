const Ping = require('./ping');
const Pages = require('./pages');
const Select = require('./select');

module.exports.ping = new Ping();
module.exports.pages = new Pages();
module.exports.select = new Select();
