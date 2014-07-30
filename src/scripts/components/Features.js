'use strict';

var ServiceRegistry = require('registry/ServiceRegistry');
window.serviceRegistry = new ServiceRegistry();

[
	require('bundles/undo-support-strut/main'),
	require('bundles/base-slide-components/main')
].forEach(function(feature) {
	feature.init(window.serviceRegistry);
});