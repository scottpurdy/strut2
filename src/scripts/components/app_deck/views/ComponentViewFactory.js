'use strict'

var constructors = {
	img: require('./Image.jsx'),
	video: require('./Video.jsx'),
	object: require('./Object.jsx'),
	iframe: require('./IFrame.jsx'),
	svg: require('./SVG.jsx'),
	other: require('./FreeForm.jsx')
};

module.exports = function(component) {
	var name = component.nodeName || component;
	return constructors[name] || constructors.other;
};
