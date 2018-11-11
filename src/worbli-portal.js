
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import './components/worbli-header.js';
import './components/worbli-overlay.js';


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
        .header {
            position: fixed;
            top: 0; 
            width: 100%; 
            z-index:999999;
          }
        iron-pages {
          padding-top: 80px;
        }
        @media only screen and (max-width: 600px){
          iron-pages {
            padding-top: 0px;
          }
        }
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
      <worbli-overlay></worbli-overlay>
      <template is="dom-if" if="{{!hide}}">
        <worbli-header name="header" class="header"></worbli-header>
      </template>

      <iron-pages selected="[[page]]" attr-for-selected="name" role="main" class="center">
        <main-route name="main"></main-route>
        <network-route name="network"></network-route>
        <about-route name="about"></about-route>
        <vision-route name="vision"></vision-route>
        <team-route name="team"></team-route>
        <roadmap-route name="roadmap"></roadmap-route>
        <error-route name="error"></error-route>
        <register-route name="register"></register-route>
        <sharedrop-route name="sharedrop"></sharedrop-route>
        <support-route name="support"></support-route>
        <terms-route name="terms"></terms-route>
        <privacy-route name="privacy"></privacy-route>
        <dashboard-route name="dashboard"></dashboard-route>
        <profservices-route name="profservices"></profservices-route>
        <networkterms-route name="networkterms"></networkterms-route>
        <developerterms-route name="developerterms"></developerterms-route>
        <platformterms-route name="platformterms"></platformterms-route>
        <menu-route name="menu"></menu-route>
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
      hide: {
        type: Boolean,
        value: false,
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
    if (page === 'menu'){
      this.hide = true;
    } else {
      this.hide = false;
    }
    if (!page) {
      this.page = 'main';
    } else if (['main', 'network', 'about', 'vision', 'team', 'roadmap', 'register', 'sharedrop', 'support', 'terms', 'privacy', 'profservices', 'networkterms', 'developerterms', 'platformterms', 'menu', 'dashboard'].indexOf(page) !== -1) {
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
      case 'network':
        import('./routes/network-route.js');
        break;
      case 'about':
        import('./routes/about-route.js');
        break;
      case 'vision':
        import('./routes/vision-route.js');
        break;
      case 'team':
        import('./routes/team-route.js');
        break;
      case 'roadmap':
        import('./routes/roadmap-route.js');
        break;
      case 'register':
        import('./routes/register-route.js');
        break;
      case 'sharedrop':
        import('./routes/sharedrop-route.js');
        break;
      case 'support':
        import('./routes/support-route.js');
        break;
      case 'terms':
        import('./routes/terms-route.js');
        break;
      case 'privacy':
        import('./routes/privacy-route.js');
        break;
      case 'profservices':
        import('./routes/profservices-route.js');
        break;
      case 'networkterms':
        import('./routes/networkterms-route.js');
        break;
      case 'developerterms':
        import('./routes/developerterms-route.js');
        break;
      case 'platformterms':
        import('./routes/platformterms-route.js');
        break;
      case 'menu':
        import('./routes/menu-route.js');
        break;
      case 'dashboard':
        import('./routes/dashboard-route.js');
        break;
      case 'error':
        import('./routes/error-route.js');
        break;
    }
  }
} window.customElements.define('worbli-portal', WorbliPortal);
