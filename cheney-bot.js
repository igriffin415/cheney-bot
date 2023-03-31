const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setPresence({
    activities: [{
      name: 'making $ off the iraq war'
    }]
  });
});

client.on('message', message => {
  if (message.author != client.user) {
    for (i = 0; i < 6; i++) {
      message.channel.send({
        content: 'Dick Cheney made money off the Iraq War.'
      });
    }
  }

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
