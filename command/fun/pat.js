const random = require('something-random-on-discord').Random;

module.exports = {
	name: 'pat',
	category: 'fun',

	description: 'Get Fresh pat Images :D',
	run: async (client, message, args) => {
		let data = await random.getAnimeImgURL('pat');
		message.channel.send(data);
	}
};
