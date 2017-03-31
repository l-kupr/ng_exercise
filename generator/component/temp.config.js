export default function ($stateProvider, $urlRouterProvider) {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('<%= name %>', {
      url: '/',
      component: '<%= name %>'
    });
}
