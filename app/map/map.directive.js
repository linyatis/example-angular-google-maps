(function () {
	"use strict";

	function MyMap() {
		return {
			restrict: 'E',
			templateUrl: 'app/map/list.html',
			controller: "MapController as vm"
		};
	}

	MyMap.$inject = [];

	angular.module("myApp.map").directive('myMap', MyMap);
}());
