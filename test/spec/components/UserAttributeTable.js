'use strict';

describe('UserAttributeTable', function () {
  var UserAttributeTable, component;

  beforeEach(function () {
    UserAttributeTable = require('../../../src/scripts/components/UserAttributeTable.jsx');
    component = UserAttributeTable();
  });

  it('should create a new instance of UserAttributeTable', function () {
    expect(component).toBeDefined();
  });
});
