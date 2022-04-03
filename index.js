const { Client, Intents } = require('discord.js');
const colors = require('colors')

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

require('./ClientFiles/Ready')(client);
require('./ClientFiles/Mention')(client);
  
client.login(process.env.LayssaToken)