var Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	const embed = new Discord.RichEmbed();
	embed.setTitle('XpBot Command Help');
	embed.setColor('#4caf50');
	embed.addField('Ping - Will return the ping for the bot, correct use: !ping')
	

	message.channel.send(embed)
}
 module.exports.help = {
    name: "help"
    }
