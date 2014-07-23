module.exports = {
	debug: function(str) {
		if (window.log.config.debug) {
			console.log(str);
		}
	}
}