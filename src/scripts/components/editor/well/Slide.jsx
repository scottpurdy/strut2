/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var css = require('html/Css').toClassString;

var WellSlide = React.createClass({
	_clicked: function() {
		this.props.onClick(this.props.index);
	},

	render: function() {

		return (
			<div
				className={css({
					"strt-well-slide": true,
					"selected": this.props.model.selected
				})}
				onClick={this._clicked}>
			</div>
		);
	}
});

module.exports = WellSlide;