(function () {
    "use strict";
    angular.module("AxaFrontEndApp").controller("clientsController", clientsController);
    clientsController.$inject = ["NgTableParams", "clientsService", "$routeParams", "$scope"];
    function clientsController(NgTableParams, clientsService, $routeParams, $scope) {
        
        $scope.userName = $routeParams.userName;

        if ($scope.userName === null || angular.isUndefined($scope.userName)) {
            this.tableParams = new NgTableParams({}, {
                getData: function(params) {
                    return clientsService.clients.query({
                            page: params.page(),
                            per_page: params.count()
                        },
                        function(data, headersGetter) {
                            var pagination = angular.fromJson(headersGetter()['x-pagination']);
                            params.total(pagination.TotalPages * params.count());
                            return data;
                        }).$promise;
                }
            });
        } else {
            this.tableParams = new NgTableParams({}, {
                getData: function (params) {
                    return clientsService.clientPolicies.query({
                        userName: $scope.userName
                    },
                        function (data, headersGetter) {
                            return data;
                        }).$promise;
                }
            });
        }

    }
})();

    