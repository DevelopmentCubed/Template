const GuildCreate = require('./guildCreate');
const Ready = require('./ready');

module.exports.ready = new Ready();
module.exports.guildCreate = new GuildCreate();
