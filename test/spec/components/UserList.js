'use strict';

describe('UserList', function () {
  var UserList, component;

  beforeEach(function () {
    UserList = require('../../../src/scripts/components/UserList.jsx');
    component = UserList();
  });

  it('should create a new instance of UserList', function () {
    expect(component).toBeDefined();
  });
});
