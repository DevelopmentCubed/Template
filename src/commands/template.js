const { Wrapper, Command } = require('eris-wrapper');

class Template extends Command {
	constructor() {
		super();

		this.enabled = true;

		this.command = 'template';
		this.aliases = ['test'];
		this.params = [
			{
				name: '<something>',
				description: 'A description',
				optional: false,
			},
		];

		this.allowDM = true;
		this.ownerOnly = false;

		this.showOnHelp = false;
		this.helpDescription = 'A cool command.';

		this.userPermissions = ['manageMessages'];
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
		caller.sendMessage(command, 'Hello!');
	}
}

module.exports = Template;
