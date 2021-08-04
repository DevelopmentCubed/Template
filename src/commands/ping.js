const { Wrapper, Command } = require('eris-wrapper');

class Ping extends Command {
	constructor() {
		super();

		this.enabled = true;

		this.command = 'ping';
		this.aliases = [];
		this.params = [];

		this.allowDM = true;
		this.ownerOnly = false;

		this.showOnHelp = false;
		this.helpDescription = 'Pong!';

		this.userPermissions = [];
		this.botPermissions = ['sendMessages'];

		this.cooldown = 0;
	}

	/**
	 * @param {Wrapper} caller
	 * @param {Command.CommandObject} command
	 * @param {any} context
	 * @memberof Template
	 */
	async handle(caller, command, context) {
		caller.sendMessage(command, 'Pong!');
	}
}

module.exports = Ping;
