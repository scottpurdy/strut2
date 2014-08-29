/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');

var SlideEditor = require('./SlideEditor.jsx');
var TransitionEditor = require('./TransitionEditor.jsx');
var PureDeck = require('components/deck/Deck');
var AppDeck = require('components/app_deck/Deck');
var Deck = require('components/deck/Deck');

var subViews = {
	slide: SlideEditor,
	transition: TransitionEditor
};

// get and set up the 'deck' model here
var Editor = React.createClass({
	getInitialState: function() {
		var appDeck = new AppDeck({slides: []}, new Deck());
		appDeck.addSlide();

		return {
			view: 'slide',
			deck: appDeck
		}
	},

	render: function() {
		var CurrentView = subViews[this.state.view];
		return this.transferPropsTo(
			<div className="strt-editor">
				<CurrentView
					deck={this.state.deck} />
			</div>
		);
	}
});

module.exports = Editor;
