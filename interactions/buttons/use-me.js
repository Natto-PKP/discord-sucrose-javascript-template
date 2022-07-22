const { ComponentType, ButtonStyle } = require('discord.js');

/**
 * @type { import('discord-sucrose').Button }
 */
module.exports = {
  data: {
    type: ComponentType.Button,
    customId: 'useme',
    style: ButtonStyle.Primary,
  },

  exec: async ({ interaction }) => {
    await interaction.reply('Yeeaaaaah !');
  },
};
