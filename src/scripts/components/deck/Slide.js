'use strict';

var Events = require('events/Events');
var ComponentFactory = require('./SlideComponentFactory');
var _ = require('lodash');

function Slide(slideNode) {
	this._components = _.map(slideNode.children, ComponentFactory);
}

var proto = Slide.prototype = Object.create(Events);

Slide.create = function(rawContents) {
	return new Slide(rawContents);
}

module.exports = Slide;
