const Discord = require("discord.js");
const cheney = new Discord.Client();

cheney.on('ready', () => {
  console.log(`Logged in as ${cheney.user.tag}!`);
});

cheney.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

cheney.login('process.env.BOT_TOKEN');
