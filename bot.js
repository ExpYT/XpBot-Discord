console.log(`Starting up the bot.\n`)

const config = require("./json/config.json");
const Discord = require("discord.js");
const fs = require("fs");
const prefix = config.prefix;
const bot = new Discord.Client({disableEveryone: true});
var figlet = require('figlet');
const client = bot;

bot.commands = new Discord.Collection();
fs.readdir("./cmds/", (err, files) => {
if (err) console.error(err);

let jsfiles = files.filter(f => f.split(".").pop() === "js");
if (jsfiles.length <= 0) {
console.log("No commands were found. Were they all deleted? Is there an error with the fs module?");
return;
}

console.log(`Loading ${jsfiles.length} commands...`);
jsfiles.forEach((f, i) => {
let props = require(`./cmds/${f}`);
console.log(`${f} has successfully loaded.`);
bot.commands.set(props.help.name, props);
});
});


bot.on("ready", async() => {
    bot.user.setPresence({ game: { name: `${prefix}help | ${bot.guilds.array().length} servers.` , type: 0 } });
    let link = await bot.generateInvite(["ADMINISTRATOR"]);
    figlet(`${config.name} - ${config.version}\n`, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(`${data}\n${link}`)
    });
});

bot.on("message", async message => {
let messageArray = message.content.split(/\s+/g);
let command = messageArray[0];
let args = messageArray.slice(1);
if (!command.startsWith(prefix)) return;
let cmd = bot.commands.get(command.slice(prefix.length));
if (cmd) cmd.run(bot, message, args);
});




bot.login(config.token);