const Discord = require('discord.js')

module.exports = {
    name: "leave",
    description: "leave channel",

    async run (client, message) {

		const voiceChannel = message.member.voice.channel

		if(!message.member.voice.channel) return;
		if (client.voice.connections.some(conn => conn.channel.id == voiceChannel.id)) {
			message.member.voice.channel.leave()
			message.react('✅');
		}
		else {
			message.reply('Joine erst meinem Channel.');
		}
    }
}
