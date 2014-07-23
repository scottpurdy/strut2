/**
 * @jsx React.DOM
 */
'use strict';

window.log = require('logger/Log');
window.log.config = {
	debug: true
};

require('components/Features');

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var _ = require('lodash');

require('bootstrap.css');
require('main.css');

var SlideEditor = require('components/editor/Slide.jsx');
var TransitionEditor = require('components/editor/Transition.jsx');

var subViews = {
	'editor.slide': SlideEditor,
	'editor.transition': TransitionEditor
};

var App = React.createClass({
	getInitialState: function() {
		return {
			view: 'editor.slide'
		};
	},

	render: function() {
		var CurrentView = subViews[this.state.view];
		return (
			<div>
				<CurrentView />
			</div>
		);
	}
});

var Root = require('widgets/Root.jsx');

React.renderComponent(<Root><App /></Root>, document.getElementById('content')); // jshint ignore:line

module.exports = App;
