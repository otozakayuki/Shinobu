const randomanime = require('random-anime');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'anime',
	category: 'fun',

	description: 'Get Fresh anime Images :D',
	run: async (client, message, args) => {
		const anime = randomanime.anime();
		const embed = new MessageEmbed().setImage(anime).setColor('RANDOM');
		message.channel.send(embed);
	}
};
