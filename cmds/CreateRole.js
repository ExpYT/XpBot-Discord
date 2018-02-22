
var Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let name = message.content


if (!message.member.hasPermission("MANAGE_MESSAGES")) {
x
.setDescription(`${id}, you do not have permission for this action.`)
message.channel.sendEmbed(embedd)
return;
}
message.guild.createRole({
name: name,
color:"#000000",
permissions: [{
  CREATE_INSTANT_INVITE: true,
  ADD_REACTIONS: true,
  READ_MESSAGES: true,
  SEND_MESSAGES: true,
  ATTACH_FILES: true,
  READ_MESSAGE_HISTORY: true,
  EXTERNAL_EMOJIS: true,
  CONNECT: true,
  SPEAK: true,
}]
});


}


  module.exports.help = {
    name: "createrole"
    }