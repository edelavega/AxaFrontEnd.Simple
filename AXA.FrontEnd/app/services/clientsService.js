'use strict';
(function () {
    angular.module("AxaFrontEndApp").factory("clientsService", ["$resource", function ($resource) {
        return {
            clients: $resource('http://localhost:36391/api/clients?page=:page&pageSize=:per_page', {}, {
                query: { method: 'GET', params: {}, isArray: true }
            }),
            clientPolicies: $resource('http://localhost:36391/api/clients/:userName/policies', {}, {
                query: { method: 'GET', params: {}, isArray: true }
            })
        };
    }]);
})();
