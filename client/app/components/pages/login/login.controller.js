//import AuthService from '../../services/authservice/authservice.js';

function LoginController($state, $scope, AuthService) {
  "ngInject";

  console.log('1 login');
  console.log($state);
  this.NameLogin = 'Имя входа';
  this.go = () => {
    AuthService
      .Authorize(this.loginId,this.pwd)
      .then(result => $state.go('mailboxes'), error => alert(error.message));
  }
}

export default LoginController;
