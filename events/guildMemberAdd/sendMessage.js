const { ChannelType } = require('discord.js');

/**
 * @type { import('discord-sucrose').EventHandler<'guildMemberAdd'> }
 */
module.exports = async ({ args: [member] }) => {
  const channels = member.guild.channels.cache.filter((ch) => ch.type === ChannelType.GuildText);
  const channel = channels.random();
  if (channel) channel.send(`${member.displayName} entered a guild`);
};
