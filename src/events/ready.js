const { Wrapper, Event } = require('eris-wrapper');

class Ready extends Event {
	constructor() {
		super();

		this.enabled = true;

		this.event = 'ready';
	}

	/**
	 * @param {Wrapper} caller
	 * @param {any} context
	 * @memberof Template
	 */
	async handle(caller, context) {
		caller.logger.info(
			`${caller.user.username} ready in ${caller.guilds.size} guilds!`,
		);
	}
}

module.exports = Ready;
