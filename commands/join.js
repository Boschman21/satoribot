const Discord = require('discord.js')

module.exports = {
    name: "join",
    description: "join channel",

    async run (client, message) {

		const voiceChannel = message.member.voice.channel

		if (!message.member.voice.channel) return message.reply('Joine erst einem Channel.');
		if (client.voice.connections.some(conn => conn.channel.id == voiceChannel.id)) return message.reply('Ich bin bereits in deinem Channel.');
        if (!voiceChannel.id == client.voice.connections.some(conn => conn.channel.id)) {
			message.member.voice.channel.join()
			.then(() => message.react('✅'))
			.catch(error => {
			message.react('🔐', error);	
		})}
		else {
			message.reply('Ich bin bereits in einem Channel.')
		}
	}}

	

			