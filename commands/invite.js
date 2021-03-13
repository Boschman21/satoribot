const Discord = require('discord.js');

module.exports = {
    name: "invite",
    description: "serverinvite",

    async run (client, message) {

        message.react('✅')
        message.channel.send('https://discord.gg/PgqB25Q6C2')
        .then(message => {
            setTimeout(() => message.delete(), 300000)
        })
        return;
    }
}
