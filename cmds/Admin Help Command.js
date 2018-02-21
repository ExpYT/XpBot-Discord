var Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");

	const embed = new Discord.RichEmbed();
	embed.setTitle('XpBot Admin Command Help');
	embed.setColor('#000000');
	embed.addField('Kick',' - Will kick a member from the server, must have administrator role, correct use: !kick @MemberId (reason)')
	embed.addField('purge',' - Will delete a set amout of messages from 2 - 100, correct use: !purge (amount form 2 - 100)')
	embed.addField('mute',' - Will mute a member, correct use: !mute @memberId (reason)')
	embed.addField('unmute',' - Will unmute a member, correct use: !unmute @memberId')


	message.channel.send(embed)
}
 module.exports.help = {
    name: "adminhelp"
    }