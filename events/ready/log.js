const { Logger: SucroseLogger } = require('discord-sucrose');
const Logger = require('../../services/Logger');

/**
 * @type { import('discord-sucrose').EventHandler<'ready'> }
 */
module.exports = async ({ sucrose }) => {
  Logger.write(SucroseLogger.style("I'm connected", 'rainbow'));

  await sucrose.commands.define('eval');
};
