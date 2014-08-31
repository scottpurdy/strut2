/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');

var FreeForm = React.createClass({
	render: function() {	
		var model = this.props.model;
		return <div dangerouslySetInnerHTML={{__html: model.content}}></div>;
	}
});

module.exports = FreeForm;