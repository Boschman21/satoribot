const Discord = require('discord.js');
const pagination = require('discord.js-pagination');

module.exports = {
    name: "help",
    description: "helpmenu",

    async run (client, message) {
        const help1 = new Discord.MessageEmbed()
			.setColor('#33FF80')
			.setTitle('Satoribot')
			.setURL('https://discord.gg/PgqB25Q6C2')
			.setDescription('Hier eine Liste aller Commands:')
			.setThumbnail('https://i.imgur.com/MgaxZYH.png')
			.addFields(
				{ name: '!help', value: 'Hilfemenü' },
				{ name: '!invite', value: 'Lade andere User ein' },
				{ name: '!avatar', value: 'Rufe dein PB ab' },
				{ name: '!me', value: 'Paar Infos über dich' },
				{ name: '\u200b', value: '\u200b' },
			)
			.setTimestamp()
			.setFooter(`Satoribot by Boschman21 \nRequested by ${message.author.username} `);

			const help2 = new Discord.MessageEmbed()
			.setColor('#33FF80')
			.setTitle('Satoribot')
			.setURL('https://discord.gg/PgqB25Q6C2')
			.setDescription('Hier eine Liste aller Commands:')
			.setThumbnail('https://i.imgur.com/MgaxZYH.png')
			.addFields(
				{ name: '!join', value: 'Gegen Einsamkeit' },
				{ name: '!leave', value: 'Das Gegenteil wie join' },
				{ name: 'more coming soon...', value: '\u200b' },

				{ name: '\u200b', value: '\u200b' },
			)
			.setTimestamp()
			.setFooter(`Satoribot by Boschman21 \nRequested by ${message.author.username} `);

			const pages = [
				help1,
				help2
			]
	
			const emojiList = ["⏪", "⏩"];
	
			const timeout = '36000000';
	
			pagination(message, pages, emojiList, timeout)
            }
        }
        