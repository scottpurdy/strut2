/*
 * Webpack distribution configuration
 *
 * This file is set up for serving the distribution version. It will be compiled to dist/ by default
 */

'use strict';

var webpack = require('webpack');

var common = require('./webpack.common.config');

module.exports = {
  output: {
    publicPatch: 'dist/',
    path: 'dist/',
    filename: 'main.js'
  },

  debug: false,
  devtool: false,
  
  resolve: {
    root: __dirname + '/src',
    modulesDirectories: ['scripts', 'styles', 'node_modules']
  },
  entry: './src/scripts/components/<%= pkg.mainInput %>.jsx',

  stats: {
    colors: true,
    reasons: false
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],

  module: common.module
};
