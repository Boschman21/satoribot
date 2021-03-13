const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "ping in ms",

    async run (client, message, args) {

        const ping = new Discord.MessageEmbed()
        .setColor("#33FF80")
        .setDescription(`Pong!\`${client.ws.ping}\`ms`);

        message.react('✅')
        message.channel.send(ping)
        .then(message => {
            setTimeout(() => message.delete(), 300000)
        })
        return;
    }
}