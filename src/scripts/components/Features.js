'use strict';

var ServiceRegistry = require('registry/ServiceRegistry');
window.serviceRegistry = new ServiceRegistry();

[
	require('bundles/undo-support-strut/main')
].forEach(function(feature) {
	feature.init(window.serviceRegistry);
});