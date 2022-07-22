/**
 * @type { import('discord-sucrose').Form }
 */
module.exports = {
  data: {
    customId: 'create-report',
    title: 'Report ticket',
    components: [
      {
        type: 'ACTION_ROW',
        components: [
          {
            customId: 'report-reason',
            type: 'TEXT_INPUT',
            style: 'SHORT',
            label: 'Indicate the reason for the report',
            required: true,
          },
        ],
      },
      {
        type: 'ACTION_ROW',
        components: [
          {
            customId: 'report-args',
            type: 'TEXT_INPUT',
            style: 'PARAGRAPH',
            label: 'Indicate your problem',
            required: true,
          },
        ],
      },
    ],
  },

  exec: ({ interaction }) => {
    const reason = interaction.fields.getTextInputValue('report-reason');
    const args = interaction.fields.getTextInputValue('report-args');

    interaction.reply(`Someone sent a report: ${reason}\n\`\`\`${args}\`\`\``);
  },
};
