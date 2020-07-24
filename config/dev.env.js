'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const secureKeys = require('../secure/keys')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  KEYS: secureKeys.API_KEYS
})
