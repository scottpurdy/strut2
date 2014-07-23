var lang = require('i18n/lang');
var Keyboard = require('device/Keyboard');

module.exports = {
	init: function(registry) {
		registry.register({
			interfaces: [
				'strut.logo_menu.undo_redo',
				'strut.keyboard.hotkey.interceptor'
			],
			meta: {
				label: lang.undo,
				hotkey: Keyboard.getHotkeyString('ctrl', 'z')
			}
		}, {
			call: function() {

			}
		});

		registry.register({
			interfaces: [
				'strut.logo_menu.undo_redo',
				'strut.keyboard.hotkey.interceptor'
			],
			meta: {
				label: lang.redo,
				hotkey: Keyboard.getHotkeyString('ctr', 'y')
			}
		}, {
			call: function() {

			}
		});
	}
};