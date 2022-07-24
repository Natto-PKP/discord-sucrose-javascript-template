const { Sucrose } = require('discord-sucrose');
const { GatewayIntentBits, Partials } = require('discord.js');
require('dotenv').config();

Sucrose.build({
  intents: [GatewayIntentBits.Guilds],
  partials: [Partials.Channel],
});
