(function(){
	'use strict';

	angular.module('app')
		.controller('expensesController', [expensesController]);

	function expensesController(){
		var vm = this;

		vm.activate = activate;
		vm.deactivate = deactivate;
		vm.expenseItems = [];

		activate();

		function activate(){
			return vm.expenseItems = [
				{title: 'Expense1', description: 'Desciption1', amount: 1.00},
				{title: 'Expense2', description: 'Desciption2', amount: 2.00},
				{title: 'Expense3', description: 'Desciption;3', amount: 3.00}
			];
		}
		function deactivate(){
			return vm.expenseItems = [
			];
		}
	}
})();