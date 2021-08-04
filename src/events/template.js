const { Wrapper, Event } = require('eris-wrapper');

class Template extends Event {
	constructor() {
		super();

		this.enabled = false;

		this.event = 'messageCreate';
	}

	/**
	 * @param {Wrapper} caller
	 * @param {any} context
	 * @param {any} event
	 * @memberof Template
	 */
	async handle(caller, context, event) {}
}

module.exports = Template;
