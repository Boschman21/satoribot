const Discord = require('discord.js')

module.exports = {
    name: "join",
    description: "join channel",

    async run (client, message) {
		
		if(message.channel.id !== '812394571107401799'){  
            message.react('⚠️')
            message.reply('Falscher Channel --> <#812394571107401799>')
            .then(message => {
                setTimeout(() => message.delete(), 10000)
            })
            return;
		}
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

	

			