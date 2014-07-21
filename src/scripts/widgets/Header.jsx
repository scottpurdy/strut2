/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');

var Header = React.createClass({
	render: function() {
		return (
			<nav
				className="navbar navbar-default navbar-static-top"
				role="navigation">
				<div className="container-fluid">
					{this.props.children}
				</div>
			</nav>
		);
	}
});


module.exports = Header;