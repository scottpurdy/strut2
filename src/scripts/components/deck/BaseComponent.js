'use strict';

var Events = require('events/Events');

function BaseComponent(node) {
	this.content = node.innerHTML;

	this.style = node.style.cssText;
	this.classes = node.className.split(' ');
}

BaseComponent.prototype = Object.create(Events);

return BaseComponent;
