const color = 0xFFF;
const base = '❌ ` | error `';

/**
 * @type { import('discord-sucrose').InteractionAutoReplyContents }
 */
module.exports = {
  AUTOCOMPLETE_INTERACTION_MISSING: ({ key }) => ({
    embeds: [{
      color,
      description: `${base} autocompletion "${key}" no longer exist`,
    }],
  }),

  AUTOCOMPLETE_INTERACTION_MISSING_EXEC: ({ key }) => ({
    embeds: [{
      color,
      description: `${base} autocompletion "${key}" exec function is not define`,
    }],
  }),

  BUTTON_INTERACTION_MISSING_EXEC: ({ customId }) => ({
    embeds: [{
      color,
      description: `${base} button "${customId}" exec function is not define`,
    }],
  }),

  CHAT_INPUT_GROUP_MISSING: ({ name, group }) => ({
    embeds: [{
      color,
      description: `${base} group "${group}" of command "${name}" no longer exist`,
    }],
  }),

  CHAT_INPUT_GROUP_OPTION_MISSING: ({ name, group, option }) => ({
    embeds: [{
      color,
      description: `${base} option "${option}" of group "${group}" of command "${name}" no longer exist`,
    }],
  }),

  CHAT_INPUT_GROUP_OPTION_MISSING_EXEC: ({ name, group, option }) => ({
    embeds: [{
      color,
      description: `${base} option "${option}" of group "${group}" of command "${name}" exec function is not define`,
    }],
  }),

  CHAT_INPUT_INTERACTION_MISSING: ({ name }) => ({
    embeds: [{
      color,
      description: `${base} command "${name}" not longer exist`,
    }],
  }),

  CHAT_INPUT_INTERACTION_MISSING_EXEC: ({ name }) => ({
    embeds: [{
      color,
      description: `${base} command "${name}" exec function is not define`,
    }],
  }),

  CHAT_INPUT_OPTION_MISSING: ({ name, option }) => ({
    embeds: [{
      color,
      description: `${base} option "${option}" of command "${name}" no longer exist`,
    }],
  }),

  CHAT_INPUT_OPTION_MISSING_EXEC: ({ name, option }) => ({
    embeds: [{
      color,
      description: `${base} option "${option}" of command "${name}" exec function is not define`,
    }],
  }),

  ERROR: ({ error }) => ({
    embeds: [{
      color,
      description: `${base} ${error.message}`,
    }],
  }),

  FORM_INTERACTION_MISSING_EXEC: ({ customId }) => ({
    embeds: [{
      color,
      description: `${base} form "${customId}" exec function no longer exist`,
    }],
  }),

  MESSAGE_CONTEXT_MENU_MISSING_EXEC: ({ name }) => ({
    embeds: [{
      color,
      description: `${base} message context "${name}" exec function is not define`,
    }],
  }),

  PERMISSIONS_CLIENT_MISSING: ({ interaction, permissions }) => ({
    embeds: [{
      color,
      description: `${base} ${interaction.guild?.members.me} has missing permissions \`${permissions.join('` `')}\``,
    }],
  }),

  PERMISSIONS_CURRENT_GUILD_CHANNEl_NOT_ALLOWED: ({ interaction }) => ({
    embeds: [{
      color,
      description: `${base} ${interaction.channel} channel is not allowed`,
    }],
  }),

  PERMISSIONS_CURRENT_GUILD_NOT_ALLOWED: ({ interaction }) => ({
    embeds: [{
      color,
      description: `${base} ${interaction.guild?.name} guild is not allowed`,
    }],
  }),

  PERMISSIONS_CURRENT_MEMBER_MISSING: ({ interaction, permissions }) => ({
    embeds: [{
      color,
      description: `${base} ${interaction.user} has missing permissions \`${permissions.join('` `')}\``,
    }],
  }),

  PERMISSIONS_CURRENT_USER_NOT_ALLOWED: ({ interaction }) => ({
    embeds: [{
      color,
      description: `${base} ${interaction.user} user is not allowed`,
    }],
  }),

  PERMISSIONS_GUILD_NOT_ALLOWED: ({ interaction }) => ({
    embeds: [{
      color,
      description: `${base} ${interaction.user}, this interaction is only allowed in private message`,
    }],
  }),

  PERMISSIONS_MEMBER_ALLOW_ROLES_MISSING: ({ interaction }) => ({
    embeds: [{
      color,
      description: `${base} ${interaction.user} does not have allowed roles`,
    }],
  }),

  PERMISSIONS_PRIVATE_CHANNEL_NOT_ALLOWED: ({ interaction }) => ({
    embeds: [{
      color,
      description: `${base} ${interaction.user}, this interaction is only allowed in guild`,
    }],
  }),

  SELECT_MENU_INTERACTION_MISSING_EXEC: ({ customId }) => ({
    embeds: [{
      color,
      description: `${base} select menu "${customId}" exec function is not define`,
    }],
  }),

  UNKNOWN_INTERACTION: ({ interaction }) => ({
    embeds: [{
      color,
      description: `${base} ${interaction.user}, interaction no longer exist`,
    }],
  }),

  USER_CONTEXT_MENU_MISSING_EXEC: ({ name }) => ({
    embeds: [{
      color,
      description: `${base} user context "${name}" exec function no longer exist`,
    }],
  }),
};
