//NEW THING HERE FOR LINE 2
console.clear();

const fs = require('fs')
function readJsonFile() { 
    return JSON.parse(fs.readFileSync('./creds.json', 'utf8')); 
  }
  
let creds = readJsonFile();
const token = creds["token"]; 
const prefix = creds["prefix"];

const { Client, Intents } = require('discord.js'); 
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); 
client.on('ready', () => { 
console.log(`Logged in as ${client.user.tag}!`); 
}); 

client.on('messageCreate', message => { 
  console.log(message.content);
 //NEW THING HERE ASWELL ON LINE 20 AND 23

  if(message.content == "Poo Poo Head") message.reply("Thats not nice!")

  if (!message.content.startsWith(prefix) || message.author.bot) return; 

  if (message.content === `${prefix}ping`) { 
    message.channel.send('pong');
  }
  
   if (message.content === `${prefix}Hello`) { 
    message.channel.send('Hello there! what would you like me to do?');
  }

  if (message.content === `${prefix}Help`) { 
    message.channel.send('Here is what i can do!');
  }

  if (message.content === `${prefix}Ayaan`) { 
    message.channel.send('Your presence influences my slumber! what would you want me to do your majesty (Ayaan made me write this)');
  }
  
  if (message.content === `${prefix}Teja`) { 
    message.channel.send('(Kinda basic) but Teja is the best (Teja made me write this)');
  }

  
  // to make more commands follow this:
  // if (message.content === `${prefix}<COMMANDNAME>`) {
    // DO STUFF FOR THE COMMAND
  // }
});

client.login(token); // login to the bot with the token

//Dear Yousef and Sud, this is the next part which will activate it to messgae handlers / commands! 
// I will do this someplace else






