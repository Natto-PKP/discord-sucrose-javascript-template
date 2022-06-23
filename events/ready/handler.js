const { Logger } = require('discord-sucrose');

/**
 * @type { import('discord-sucrose').EventHandler<'ready'> }
 */
module.exports = async ({ sucrose }) => {
  Logger.write("I'm connected !");

  await sucrose.commands.define('eval');
};
