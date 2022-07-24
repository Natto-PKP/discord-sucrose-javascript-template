const { ComponentType, TextInputStyle } = require('discord.js');

/**
 * @type { import('discord-sucrose').Form }
 */
module.exports = {
  body: {
    customId: 'create-report',
    title: 'Report ticket',
    components: [
      {
        type: ComponentType.ActionRow,
        components: [
          {
            customId: 'report-reason',
            type: ComponentType.TextInput,
            style: TextInputStyle.Short,
            label: 'Indicate the reason for the report',
            required: true,
          },
        ],
      },
      {
        type: ComponentType.ActionRow,
        components: [
          {
            customId: 'report-args',
            type: TextInputStyle.Paragraph,
            style: ComponentType.TextInput,
            label: 'Indicate your problem',
            required: true,
          },
        ],
      },
    ],
  },

  exec: async ({ interaction }) => {
    const reason = interaction.fields.getTextInputValue('report-reason');
    const args = interaction.fields.getTextInputValue('report-args');

    await interaction.reply(`Someone sent a report: ${reason}\n\`\`\`${args}\`\`\``);
  },
};
