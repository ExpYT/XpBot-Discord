var Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	client.on("message", message => {
  const prefixes = ['!', '?', '/'];
  let prefix = false;
  for(const thisPrefix of prefixes) {
    if(message.content.startsWith(thisPrefix)) prefix = thisPrefix;
  }
  if(!prefix) return;

  // Go ahead with the rest of your code!
})


	}
  module.exports.help = {
    name: "changeprefix"
    }