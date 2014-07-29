/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
require('components/OperatingTable.css');

var OperatingTable = React.createClass({
	render: function() {
		return (
			<div className="strt-operating-table"></div>
		);
	}
});

module.exports = OperatingTable;
