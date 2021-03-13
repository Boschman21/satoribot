const Discord = require('discord.js');

module.exports = {
    name: "me",
    description: "user-info",

    async run (client, message) {

        if(message.channel.id !== '812394571107401799'){  
            message.react('⚠️')
            message.reply('Falscher Channel --> <#812394571107401799>')
            .then(message => {
                setTimeout(() => message.delete(), 10000)
            })
            return;
        }
        const id = new Discord.MessageEmbed()
			.setTitle('Profil')
			.setThumbnail('https://cdn.discordapp.com/avatars/' + message.author.id + '/' + message.author.avatar + '.png ')
			.setColor('#33FF80')
			.addField('\u200b', '\u200b')
			.setDescription(`Username: **${message.author.username}**\nDC-ID: **${message.author.id}**\n\u200b\nMitglied seit ${message.member.joinedAt}`)
			.setTimestamp()
            .setFooter(`Requested by ${message.author.username}`);
            message.channel.send(id);
            }
        }