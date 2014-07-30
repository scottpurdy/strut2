/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var ButtonGroup = require('widgets/svc/ButtonGroup.jsx');

var ComponentArea = React.createClass({
	render: function() {
		return (
			<div className="strt-header-component-area">
				<ButtonGroup
					interface="strut.header.component_area.component"
					btnClassName="btn-default"
				/>
			</div>
		);
	}
});

module.exports = ComponentArea;