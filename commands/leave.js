const Discord = require('discord.js')

module.exports = {
    name: "leave",
    description: "leave channel",

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
