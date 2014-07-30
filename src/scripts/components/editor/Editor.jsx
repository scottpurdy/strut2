/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');

var SlideEditor = require('./Slide.jsx');
var TransitionEditor = require('./Transition.jsx');
var Deck = require('components/deck/Deck');

var subViews = {
	slide: SlideEditor,
	transition: TransitionEditor
};

// get and set up the 'deck' model here
var Editor = React.createClass({
	getInitialState: function() {
		return {
			view: 'slide',
			deck: new Deck()
		}
	},

	render: function() {
		var CurrentView = subViews[this.state.view];
		return this.transferPropsTo(
			<div className="strt-editor">
				<CurrentView deck={this.state.deck} />
			</div>
		);
	}
});

module.exports = Editor;
