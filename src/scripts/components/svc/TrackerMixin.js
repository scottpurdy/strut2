var ServiceCollection = require('registry/ServiceCollection');

module.exports = {
	componentWillMount: function() {
		window.log.debug('TrackerMixin will mount');

		this._tracker = new ServiceCollection(
			window.serviceRegistry,
			this.getSvcLookup()
		);

		this._tracker.on('change', function() {
			this.forceUpdate();
		}, this);
	},

	componentWillUnmount: function() {
		window.log.debug('TrackerMixin unmounted');
		
		this._tracker.dispose();
	},
};