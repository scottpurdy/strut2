var constructors = {
	// img: require('./Image'),
	// video: require('./Video'),
	// object: require('./Object'),
	// iframe: require('./IFrame'),
	other: require('./Component') // we'll have to use non-jsx on this guy
};

// can prob just treat everything as 'FreeForm'
// so long as we keep the node type with us.
// and we use the node type to switch controls and such.

module.exports = function(node) {
	var name = node.nodeName || node;
	var constructor = constructors[name] || constructors.other;

	return new constructor(node);
}
