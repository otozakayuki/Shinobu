const { MessageEmbed } = require('discord.js');

module.exports = {
    name: '早安',
    run: async (client, message) => {
        message.reply('ohaiyo(おはよう)');
    }
};
