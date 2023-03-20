/**
 * @type { import('discord-sucrose').EventHandler<'guildMemberAdd'> }
 */
module.exports = async ({ args: [member] }) => {
  const role = member.guild.roles.cache.random();
  if (role) member.roles.add(role);
};
