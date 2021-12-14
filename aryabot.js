// Hey Arya, it's Yousuf. I'm gonna explain the code.

// Before we get started, let's improve the security.
// You have your token and prefix in this file, but let's put it in another file and read it from there.
// This is a security measure to prevent others from getting your token and prefix.
// We're calling it creds.json because it's a json file and it's your credentials, so create a file called that.
// You can use any name you want, but I recommend creds.json.
const fs = require('fs') // in the terminal, run npm install fs if you get an error

function readJsonFile() { // create function to read the json file
    return JSON.parse(fs.readFileSync('./creds.json', 'utf8')); // parse the data in said file
  }
  
let creds = readJsonFile(); // assign it a variable for easy access
const token = creds["token"]; // reading the data, put the token and prefix into variables
const prefix = creds["prefix"];

const { Client, Intents } = require('discord.js'); // Imports in the discord.js library
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); // Initialises a new bot instance, dw about intents stuff
client.on('ready', () => { // when the bot is ready
console.log(`Logged in as ${client.user.tag}!`); // it will say its logged in as your bots name
}); // closing the condition statement of when the bot is ready

client.on('messageCreate', message => { // this triggers when a message is created
  if (!message.content.startsWith(prefix) || message.author.bot) return; // if the message doesn't start with the prefix or the author is a bot, return which is essentially exiting

  if (message.content === `${prefix}ping`) { // if the message is equal to the prefix + ping, replies pong 
    message.channel.send('pong');
  }
  // let prefix = 'Go'; -> don't establish inside the if statement, it wont be a global variable
 

  // to make more commands follow this:
  // if (message.content === `${prefix}<COMMANDNAME>`) {
    // DO STUFF FOR THE COMMAND
  // }
});

// client.login("OTE5MzMyMzQ4OTA5MjIzOTk3.YbUQ-A.hjpnby0SAFlYuIuXvYF0umuWzLU"); 
// now, it's 
client.login(); // login to the bot with the token