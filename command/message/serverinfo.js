const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'serverinfo',
	run: async (client, message) => {
		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setImage('https://w.wallhaven.cc/full/p2/wallhaven-p2kev9.png')
			.setTitle(
				`Server name: ${message.guild.name}\nTotal members: ${
					message.guild.memberCount
				}`
			);
		message.channel.send(embed);
	}
};
