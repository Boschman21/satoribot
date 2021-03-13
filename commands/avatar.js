const Discord = require('discord.js');

module.exports = {
    name: "avatar",
    description: "pb",

    async run (client, message) {
        if(message.channel.id !== '812394571107401799'){  
            message.react('⚠️')
            message.reply('Falscher Channel --> <#812394571107401799>')
            .then(message => {
                setTimeout(() => message.delete(), 10000)
            })
            return;
        }
        const avatar = new Discord.MessageEmbed()
        .setColor('#33FF80')
        .setTitle(`PB von ${message.author.username}`)
        .setImage('https://cdn.discordapp.com/avatars/' + message.author.id + '/' + message.author.avatar + '.png ')
        .setTimestamp()
        .setFooter(`Requested by ${message.author.username}`);
    message.channel.send(avatar);
        
            }
        }