/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var _ = require('lodash');

require('bootstrap.css');
require('main.css');

var ServiceRegistry = require('registry/ServiceRegistry');
window.serviceRegistry = new ServiceRegistry();

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

React.renderComponent(<App />, document.getElementById('content')); // jshint ignore:line

module.exports = App;
