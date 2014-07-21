/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var Header = require('widgets/Header.jsx');
var Button = require('widgets/Button.jsx');
var DropdownButton = require('widgets/DropdownButton.jsx');
var MenuSection = require('widgets/svc/MenuSection.jsx');
var Options = DropdownButton.Options;

var Slide = React.createClass({
	render: function() {
		return (
			<div>
				<Header>
					<DropdownButton>
						<Button className="btn-default">
							Hello
						</Button>
						<Options>
							<MenuSection interface='strut.logo_menu.files' />
							<MenuSection interface='strut.logo_menu.undo_redo' />
							<MenuSection interface='strut.logo_menu.cut_copy_paste' />
							<MenuSection interface='strut.logo_menu.import_export' />
						</Options>
					</DropdownButton>
				</Header>
				<div className="container-fluid">
				</div>
			</div>
		);
	}
});

module.exports = Slide;