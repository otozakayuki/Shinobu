const random = require('something-random-on-discord').Random;

module.exports = {
	name: 'hug',
	category: 'fun',

	description: 'Get Fresh hug Images :D',
	run: async (client, message, args) => {
		let data = await random.getAnimeImgURL('hug');
		message.channel.send(data);
	}
};
