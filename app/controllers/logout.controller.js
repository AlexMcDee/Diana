/**
 * Created by AlexMcDee on 24.07.2017.
 */
(function () {
    angular
        .module('DianaWeb')
        .controller('LogoutController', LogoutController);

    LogoutController.$inject = ['$location', 'AuthenticationService', '$rootScope']
    function LogoutController($location, AuthenticationService, $rootScope) {
        (function logout() {
            $rootScope.auth = false;
            AuthenticationService.ClearCredentials();
            $location.path('/');
        })();
    }
})();