const { Logger: SucroseLogger } = require('discord-sucrose');
const Logger = require('../../services/Logger');

/**
 * @type { import('discord-sucrose').EventModule<'ready'> }
 */
module.exports = {
  label: 'log',

  exec: () => {
    Logger.give('INFO', SucroseLogger.style("I'm connected", 'rainbow'));
  },
};
