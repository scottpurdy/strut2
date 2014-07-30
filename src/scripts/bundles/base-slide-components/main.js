var lang = require('i18n/lang');
var keyboard = require('device/Keyboard');

module.exports = {
	init: function(registry) {
		registry.register({
			interfaces: [
				'strut.header.component_area.component'
			],
			meta: {
				label: lang.text,
				icon: 'glyphicon-text-width'
			}
		}, {
			call: function() {

			}
		});

		registry.register({
			interfaces: [
				'strut.header.component_area.component'
			],
			meta: {
				label: lang.image,
				icon: 'glyphicon-picture'
			}
		}, {
			call: function() {

			}
		});

		registry.register({
			interfaces: [
				'strut.header.component_area.component'
			],
			meta: {
				label: lang.video,
				icon: 'glyphicon-film'
			}
		}, {
			call: function() {

			}
		});

		registry.register({
			interfaces: [
				'strut.header.component_area.component'
			],
			meta: {
				label: lang.website,
				icon: 'glyphicon-globe'
			}
		}, {
			call: function() {

			}
		});

		registry.register({
			interfaces: [
				'strut.header.component_area.component'
			],
			meta: {
				label: lang.shapes,
				icon: 'glyphicon-star'
			}
		}, {
			call: function() {

			}
		});
	}
};
