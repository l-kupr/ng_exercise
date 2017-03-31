import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mailboxesComponent from './mailboxes.component.js';
import config from './mailboxes.config.js';
import uibAlert from 'angular-ui-bootstrap';
import MailboxesServiceFunction from '../../../services/mailboxesservice.js';

let mailboxesModule = angular.module('mailboxes', [
  uiRouter,
    uibAlert,
    'ngStorage'
])

.component('mailboxes', mailboxesComponent)
.service ('MailboxesService', MailboxesServiceFunction)

.config(config)

.name

export default mailboxesModule;