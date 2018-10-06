define(["../worbli-portal.js"],function(_worbliPortal){"use strict";class ErrorRoute extends _worbliPortal.PolymerElement{static get template(){return _worbliPortal.html`
      <style>
        :host {
          display: block;
        }
      </style>

      Oops you hit a 404. <a href="[[rootPath]]">Head back to home.</a>
    `}}window.customElements.define("error-route",ErrorRoute)});