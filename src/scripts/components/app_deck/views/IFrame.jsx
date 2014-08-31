/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');

var IFrame = React.createClass({
	render: function() {	
		var model = this.props.model;

		// width, height, all that other jazz
		return <iframe src={model.src}></iframe>;
	}
});

module.exports = IFrame;