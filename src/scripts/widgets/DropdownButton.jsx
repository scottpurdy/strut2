/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');

var DropdownButton = React.createClass({
	getInitialState: function() {
		return {
			dropped: false
		}
	},

	componentDidMount: function() {
		document.addEventListener('click', this.onDocClick, false);
	},

	componentWillUnmount: function() {
		document.removeEventListener('click', this.onDocClick, false);
	},

	render: function() {
		if (this.state.dropped) {
			var menu = this.props.children[1];
			var open = ' open';
		} else {
			var open = '';
		}

		return (
			<div className={"btn-group" + open} onClick={this.onClick}>
				{this.props.children[0]}
				{menu}
			</div>
		);
	},

	onClick: function(e) {
		e.nativeEvent.stopPropagation();
		this.setState({
			dropped: !this.state.dropped
		});

		return false;
	},

	onDocClick: function() {
		console.log('d');
		if (this.state.dropped) {
			this.setState({
				dropped: false
			});
		}
	}
});

DropdownButton.Options = React.createClass({
	render: function() {
		return (
			<div className="dropdown-menu" role="menu">
				{this.props.children}
			</div>
		);
	}
});

module.exports = DropdownButton;