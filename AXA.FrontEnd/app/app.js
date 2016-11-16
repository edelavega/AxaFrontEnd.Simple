
var app = angular.module('AxaFrontEndApp', ['ngRoute', 'LocalStorageModule', 'angular-loading-bar', 'ngResource', 'ngTable']);

app.config(function ($routeProvider) {

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "/app/views/home.html"
    });

    $routeProvider.when("/login", {
        controller: "loginController",
        templateUrl: "/app/views/login.html"
    });

    $routeProvider.when("/signup", {
        controller: "signupController",
        templateUrl: "/app/views/signup.html"
    });

    $routeProvider.when("/clients", {
        controller: "clientsController",
        templateUrl: "/app/views/clients.html"
    });
    
    $routeProvider.when("/clients/:userName", {
        controller: "clientsController",
        templateUrl: "/app/views/policies.html"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });

});

var serviceBase = 'http://localhost:36391/';

app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'AxaFrontEndApp'
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);


