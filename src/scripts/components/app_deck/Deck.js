var Slide = require('./Slide');
var Util = require('Util');

function Deck(appDeckState, pureDeck) {
	this.pureDeck = pureDeck;
	this.slides = Util.map2(function(appSlideState, pureSlide) {
		return new Slide(appSlideState, pureSlide)
	}, appDeckState.slides, pureDeck.slides);
}

Deck.prototype = {
	get config() {
		return this.pureDeck.config;
	},

	getSelectedSlides: function() {
		return this.slides.filter(Util.isSelected);
	},

	addSlideLast: function() {
		this.slides.push(new Slide());
		return this.slides.length - 1;
	},

	setSelectedSlide: function(i, selected) {
		this.slides[i].selected = selected;
	},

	removeSlide: function(i) {
		this.slides.splice(i, 1);
	},

	popSlide: function() {
		this.slides.pop();
	},

	shiftSlide: function() {
		this.slides.shift();
	},

	addSlideFirst: function() {
		this.slides.unshift(new Slide());
		return 0;
	}
};

var proto = Deck.prototype;
proto.addSlide = proto.addSlideLast;

module.exports = Deck;