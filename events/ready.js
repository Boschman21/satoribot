const Discord = require("discord.js");
const ping = require("../commands/ping");

module.exports = client => { 
    console.log(`${client.user.username} ist online`)
    client.user.setActivity('deiner Mutter im Bett', { type: 'LISTENING' });

	const statuses = [
		'!help !invite',
		'VW Sharan Diesel',
        'kruspig sehr gut',
        'Big Floppa',
        'No bitches?',
        'https://discord.gg/x9turEuSvS',
        'Mitten im Leben',
        `${client.ws.ping}ms`,
        'twitch.tv/trymacs',
        'in die Röhre',
	];

	setInterval(() => {
        const index = Math.floor(Math.random() * (statuses.length - 1) + 1);
        client.user.setActivity(statuses[index],{ type: 'WATCHING' });
    }, 60000);
}
