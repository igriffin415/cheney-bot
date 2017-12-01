const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    message.channel.send('Dick Cheney made money off the Iraq War.');
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
