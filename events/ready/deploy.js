/**
 * @type { import('discord-sucrose').EventModule<'ready'> }
 */
module.exports = {
  label: 'deploy',

  exec: async ({ sucrose }) => {
    await sucrose.interactions.commands.deploy('eval');
  },
};
