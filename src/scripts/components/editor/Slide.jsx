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
var ComponentButtonArea = require('components/header/ComponentArea.jsx');

var EditorSlide = React.createClass({
	_slideClicked: function(i) {
		var deck = this.state.deck;
		deck.toggleSelectedSlide(i);
		this.setState({
			deck: deck
		});
	},

	getInitialState: function() {
		return {
			deck: this.props.deck
		}
	},

	componentWillReceiveProps: function(newProps) {
		if (newProps.deck != this.state.deck) {
			this.setState({
				deck: newProps.deck
			});
		}
	},

	render: function() {
		return this.transferPropsTo(
			<div>
				<Header>
					<LogoButton />
					<ComponentButtonArea />
				</Header>
				<div className="container-fluid">
					<SlideWell
						deck={this.state.deck}
						onSlideClicked={this._slideClicked}
					/>
					<OperatingTable deck={this.state.deck} />
				</div>
			</div>
		);
	}
});

module.exports = EditorSlide;