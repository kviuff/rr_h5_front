'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = /development/.test(process.env.NODE_ENV );
const sourceMapEnabled = isProduction
  ?config.dev.cssSourceMap
  : config.build.productionSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
