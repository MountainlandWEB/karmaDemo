/**!
 * AngularJasmineDemo version: @project.version@, @buildTimestamp@
 * Copyright (c) 2016 Verisk Analytics, Inc. All rights reserved.
 */
describe("expensesController", function(){

	var $controllerConstructor;
	var scope;

	beforeEach(module("app"));
	beforeEach(inject(function($controller, $rootScope){
		$controllerConstructor = $controller;
		scope = $rootScope.$new()
	}));

	it("should have 3 expense items", function(){
		var ctrl = $controllerConstructor('expensesController', {$scope:scope});
		expect(ctrl.expenseItems.length).toBe(3);
	});
	it("should have 0 expense items", function(){
		var ctrl = $controllerConstructor('expensesController', {$scope:scope});
		ctrl.deactivate();
		expect(ctrl.expenseItems.length).toBe(0);
	})

});