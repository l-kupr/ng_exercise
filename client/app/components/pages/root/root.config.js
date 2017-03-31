export default function ($stateProvider, $urlRouterProvider) {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state({
    	abstract: 'true', 
    	name: 'root',
      	url: ''/*,
    	resolve: {
			auth: 1
			//auth: AuthService => AuthService.isAuth()
		}*/
	});
}