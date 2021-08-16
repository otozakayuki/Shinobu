const random = require('something-random-on-discord').Random;
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'cry',
	category: 'fun',

	description: 'Get Fresh cry Images :D',
	run: async (client, message, args) => {
		let data = await random.getAnimeImgURL('cry');
		message.channel.send(data);
	}
};
