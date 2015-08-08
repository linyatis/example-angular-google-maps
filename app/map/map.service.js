(function () {
	"use strict";

	function MapService($q) {
		return {
			getUsers: function getUsers() {
				var defer = $q.defer();

				defer.resolve([{
					id: 1,
					name: "Filipe",
					position: {
						lat: -23.6033871,
						lng: -46.6922398
					}
				}, {
					id: 2,
					name: "Sergio",
					position: {
						lat: -23.8033871,
						lng: -46.2922398
					}
				}, {
					id: 3,
					name: "Diogo",
					position: {
						lat: -23.89033871,
						lng: -46.9922398
					}
				}]);

				return defer.promise;
			}
		};
	}
	MapService.$inject = ["$q"];

	angular.module("myApp.map").factory("MapService", MapService);
}());
