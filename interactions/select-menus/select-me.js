const { ComponentType } = require('discord.js');

/**
 * @type { import('discord-sucrose').SelectMenu }
 */
module.exports = {
  body: {
    type: ComponentType.SelectMenu,
    customId: 'select-me',
    placeholder: 'Select me !',
    options: [
      { label: 'I love ferret !', value: 'ferret' },
      { label: 'I love ferret !', value: 'ferret' },
      { label: 'I love ferret !', value: 'ferret' },
      { label: 'I love ferret !', value: 'ferret' },
      { label: 'I love ferret !', value: 'ferret' },
    ],
  },

  exec: async ({ interaction }) => {
    await interaction.reply('I LOVE FERRET !!!');
  },
};
