var lang = require('i18n/lang');
var keyboard = require('device/Keyboard');

function notifyType(props) {
	if (props.onClick) {
		props.onClick(this.type);
	}
}

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
			type: 'text',
			call: notifyType
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
			type: 'img',
			call: notifyType
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
			type: 'video',
			call: notifyType
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
			type: 'iframe',
			call: notifyType
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
			type: 'shape',
			call: notifyType
		});
	}
};
