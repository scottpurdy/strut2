/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var SvcTrackerMixin = require('components/svc/TrackerMixin');

var MenuSection = React.createClass({
	mixins: [SvcTrackerMixin],

	getSvcLookup: function() {
		return this.props.interface;
	},

	render: function() {
		return (
			<ul>
			</ul>
		);
	}
});

module.exports = MenuSection;