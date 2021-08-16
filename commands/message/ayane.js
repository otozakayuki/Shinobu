const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'ayane',
	run: async (client, message) => {
		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setImage(
				'https://cdn.discordapp.com/attachments/787623194142965820/849892249882198046/Screenshot_2021-02-18-15-02-01_1.jpg'
			);

		message.channel.send(embed);
	}
};
