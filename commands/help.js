const Discord = require('discord.js');
const pagination = require('discord.js-pagination');

module.exports = {
    name: "help",
    description: "helpmenu",

    async run (client, message) {
		if(message.channel.id !== '812394571107401799'){  
            message.react('⚠️')
            message.reply('Falscher Channel --> <#812394571107401799>')
            .then(message => {
                setTimeout(() => message.delete(), 10000)
            })
            return;
		}
        const help1 = new Discord.MessageEmbed()
			.setColor('#33FF80')
			.setTitle('Satoribot')
			.setURL('https://discord.gg/PgqB25Q6C2')
			.setDescription('Hier eine Liste aller Commands:')
			.setThumbnail('https://i.imgur.com/MgaxZYH.png')
			.addFields(
				{ name: '!help', value: 'Hilfemenü' },
				{ name: '!ping', value: 'Pingt den Bot' },
				{ name: '!invite', value: 'Lade andere User ein' },
				{ name: '!avatar', value: 'Rufe dein PB ab' },
				{ name: '!me', value: 'Paar Infos über dich' },
				{ name: '\u200b', value: '\u200b' },
			)
			.setTimestamp();

			const help2 = new Discord.MessageEmbed()
			.setColor('#33FF80')
			.setTitle('Satoribot')
			.setURL('https://discord.gg/PgqB25Q6C2')
			.setDescription('Hier eine Liste aller Commands:')
			.setThumbnail('https://i.imgur.com/MgaxZYH.png')
			.addFields(
				{ name: '!ttt', value: 'Tic Tac Toe' },
				{ name: '!join', value: 'Ich hab keine Freunde' },
				{ name: '!leave', value: 'Das Gegenteil von join' },
				{ name: '!credits', value: 'Credits...' },
				{ name: 'more coming soon...', value: '\u200b' },

				{ name: '\u200b', value: '\u200b' },
			)
			.setTimestamp();

			const pages = [
				help1,
				help2
			]
	
			const emojiList = ["⏪", "⏩"];
	
			const timeout = '36000000';
	
			pagination(message, pages, emojiList, timeout)
            }
        }