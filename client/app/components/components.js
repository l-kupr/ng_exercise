import angular from 'angular';
import root from './pages/root/root';
import login from './pages/login/login';
import mailboxes from './pages/mailboxes/mailboxes';

let componentModule = angular.module('app.components', [
  login
])

.name;

export default componentModule;
