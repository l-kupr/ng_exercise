import angular from 'angular';
import uiRouter from 'angular-ui-router';
import config from './root.config.js';

let rootModule = angular.module('root', [
  uiRouter
])

.config(config)

.name;

export default rootModule;