const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'hana',
	run: async (client, message) => {
		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setTitle('hana')
			.setImage(
				'https://i.pinimg.com/originals/a7/53/5b/a7535bd81b0299dfaf11357adfefd0d4.gif'
			);

		message.channel.send(embed);
	}
};
