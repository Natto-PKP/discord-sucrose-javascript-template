const { Sucrose } = require('discord-sucrose');
const { GatewayIntentBits, Partials } = require('discord.js');
const InteractionAutoReplyContent = require('./contents/InteractionAutoReplyContent');
require('dotenv').config();

Sucrose.build({
  intents: [GatewayIntentBits.Guilds],
  partials: [Partials.Channel],

  // # Optional options
  features: { // Custom bot features
    interactions: { // Interactions manager
      autoReply: { // Interaction manager autoReply feature
        active: true, // true per default

        // default: https://github.com/Natto-PKP/discord-sucrose/blob/main/src/contents/InteractionAutoReplyContents.ts
        contents: InteractionAutoReplyContent,
      },
    },
  },
});
