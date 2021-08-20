const { MessageEmbed } = require('discord.js');

module.exports = {
	name: '午安',
	run: async (client, message, args) => {
		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setTitle('Konnichiwa(こんにちは)')
			.setImage(
				'https://image.myanimelist.net/ui/OK6W_koKDTOqqqLDbIoPAiG_-C_zS27wXnIn_It1pIc'
			);

		message.channel.send(embed);
	}
};
