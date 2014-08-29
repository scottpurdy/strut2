'use strict';

var ComponentFactory = require('./SlideComponentFactory');
var Css = require('html/Css');
var _ = require('lodash');

var nextSlideId = 0;

function Slide(slideNode) {
	this.id = ++nextSlideId;

	if (slideNode) {
		this.style = Css.textToObject(slideNode.style.cssText);
		this.classes = node.className.split(' ');
	
		this.components = _.map(slideNode.children, ComponentFactory);
	} else {
		this.style = {};
		this.classes = [];
		this.components = [];
	}
}

Slide.prototype = {
	addComponent: function(type) {
		this.components.push(ComponentFactory(type));
	}
};

module.exports = Slide;
