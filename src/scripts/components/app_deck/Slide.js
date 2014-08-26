var Util = require('Util');
var PureSlide = require('components/deck/Slide');

function Slide(appSlideState, pureSlide) {
	Util.invariant(Util.allDefined() || Util.noneDefined(), 'Inconsistent state');
	this.pureSlide = pureSlide || new PureSlide();

	if (!appSlideState) {
		this.components = [];
	} else {
		this.components = Util.map2(function(appComponentState, pureComponent) {
			return new Component(appComponentState, pureComponent);
		}, appSlideState.components, pureSlide.components);
	}
}

Slide.prototype = {
	get id() {
		return this.pureSlide.id;
	},

	getSelectedComponents: function() {
		return this.components.filter(Util.isSelected);
	}
};

module.exports = Slide;