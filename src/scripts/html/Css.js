'use strict';

var Util = require('Util');

module.exports = {
	cssTextToObject: function(cssText) {
		return Util.renameKeys(
			Util.curry1_1(Util.camelize, '-'),
			Util.mapFromString(';', ':', cssText)
		);
	}
};