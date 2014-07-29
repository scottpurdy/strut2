/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');

require('components/SlideWell.css')

var SlideWell = React.createClass({
	render: function() {
		return this.transferPropsTo(
			<div className="strt-slide-well">
			</div>
		);
	}
});

module.exports = SlideWell;
