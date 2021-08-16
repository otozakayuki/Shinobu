const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	name: 'covid',
	category: 'info',
	description: 'Get the stats of corona',
	usage: 'corona all or jsonData <country>',
	aliases: ['covid', 'covid19'],
	run: async (client, message, args) => {
		let link;
		let embed = new MessageEmbed();

		if (!args[0] || args[0].match(/all|global|globe|world/gi)) {
			//if country is not provided or the args contains all, global, globe or world string then execute the statement.
			let jsonData = await fetch('https://disease.sh/v3/covid-19/all');
			jsonData = await jsonData.json();
			embed
				.setTitle('全国')
				.setColor('RANDOM')
				.setDescription('这个数字根据全国卫生部，下午6:00p.m才更新的.')
				.addField('總數確診', jsonData.cases.toLocaleString(), true)
				.addField('總數死亡', jsonData.deaths.toLocaleString(), true)
				.addField('總數康復', jsonData.recovered.toLocaleString(), true)
				.addField('今日確症', jsonData.todayCases.toLocaleString(), true)
				.addField('今日死亡', jsonData.todayDeaths.toLocaleString(), true)
				.addField('活躍病例', jsonData.active.toLocaleString(), true);
		} else {
			let jsonData = await fetch(
				`https://disease.sh/v3/covid-19/countries/${args.join(' ')}`
			);
			jsonData = await jsonData.json();

			if (!jsonData.country)
				return message.reply(
					'I am unable to get the **' + args[0] + '** details.'
				);

			embed
				.setTitle(`${jsonData.country.toUpperCase()}`)
				.setColor('RANDOM')
				.setDescription('这个数字根据全国卫生部，下午6:00p.m才更新的.')
				.setThumbnail(jsonData.countryInfo.flag || '')
				.addField('總數確診', jsonData.cases.toLocaleString(), true)
				.addField('總數死亡', jsonData.deaths.toLocaleString(), true)
				.addField('總數康復', jsonData.recovered.toLocaleString(), true)
				.addField('今日確症', jsonData.todayCases.toLocaleString(), true)
				.addField('今日死亡', jsonData.todayDeaths.toLocaleString(), true)
				.addField('活躍病例', jsonData.active.toLocaleString(), true);
		}

		return message.channel.send(embed).catch(err => {
			return message.reply('好像哪裡錯誤，稍後請再嘗試');
		}); //send something lol
	}
};
