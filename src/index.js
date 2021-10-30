const { Wrapper } = require('eris-wrapper');

const config = require('../config.json');

const bot = new Wrapper({
	token: config.TOKEN,
	prefix: config.PREFIX,
	commands: require('./commands'),
	events: require('./events'),
	context: {
		config,
	},
	getPrefix: (guildID) => {
		// Database calls to get prefix for guild
		return Promise.resolve(config.PREFIX);
	},
});

bot.connect();
