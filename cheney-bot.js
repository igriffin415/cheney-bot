const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    // client.user.setActivity('making money off the iraq war');
});

client.on('message', message => {
  if(message.author != client.user){
    message.channel.send('p!start');
    for (i = 0; i < 4; i++) {
      message.channel.send('Dick Cheney made money off the Iraq War.');
    }
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
