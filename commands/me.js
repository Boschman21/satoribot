const Discord = require('discord.js');

module.exports = {
    name: "me",
    description: "user-info",

    async run (client, message) {
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