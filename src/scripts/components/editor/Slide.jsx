/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var Header = require('widgets/Header.jsx');
var Brand = Header.Brand;
var LogoButton = require('components/header/LogoButton.jsx');

var Slide = React.createClass({
	render: function() {
		return this.transferPropsTo(
			<div>
				<Header>
					<LogoButton />
				</Header>
				<div className="container-fluid">
				</div>
			</div>
		);
	}
});

module.exports = Slide;