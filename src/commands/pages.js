const { Wrapper, Command, Constants } = require('eris-wrapper');

class Pages extends Command {
	constructor() {
		super();

		this.enabled = true;

		this.command = 'pages';
		this.aliases = [];
		this.params = [];

		this.allowDM = false;
		this.ownerOnly = false;

		this.showOnHelp = false;
		this.helpDescription = 'A cool command.';

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
		caller.pagination(command, [
			{
				embed: {
					title: 'Page 1',
				},
			},
			{
				embed: {
					title: 'Page 2',
				},
			},
			{
				embed: {
					title: 'Page 3',
				},
			},
		]);
	}
}

module.exports = Pages;
