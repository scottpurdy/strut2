/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');

var Video = React.createClass({
	render: function() {	
		var model = this.props.model;

		// width, height, all that other jazz
		// need to handle mp4, ogg, webm, etc. parsing
		return <video src={model.src}></video>;
	}
});

module.exports = Video;