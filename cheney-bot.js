const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.once(Events.ClientReady, c => {
	client.user.setActivity('making $ off the iraq war');
	console.log(`Ready! Logged in as ${c.user.tag}`);
});


client.on('messageCreate', message => {
    if (message.author.bot) return;
	
	console.log(message.channelId)
	
	const channel = client.channels.cache.get(message.channelId);;

	for(i = 0; i < 6; i++) {
		channel.send('Dick Cheney made money off the Iraq war');
	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
