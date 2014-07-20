'use strict';

describe('TopNav', function () {
  var TopNav, component;

  beforeEach(function () {
    TopNav = require('../../../src/scripts/components/TopNav.jsx');
    component = TopNav();
  });

  it('should create a new instance of TopNav', function () {
    expect(component).toBeDefined();
  });
});
