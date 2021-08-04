const { Wrapper, Event, Constants } = require('eris-wrapper');

class GuildCreate extends Event {
	constructor() {
		super();

		this.enabled = true;

		this.event = 'guildCreate';
	}

	/**
	 * @param {Wrapper} caller
	 * @param {any} context
	 * @param {import('eris').Guild} guild
	 * @memberof Template
	 */
	async handle(caller, context, guild) {
		const owner = caller.users.get(guild.ownerID);

		caller.sendMessage(context.config.LOGGING, {
			embed: {
				title: 'Joined Guild',
				color: Constants.colours.green,
				fields: [
					{
						name: 'Name',
						value: guild.name,
						inline: true,
					},
					{
						name: 'ID',
						value: guild.id,
						inline: true,
					},
					{
						name: 'Members',
						value: guild.memberCount,
						inline: true,
					},
					{
						name: 'Owner',
						value: `${owner.username}#${owner.discriminator}\n(${owner.id})`,
						inline: true,
					},
				],
				timestamp: new Date(),
			},
		});
	}
}

module.exports = GuildCreate;
