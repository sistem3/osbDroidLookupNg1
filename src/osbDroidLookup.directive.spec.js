'use strict';

describe('Directive: starWarsLookup', function () {

  // load the directive's module and view
  beforeEach(module('oneStepBeyondApp'));
  beforeEach(module('app/starWarsLookup/starWarsLookup.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<star-wars-lookup></star-wars-lookup>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the starWarsLookup directive');
  }));
});