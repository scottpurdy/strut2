'use strict';

var Css = require('html/Css');
var Events = require('events/Events');

function Component(node) {
	// constructing based on just a type
	if (typeof node === 'string') {
		this.nodeName = node;
		this.content = '';
		this.style = {};
		this.classes = '';
	} else { // have a node with content
		this.nodeName = node.nodeName;
		this.content = node.innerHTML;
		this.style = Css.textToObject(node.style.cssText);
		this.classes = node.className.split(' ');
	}
}

Component.prototype = {
	addClass: function(klass) {

	},

	updateStyle: function() {

	},

	replaceStyle: function() {

	},

	replaceContent: function() {
		
	}
};

module.exports = Component;
