/**
 * @type { import('discord-sucrose').Autocomplete }
 */
module.exports = {
  body: { command: 'image', option: 'animals' },

  exec: async ({ interaction }) => {
    await interaction.respond([
      { name: 'Ferret', value: 'ferret' },
      { name: 'Cat', value: 'cat' },
      { name: 'Dog', value: 'dog' },
      { name: 'Otter', value: 'Otter' },
    ]);
  },
};
