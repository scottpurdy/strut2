var constructors = {
	img: require('./Image'),
	video: require('./Video'),
	object: require('./Object'),
	iframe: require('./IFrame'),
	other: require('./FreeForm')
};

module.exports = function(node) {
	var constructor = constructors[node.nodeName] || constructors.other;

	return new constructor(node);
}
