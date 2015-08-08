(function () {
	"use strict";

	function MapController(MapService) {
		var vm = this;

		MapService.getUsers().then(function (users) {
			vm.users = users;
		});

	}

	MapController.$inject = ["MapService"];

	angular.module("myApp.map").controller("MapController", MapController);

}());
