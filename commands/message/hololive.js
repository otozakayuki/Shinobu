const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'hololive',
	run: async (client, message) => {
		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setTitle('fubuki&mio')
			.setImage(
				'https://cdn.discordapp.com/attachments/849708259552133180/855243064071290890/img_001.jpg'
			);

		message.channel.send(embed);
	}
};
