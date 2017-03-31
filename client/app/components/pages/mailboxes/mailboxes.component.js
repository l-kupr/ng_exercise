import template from './mailboxes.html';
import controller from './mailboxes.controller.js';

let mailboxesComponent = {
  restrict: 'E',
  bindings: {
  	mailboxes: '<'
  },
  template,
  controller
};

export default mailboxesComponent;
