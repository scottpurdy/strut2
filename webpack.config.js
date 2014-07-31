/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpak-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */

'use strict';

var common = require('./webpack.common.config');

module.exports = {
  output: {
    filename: 'main.js'
  },

  cache: true,
  debug: true,
  devtool: false,
  
  resolve: {
    root: __dirname + '/src',
    modulesDirectories: ['scripts', 'styles', 'node_modules']
  },
  entry: './src/scripts/components/<%= pkg.mainInput %>.jsx',

  stats: {
    colors: true,
    reasons: true
  },

  module: common.module
};
