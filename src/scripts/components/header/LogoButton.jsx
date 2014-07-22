/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var Button = require('widgets/Button.jsx');
var DropdownButton = require('widgets/DropdownButton.jsx');
var Options = DropdownButton.Options;
var MenuSection = require('widgets/svc/MenuSection.jsx');

require('components/header.css');

var LogoButton = React.createClass({
	render: function() {
		return this.transferPropsTo(
			<DropdownButton className="cmp-logo-button">
				<Button className="btn-default">
					<span className="bg"></span>
					<span className="caret"></span>
				</Button>
				<Options>
					<MenuSection interface='strut.logo_menu.files' />
					<MenuSection interface='strut.logo_menu.undo_redo' />
					<MenuSection interface='strut.logo_menu.cut_copy_paste' />
					<MenuSection interface='strut.logo_menu.import_export' />
				</Options>
			</DropdownButton>
		);
	}
});

module.exports = LogoButton;