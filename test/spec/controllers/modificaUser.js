'use strict';

describe('Controller: ModificaUCtrl', function () {

  // load the controller's module
  beforeEach(module('admincarApp'));

  var ModificaUCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModificaUCtrl = $controller('ModificaUCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ModificaUCtrl.awesomeThings.length).toBe(3);
  });
});
