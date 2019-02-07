import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';

setPassiveTouchGestures(true);
setRootPath(WorbliPortalGlobals.rootPath);

class DasboardRoute extends PolymerElement {
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
        iron-pages {
          padding-top: 25px;
        }
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <app-route route="{{route}}" pattern="[[rootPath]]dashboard/:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
      <iron-pages selected="[[page]]" attr-for-selected="name" role="main" class="center">
        <profile-route name="profile"></profile-route>
        <editpassword-route name="editpassword"></editpassword-route>  
        <review-route name="review"></review-route>  
        <status-route name="status"></status-route> 
        <account-route name="account"></account-route>        
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
      subroute: Object,
      jsonrpc: Object,
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
    if (!page) {
      this.page = 'editpassword';
    } else if (['profile', 'account', 'review', 'status', 'editpassword'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'error';
    }
  }

  _pageChanged(page) {
    switch (page) {
        case 'profile':
            import('./dashboard/profile-route.js');
            break;
        case 'review':
            import('./dashboard/review-route.js');
            break;
        case 'status':
            import('./dashboard/status-route.js');
            break;
        case 'account':
            import('./dashboard/account-route.js');
            break;
        case 'editpassword':
            import('./dashboard/editpassword-route.js');
            break;
    }
  }
} window.customElements.define('dashboard-route', DasboardRoute);
