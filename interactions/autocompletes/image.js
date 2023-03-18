/**
 * @type { import('discord-sucrose').Autocomplete }
 */
module.exports = {
  body: { command: 'image' },

  exec: async ({ interaction }) => {
    const focus = interaction.options.getFocused();

    if (focus === 'animals') {
      await interaction.respond([
        { name: 'Ferret', value: 'ferret' },
        { name: 'Cat', value: 'cat' },
        { name: 'Dog', value: 'dog' },
        { name: 'Otter', value: 'Otter' },
      ]);
    } else if (focus === 'games') {
      await interaction.respond([
        { name: 'Minecraft', value: 'minecraft' },
        { name: 'Fortnite', value: 'fortnite' },
        { name: 'Humankind', value: 'humankind' },
        { name: 'Idol Manager', value: 'idol-manager' },
      ]);
    }
  },
};
