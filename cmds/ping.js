var Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    startTime = Date.now();
message.channel.send(`Pinging...`).then((message) => {
endTime = Date.now()
let ping = endTime - startTime;
message.edit(`:ping_pong: Pong! **Estimated** time: \`${ping}\`ms | \`${ping / 1000}\` seconds. :ping_pong:`)
return;
});
}

  module.exports.help = {
    name: "ping"
    }