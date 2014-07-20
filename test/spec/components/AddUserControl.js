'use strict';

describe('AddUserControl', function () {
  var AddUserControl, component;

  beforeEach(function () {
    AddUserControl = require('../../../src/scripts/components/AddUserControl.jsx');
    component = AddUserControl();
  });

  it('should create a new instance of AddUserControl', function () {
    expect(component).toBeDefined();
  });
});
