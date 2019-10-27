'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API:'"/proxyApi"',
  // OPEN_PROXY: false // 是否开启代理, 修改后需重启npm run dev
  OPEN_PROXY: true // 是否开启代理, 修改后需重启npm run dev
})
