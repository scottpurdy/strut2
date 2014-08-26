/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');

var WellSlide = React.createClass({

	render: function() {
		return this.transferPropsTo(
			<div className="strt-well-slide">
			</div>
		);
	}
});

module.exports = WellSlide;