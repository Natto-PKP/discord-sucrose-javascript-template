const { ChannelType } = require('discord.js');

/**
 * @type { import('discord-sucrose').EventModule<'ready'> }
 */
module.exports = {
  label: 'send-message',

  exec: async ({ args: [member] }) => {
    const channels = member.guild.channels.cache.filter((ch) => ch.type === ChannelType.GuildText);
    const channel = channels.random();
    if (channel) channel.send(`${member.displayName} entered a`);
  },
};
