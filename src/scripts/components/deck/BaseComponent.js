'use strict';

var Css = require('hmtml/Css');
var Events = require('events/Events');

function BaseComponent(node) {
	this.content = node.innerHTML;

	this.style = Css.textToObject(node.style.cssText);
	this.classes = node.className.split(' ');
}

BaseComponent.prototype = {
	addClass: function(class) {

	},

	updateStyle: function() {

	},

	replaceStyle: function() {

	},

	replaceContent: function() {
		
	}
};

return BaseComponent;
