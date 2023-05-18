const Logger = require('../../services/Logger');

/**
 * @type { import('discord-sucrose').EventModule<'ready'> }
 */
module.exports = {
  label: 'count',

  exec: ({ sucrose }) => {
    Logger.give('INFO', `${sucrose.guilds.cache.size} guilds`);
    Logger.give('INFO', `${sucrose.users.cache.size} users`);
  },
};
