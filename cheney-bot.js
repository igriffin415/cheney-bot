var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});

logger.level = 'debug';
// Initialize Discord Bot
var cheney = new Discord.Client({
   token: auth.token,
   autorun: true
});
cheney.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(cheney.username + ' - (' + cheney.id + ')');
});

cheney.on('message', function(user, userID, channelID, message, event) {
  logger.info('send message');
  cheney.sendMessage({
              to: channelID,
              message: "Dick Cheney made money off the Iraq War.",
              tts: true
  });
});
