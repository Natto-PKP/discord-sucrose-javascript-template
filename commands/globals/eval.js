const { ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js');
const { inspect } = require('util');

const template = 'return async () => { const { commands, events } = sucrose; const { buttons, selectMenus } = sucrose.interactions; const { guild, member, user, channel } = interaction; return $code }';
const minify = (str) => (str.length > 1200 ? `${str.slice(0, 1197)}...` : str);

/**
 * @type { import('discord-sucrose').ChatInput }
 */
module.exports = {
  permissions: {
    users: ['570642674151981135'], // your user id
  },

  body: {
    name: 'eval',
    type: ApplicationCommandType.ChatInput,
    description: 'A command to code immediately',
    options: [{
      name: 'code',
      type: ApplicationCommandOptionType.String,
      description: 'Section of code to test',
      required: true,
    }],
  },

  exec: async ({ interaction, sucrose }) => {
    const code = interaction.options.getString('code', true);

    try {
      // eslint-disable-next-line no-new-func
      const execute = Function('{ interaction, sucrose }', template.replace('$code', code))({ interaction, sucrose });
      const result = await execute();

      await interaction.reply({ embeds: [{ color: '#c7e7c2', description: `\`\`\`js\n${minify(inspect(result, false, 2))}\`\`\`` }] });
    } catch (err) {
      if (!(err instanceof Error)) return;
      await interaction.reply({ embeds: [{ color: '#de3e3e', description: `\`\`\`js\n${minify(err.message)}\`\`\`` }] });
    }
  },
};
