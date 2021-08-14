const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'yostar',
	run: async (client, message) => {
		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setTitle('(-_-)')
			.setImage(
				'https://cdn.discordapp.com/attachments/849708259552133180/855244481754562590/IMG_20210618_083549.jpg'
			);
		message.channel.send(embed);
	}
};
