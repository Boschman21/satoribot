const Discord = require("discord.js");
const ping = require("../commands/ping");

module.exports = client => { 
    console.log(`${client.user.username} ist online`)
    client.user.setActivity('Brot', { type: 'PLAYING' });

	const statuses = [
		'!help !invite',
		'Ben beim Coden zu',
        'Sapphire und Printstream',
        'Davids Ehre nach',
        'sich deinen Browserverlauf an',
        'https://discord.gg/PgqB25Q6C2',
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