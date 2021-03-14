const Discord = require('discord.js');

module.exports = {
    name: "invite",
    description: "serverinvite",

    async run (client, message) {

        message.react('✅')
        message.channel.send('https://discord.gg/x9turEuSvS')
        .then(message => {
        })
        return;
    }
}
