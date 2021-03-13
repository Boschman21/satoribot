const { Client, MessageEmbed, Collection } = require('discord.js');
const { readdirSync } = require("fs");
const { join } = require("path");
const Welcome = require("discord-welcome");
const { TOKEN, PREFIX } = require("./config.json");

const client = new Client({ disableMentions: "everyone" });

client.login(TOKEN);
client.commands = new Collection();
client.prefix = PREFIX;
client.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

client.on("error", console.error);

const TicTacToe = require('discord-tictactoe');
const game = new TicTacToe({
  language: 'de',
  // command: '!ttt': you can remove that config key as your are using a custom handler
});

client.on('message', message => {
  if (message.content.startsWith("!ttt")) {
	if (message.channel.type === 'dm') return;
    if (message.channel.id === '812395277247840326') {
      // all the magic is here, you just have to call the method with the message object
      game.handleMessage(message);
    } else {
      message.react('⚠️')
      message.reply('Falscher Channel --> <#812395277247840326>')
        .then(message => {
          setTimeout(() => message.delete(), 10000)
        })
    }
  }
});

Welcome(client, {
    privatemsg : "Willkommen auf dem Satori-Server. Lies dir gerne die Regeln durch und schau dich um! ",
    publicmsg : "Moin @MEMBER. Willkommen auf Satori!",
    publicchannel : "703581509868584971"
});
const commandFiles = readdirSync(join(__dirname, "commands")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}

client.on("message", async (message) => {
	if (message.author.bot) return;
	if (!message.guild) return;
  
	let prefix = PREFIX
  
	const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
	if (!prefixRegex.test(message.content)) return;
  
	const [, matchedPrefix] = message.content.match(prefixRegex);
  
	const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
  
	const command =
	  client.commands.get(commandName) ||
	  client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
  
  
	if (!command) return;
  
	if (!cooldowns.has(command.name)) {
	  cooldowns.set(command.name, new Collection());
	}
  
	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 1) * 1000;
  
	if (timestamps.has(message.author.id)) {
	  const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
  
	  if (now < expirationTime) {
		const timeLeft = (expirationTime - now) / 1000;
		return message.reply(
		  `Warte ${timeLeft.toFixed(1)} Sekunden, bis du den Command \`${command.name}\` erneut benutzt.`
		);
	  }
	}
  
	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  
  });
  
  require("./util/eventHandler")(client)
  
  client.botcmds= new Collection();
  const botcmdFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));
  
  for (const file of botcmdFiles) {
	  const botcmd = require(join(__dirname, "commands", `${file}`));
	  client.botcmds.set(botcmd.name, botcmd);
  }

  client.on("error", console.error);
client.on("message", async message => {
  if (message.channel.type === 'dm') return;
  if (message.author.bot) return;

  let prefix = PREFIX


  if(message.content.startsWith(prefix)) {
      const args = message.content.slice(prefix.length).trim().split(/ +/g);

      const botcmd = args.shift().toLowerCase();

      if(!client.botcmds.has(botcmd)) return;


      try {
          client.botcmds.get(botcmd).run(client, message, args);

      } catch (error){
          console.error(error);
      }
  }
});