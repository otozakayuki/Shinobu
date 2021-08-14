const random = require('something-random-on-discord').Random;

module.exports = {
	name: 'kiss',
	category: 'fun',

	description: 'Get Fresh kiss Images :D',
	run: async (client, message, args) => {
		let data = await random.getAnimeImgURL('kiss');
		message.channel.send(data);
	}
};
