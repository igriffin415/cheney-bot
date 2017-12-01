const Discord = require("discord.js");
const cheney = new Discord.Client();

cheney.on('ready', () => {
  console.log(`Logged in as ${cheney.user.tag}!`);
});

cheney.on('message', msg => {
  message.channel.send('Dick Cheney made money off the Iraq War.');
  message.channel.send('Dick Cheney made money off the Iraq War.');
});

cheney.login(process.env.BOT_TOKEN);
