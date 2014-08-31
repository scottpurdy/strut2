/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');

var Image = React.createClass({
	render: function() {	
		var model = this.props.model;

		// width, height, all that other jazz
		return <img src={model.src}></img>;
	}
});

module.exports = Image;