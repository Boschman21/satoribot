const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "credits",
    description: "who made the bot?",
    async run (client, message, args) {
        if(message.channel.id !== '812394571107401799'){  
            message.react('⚠️')
            message.reply('Falscher Channel --> <#812394571107401799>')
            .then(message => {
                setTimeout(() => message.delete(), 10000)
            })
            return;
        }
        const helpmenu = new MessageEmbed()
			.setColor('#33FF80')
			.setTitle('Satoribot')
			.setURL('https://discord.gg/EHTy2vc')
			.setDescription('Created by Boschman21#0001')
			.setThumbnail('https://i.imgur.com/bkh8ce5.gif')
			.addFields(
				{ name: 'Discord', value: '<:discord:820245600259407902> https://discord.gg/EHTy2vc' },
				{ name: 'Twitch', value: '<:twitch:820245600213270548> https://www.twitch.tv/boschman21' },
				{ name: 'Github', value: '<:github:820245599998705695> https://github.com/Boschman21' },
				{ name: '\u200b', value: '\u200b' },
			)
			.setTimestamp()
			.setFooter(`Requested by ${message.author.username} `);

		message.channel.send(helpmenu);
}}