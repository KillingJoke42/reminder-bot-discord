var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
//var jsonfile = require('jsonfile');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

//bot.sendMessage({to: channelID, message: '@everyone'});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
	
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        //args = args.splice(1);
        switch(cmd) {
            case 'start':
				//bot.sendMessage({to: channelID, message: 'ping!'});
				var reminded = false;
				while(true)
				{
					//var time_now = Date();
					var hours = (new Date()).getUTCHours();
					if (hours == 15)
					{
						//console.log("Time: " + hours + "; Remind: " + reminded);
						if (reminded == false)
						{
							bot.sendMessage({to: channelID, message: '@everyone Time to update the #reports channel! Make sure to include the details about Yesterday, Today and any Blockers.'});
							reminded = true;
						}
					}
					else
					{
						reminded = false;
					}
				}
            break;
         }
     }
});