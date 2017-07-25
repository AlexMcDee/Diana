/**
 * Created by AlexMcDee on 24.07.2017.
 */
(function () {

    angular
        .module('DianaWeb')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];
    function HomeController($scope) {
        $scope.title = "Welcome To Diana Gloster Website!";
    }
})();
