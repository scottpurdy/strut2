var Util = require('Util');
var _ = require('lodash');

function Component(appComponentState, pureComponent) {
	_.extend(this, appComponentState);
	this.component = pureComponent;
}

Component.prototype = {
	
};

module.exports = Component;