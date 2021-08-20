const lewd = require('discord-hentai');
const anime = lewd.Anime;
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 's!holo',
	category: 'fun',

	description: 'Get Fresh pat Images :D',
	run: async (client, message, args) => {
		if (!message.channel.nsfw) {
			return message.reply('請用在nsfw的频道');
		} else {
			let holo = await anime.holo();
			const embed = new MessageEmbed().setImage(holo).setColor('RANDOM');
			message.channel.send(embed);
		}
	}
}
