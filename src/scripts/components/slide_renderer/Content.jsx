'use strict';

var SlideContentRenderer = React.createClass({
	render: function() {
		return this.transferPropsTo(
			<div
				dangerouslySetInnerHTML={{__html: this.props.payload}}>
			</div>
		);
	}
});

module.exports = SlideContentRenderer;
