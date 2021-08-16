const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'miku',
	run: async (client, message) => {
		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setTitle('miku')
			.setImage(
				'https://www.pikpng.com/pngl/b/474-4748151_hatsunemiku-kawaii-miku-mikuhatsune-anime-vocaloid-kawaii-anime.png'
			);
		message.channel.send(embed);
	}
};
