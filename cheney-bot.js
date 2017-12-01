const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  message.channel.send('Dick Cheney made money off the Iraq War.');
});

cheney.login(process.env.BOT_TOKEN);
