'use strict';

describe('RemoveUserControl', function () {
  var RemoveUserControl, component;

  beforeEach(function () {
    RemoveUserControl = require('../../../src/scripts/components/RemoveUserControl.jsx');
    component = RemoveUserControl();
  });

  it('should create a new instance of RemoveUserControl', function () {
    expect(component).toBeDefined();
  });
});
