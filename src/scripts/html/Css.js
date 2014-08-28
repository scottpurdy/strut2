'use strict';

var Util = require('Util');

module.exports = {
	textToObject: function(cssText) {
		return Util.renameKeys(
			Util.curry1_1(Util.camelize, '-'),
			Util.mapFromString(';', ':', cssText)
		);
	},

	toClassString: function(obj) {
		var str = '';
		for (var key in obj) {
			if (obj[key]) {
				str += key + ' ';
			}
		}

		return str;
	}
};