﻿'use strict';
app.controller('signupController', ['$scope', '$location', '$timeout', 'authService', function ($scope, $location, $timeout, authService) {

    $scope.savedSuccessfully = false;
    $scope.message = "";

    $scope.registration = {
        userName: "",
        email:"",
        password: "",
        confirmPassword: ""
    };

    $scope.signUp = function () {

        authService.saveRegistration($scope.registration).then(function (response) {

            $scope.savedSuccessfully = true;
            $scope.message = "Gracias por confiar en nosotros, por favor espere para iniciar sesión.";
            startTimer();

        },
         function (response) {
             var errors = [];
             for (var key in response.data.modelState) {
                 for (var i = 0; i < response.data.modelState[key].length; i++) {
                     errors.push(response.data.modelState[key][i]);
                 }
             }
             $scope.message = "Ooops!!!! ha ocurrido un error: " + errors.join(' ');
         });
    };

    var startTimer = function() {
        var timer = $timeout(function() {
            $timeout.cancel(timer);
            $location.path('/login');
        }, 2000);
    };

}]);