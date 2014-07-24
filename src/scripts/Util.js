'use strict';

var self = {
	mapFromString: function(firstSplitter, secondSplitter, str) {
		var map = {};

		str.split(firstSplitter).forEach(function(encodedPair) {
			var parts = encodedPair.split(secondSplitter);
			map[parts[0]] = parts[1];
		});

		return map;
	},

	camelize: function(splitter, str) {
		var parts = str.split(splitter);
		if (parts.length == 1) {
			return parts[0]
		}

		return parts.reduce(function(a, b) {
			return a + self.capFirstChars(1, b);
		});
	},

	renameKeys: function(fn, obj) {
		var keys = Object.getKeys(obj);
		return self.swapKeys(keys, keys.map(fn), obj);
	},

	capFirstChars: function(n, str) {
		return str.substring(0,n).toUpperCase() + str.substring(n);
	},

	swapKeys: function(oldKeys, newKeys, obj) {
		for (var i = 0; i < oldKeys.length; ++i) {
			if (oldKeys[i] === newKeys[i]) continue;

			var value = obj[oldKeys[i]];
			delete obj[oldKeys[i]];
			obj[newKeys[i]] = value;
		}

		return obj;
	},

	curry1_1: function(fn, x) {
		return function(y) {
			return fn(x, y);
		}
	}
};

module.exports = self;