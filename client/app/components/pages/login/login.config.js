export default function ($stateProvider, $urlRouterProvider) {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state( {
    	name: 'login',
    	//parent: 'root',
      url: '/',
      component: 'login'
    });
}
