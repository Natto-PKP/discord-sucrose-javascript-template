/**
 * @type { import('discord-sucrose').EventHandler<'guildMemberAdd'> }
 */
module.exports = async ({ args: [member] }) => {
  console.log(`${member.displayName} entered a guild`);
};
