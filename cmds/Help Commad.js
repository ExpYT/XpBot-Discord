var Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	const embed = new Discord.RichEmbed();
	embed.setAuthor('Note: Please Make Sure Your Create A Administrator Role In Order To Use The Admin Commands');
	embed.setTitle('XpBot Command Help');
	embed.setColor('#4caf50');
	embed.addField('Ping',' - Will return the ping for the bot, correct use: !ping');
	embed.addField('adminhelp',' - Will send the help commands for admins');
	
	message.channel.send(embed)
}
 module.exports.help = {
    name: "help"
    }