const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "helpmenu",

    async run (client, message) {
        const helpmenu = new Discord.MessageEmbed()
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

        message.channel.send(helpmenu);
            }
        }
        