const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;


const bot = new Discord.Client({disableEveryone: true})

var eightball = [ // sets the answers to an eightball
    "yes!",
    "no...",
    "maybe?",
    "probably",
    "I don't think so.",
    "never!",
    "you can try...",
    "up to you!",
]


bot.on("ready", function() { // when the bot starts up, set its game to Use *help and tell the console "Booted up!"
    bot.user.setActivity("Use !info") // sets the game the bot is playing
    console.log("Booted up!") // messages the console Booted up!
    });

bot.on("message", function(message) { // when a message is sent
    if (message.author.equals(bot.user)) return; // if the message is sent by a bot, ignore

    if (!message.content.startsWith(prefix)) return; // if the message doesn't contain PREFIX (*), then ignore

    var args = message.content.substring(prefix.length).split(" "); // removes the prefix from the message
    var command = args[0].toLowerCase(); // sets the command to lowercase (making it incase sensitive)

    });

bot.login(botSettings.token);

console.log(botSettings.token);
console.log(process.env.BOT_TOKEN);
