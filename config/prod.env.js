'use strict'
const secureKeys = require('../secure/keys')

module.exports = {
  NODE_ENV: '"production"',
  KEYS: secureKeys.API_KEYS
}
