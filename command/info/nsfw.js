const randomanime = require('random-anime');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'nsfw',
	category: 'info',

	description: 'Get Fresh anime Images :D',
	run: async (client, message, args) => {
		if (!message.channel.nsfw) {
			return message.reply('請用在nsfw的频道');
		} else {
			const nsfw = randomanime.nsfw();
			const embed = new MessageEmbed().setImage(nsfw).setColor('RANDOM');
			message.channel.send(embed);
		}
	}
};
