/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var Header = require('widgets/Header.jsx');
var Brand = Header.Brand;
var LogoButton = require('components/header/LogoButton.jsx');
var SlideWell = require('components/editor/well/SlideWell.jsx');
var OperatingTable = require('components/editor/OperatingTable.jsx');

var EditorSlide = React.createClass({
	render: function() {
		return this.transferPropsTo(
			<div>
				<Header>
					<LogoButton />
					
				</Header>
				<div className="container-fluid">
					<SlideWell deck={this.props.deck} />
					<OperatingTable deck={this.props.deck} />
				</div>
			</div>
		);
	}
});

module.exports = EditorSlide;