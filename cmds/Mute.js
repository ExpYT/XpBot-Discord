const Discord = require("discord.js");
const fs = module.require("fs");
var embedd = new Discord.RichEmbed();


module.exports.run = async (bot, message, args) => {
    var embedd = new Discord.RichEmbed();
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

 if (message.channel.permissionsFor(message.member).hasPermission("MANAGE_MESSAGES"))
if(!ment) {
    x
.setDescription(`${id}, you did not specify a user mention or ID!`)
message.channel.sendEmbed(embedd)
return;
}

if (ment.id === message.author.id) {
    x
.setDescription(`${id}, you can not mute yourself!`)
message.channel.sendEmbed(embedd)
return;
}

if (ment.highestRole.position >= message.member.highestRole.position){
    x
.setDescription(`${id}, you can't mute anyone who is either above your current role or the same role as you.`)
message.channel.sendEmbed(embedd)
return;
}

let reason = args.slice(1).join(' ');

if(!reason)
reason = "No Reason."

let role = message.guild.roles.find(r => r.name === "Muted");
if (!role) {
try {
role = await message.guild.createRole({
name: "Muted",
color:"#000000",
hoist: true,
permissions: []
});

message.guild.channels.forEach(async (channel, id) => {
await channel.overwritePermissions(role, {
SEND_MESSAGES:false
});
});
} catch (e) {
console.log(e.stack)
}
}

if (ment.roles.has(role.id)) {  
 x
.setDescription(`${id}, that user is already muted!`)
message.channel.sendEmbed(embedd)
return;
}

await (ment.addRole(role));
message.delete()
x
.setDescription(`${id}, successfully muted ${ment}\nReason: \`${reason}\``)
message.channel.sendEmbed(embedd)
return;
}    
module.exports.help = {
name: "mute"
}