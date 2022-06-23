const { Sucrose } = require('discord-sucrose');
const { Intents } = require('discord.js');
require('dotenv').config();

Sucrose.build({ intents: [Intents.FLAGS.GUILDS] });
