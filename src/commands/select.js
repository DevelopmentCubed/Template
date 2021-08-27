const { Wrapper, Command, Constants } = require('eris-wrapper');

class Select extends Command {
	constructor() {
		super();

		this.enabled = true;

		this.command = 'select';
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
		const message = await caller.sendMessage(command, {
			content: `What's your favorite animal?`,
			components: [
				{
					type: 1,
					components: [
						Constants.createSelectMenu('items', 'Pick one.', 1, 1, [
							Constants.createMenuItem('Dogs', 'dog', 'You like dogs', '🐶'),
							Constants.createMenuItem('Cats', 'cat', 'You like cats', '🐱'),
							Constants.createMenuItem('Rabbits', 'rabbit', 'You like rabbits', '🐰'),
							Constants.createMenuItem('Frogs', 'frog', 'You like frogs', '🐸'),
							Constants.createMenuItem('Foxes', 'fox', 'You like foxes', '🦊'),
							Constants.createMenuItem('Pandas', 'panda', 'You like pandas', '🐼'),
							Constants.createMenuItem('Lions', 'lion', 'You like lions', '🦁'),
						]),
					],
				},
			],
		});
		let timer = null;
		/**
		 * @param {Wrapper.InteractionObject} interaction
		 */
		const handleInteraction = async (interaction) => {
			if (interaction.message.id !== message.id || interaction.member.id !== command.author.id) return;
			switch (interaction.values[0]) {
				case 'dog':
					message.edit({
						content: `You picked dog 🐶`,
						components: [],
					});
					break;
				case 'cat':
					message.edit({
						content: `You picked cat 🐱`,
						components: [],
					});
					break;
				case 'rabbit':
					message.edit({
						content: `You picked rabbit 🐰`,
						components: [],
					});
					break;
				case 'frog':
					message.edit({
						content: `You picked frog 🐸`,
						components: [],
					});
					break;
				case 'fox':
					message.edit({
						content: `You picked fox 🦊`,
						components: [],
					});
					break;
				case 'panda':
					message.edit({
						content: `You picked panda 🐼`,
						components: [],
					});
					break;
				case 'lion':
					message.edit({
						content: `You picked lion 🦁`,
						components: [],
					});
					break;
			}
			clearTimeout(timer);
			caller.off('interaction', handleInteraction);
		};
		caller.on('interaction', handleInteraction);

		timer = setTimeout(() => {
			caller.off('interaction', handleInteraction);
			message.edit({
				content: 'Command timed out',
				components: [],
			});
		}, 6e4);
	}
}

module.exports = Select;
