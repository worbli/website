
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';

import './components/worbli-header.js';

setPassiveTouchGestures(true);
setRootPath(WorbliPortalGlobals.rootPath);

class WorbliPortal extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          height: 100vh;
        }
        .center {
          max-width: 1160px;
          margin: 0 auto;
        }
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
      <worbli-header name="header" class="center"></worbli-header>
      <iron-pages selected="[[page]]" attr-for-selected="name" role="main" class="center">
        <main-route name="main"></main-route>
        <about-route name="about"></about-route>
        <team-route name="team"></team-route>
        <roadmap-route name="roadmap"></roadmap-route>
        <error-route name="error"></error-route>
      </iron-pages>


    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
    if (!page) {
      this.page = 'main';
    } else if (['main', 'about', 'team', 'roadmap'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'error';
    }
  }

  _pageChanged(page) {
    switch (page) {
      case 'main':
        import('./routes/main-route.js');
        break;
      case 'about':
        import('./routes/about-route.js');
        break;
      case 'team':
        import('./routes/team-route.js');
        break;
      case 'roadmap':
        import('./routes/roadmap-route.js');
        break;
      case 'error':
        import('./routes/error-route.js');
        break;
    }
  }
} window.customElements.define('worbli-portal', WorbliPortal);
