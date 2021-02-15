const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "ping in ms",

    async run (client, message, args) {

        const ping = new Discord.MessageEmbed()
        .setColor("#33FF80")
        .setDescription(`Pong!\`${client.ws.ping}\`ms`);


        message.channel.send(ping);
    }
}