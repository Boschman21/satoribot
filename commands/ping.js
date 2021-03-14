const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "ping in ms",

    async run (client, message, args) {

        if(message.channel.id !== '812394571107401799'){  
            message.react('⚠️')
            message.reply('Falscher Channel --> <#812394571107401799>')
            .then(message => {
            })
            return;
        }

        const ping = new Discord.MessageEmbed()
        .setColor("#33FF80")
        .setDescription(`Pong!\`${client.ws.ping}\`ms`);

        message.react('✅')
        message.channel.send(ping)
        return;
    }
}