var pokemonApp = angular.module('App', ['ngRoute', 'btford.socket-io']);

angular
  .module('App')

.config(['$routeProvider',
  function config($routeProvider) {

    $routeProvider
      .when('/graf', {
        templateUrl: 'src/graf/graf.html',
        controller: 'grafCtrl'
      })
      .when('/table', {
        templateUrl: 'src/table/table.html',
        controller: 'tableCtrl'
      })
      .when('/signin', {
        templateUrl: 'src/sign_in/sign_in.html',
        controller: 'signinCtrl'
      })
      .when('/reg', {
        templateUrl: 'src/reg/reg.html',
        controller: 'regCtrl'
      })
      .when('/add_food', {
        templateUrl: 'src/add_food/add_food.html',
        controller: 'add_foodCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
])

.factory('mySocket', function(socketFactory) {
  var myIoSocket = io.connect('https://netology-socket-io.herokuapp.com/');

  mySocket = socketFactory({
    ioSocket: myIoSocket
  });

  return mySocket;
});