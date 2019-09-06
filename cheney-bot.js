const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    // client.user.setActivity('making money off the iraq war');
    // client.user.setPresence({
    //     game: {
    //         name: 'Type !help',
    //         type: 0
    //     }
    // });
});

client.on('message', message => {
  if(message.author != client.user){
    for (i = 0; i < 5; i++) {
      message.channel.send('Dick Cheney made money off the Iraq War.');
    }
  }

  client.user.setActivity('YouTube', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);


});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
