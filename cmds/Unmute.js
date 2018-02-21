var Discord = require("discord.js");
var embedd = new Discord.RichEmbed();

module.exports.run = async (bot, message, args) => {
    var get = message.member.displayHexColor;
    let ment = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    var x = embedd.setColor(get);
    var id = "<@" + message.author.id + ">";

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    x
    .setDescription(`${id}, you do not have permission for this action.`)
    message.channel.sendEmbed(embedd)
    return;
    }

    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
 if (message.channel.permissionsFor(message.member).hasPermission("MANAGE_MESSAGES"))
if(!toMute) {
x
.setDescription(`${id}, you didn\'t specify a user mention or ID!`)
message.channel.sendEmbed(embedd)
return;
}

let role = message.guild.roles.find(r => r.name === "Muted");
if (!role || !toMute.roles.has(role.id)) {
x
.setDescription(`${id}, that user is not muted!`)
message.channel.sendEmbed(embedd)
return;
}

await toMute.removeRole(role);
message.delete()
x
.setDescription(`${id}, I have now unmuted them.`)
message.channel.sendEmbed(embedd)
return;
}

module.exports.help = {
name: "unmute"
}