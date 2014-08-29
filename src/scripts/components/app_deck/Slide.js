var Util = require('Util');
var PureSlide = require('components/deck/Slide');

function Slide(appSlideState, pureSlide) {
	this.pureSlide = pureSlide || new PureSlide();

	_.extend(this, appSlideState);
}

Slide.prototype = {
	get id() {
		return this.pureSlide.id;
	},

	getSelectedComponents: function() {
		
	},

	selectComponent: function(comp) {

	},

	addComponent: function(type) {
		this.pureSlide.addComponent(type);
	}
};

module.exports = Slide;