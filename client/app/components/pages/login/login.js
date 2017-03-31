import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngStorage from 'ngstorage';
import loginComponent from './login.component.js';
import config from './login.config.js';
import './login.scss';
import uibAlert from 'angular-ui-bootstrap';
//import commonModule from '../../../common/common.js';
import AuthServiceFunction from '../../../services/authservice.js';

let loginModule = angular.module('login', [
  uiRouter,
    uibAlert,
    'ngStorage'
])

.component('login', loginComponent)
.service ('AuthService',AuthServiceFunction)

.config(config)

.name;

export default loginModule;
