export default function ($stateProvider, $urlRouterProvider) {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state({
      name: 'mailboxes',
      //parent: 'common',
      url: '/mailboxes',
      resolve: {
        boxes: MailboxesService => MailboxesService.getMailboxes()
      },
      template: '<mailboxes mailboxes="mailboxes">Идет загрузка ...</mailboxes>',
      controller: function($scope, boxes) {
        console.log('state boxes');
            $scope.mailboxes = boxes;
      }
    } 
/*    {
    	name: 'mailboxes',
    	//parent: 'root',
      url: '/mailboxes',
      component: 'mailboxes'
    }*/);
}