const Discord = require('discord.js');
const cheney = new Discord.Client();

cheney.on('ready', () => {
    cheney.user.setActivity('making money off the iraq war');
});

cheney.on('message', message => {
  if(message.author != cheney.user){
    for (i = 0; i < 4; i++) {
      message.channel.send('Dick Cheney made money off the Iraq War.');
    }
  }
});

// THIS  MUST  BE  THIS  WAY
cheney.login(process.env.BOT_TOKEN);
