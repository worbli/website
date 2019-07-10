import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';
import '../components/side-bar/worbli-partners.js';
import '../components/side-bar/worbli-telegram.js';
import '../components/worbli-title.js';
import '@polymer/app-route/app-location.js';
class UnsubscribeRoute extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
        .split {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .main {
          flex-grow: 1;
          max-width: 850px;
          margin-top: -32px;
        }
        h1 {
          color: var(--blue-text);
          font-weight: 200;
          margin-bottom: 12px;
        }
        b {
          padding-top: 24px;
          display: block;
          font-size: 20px;
          font-weight: 600;
        }
        iframe {
          margin-top: 50px;
		      margin-bottom: 50px;
		      width:100%;
        }
        .side {
          width: 280px;
          padding-left: 30px;
        }
        h2 {
          color: var(--blue-text);
          font-size: 21px;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .features {
          display: flex;
          flex-wrap: wrap; 
        }
        .left {
          flex-grow:1;
          max-width: 50%;
        }
        .right{
          flex-grow:1;
          max-width: 50%;
        }
        .features p {
          padding-right: 24px;
        }
        .features b {
          font-size: 16px;
          font-weight: 600;
        }
        input {
            border: 1px solid #b3b3b3;
            padding: 12px;
            border-radius: 3px;
            width: 250px;
            margin-top: 1px;
            margin-bottom: 20px;
        }
        .formbutton {
            height: 48px;
            width: 276px;
            background-color: #3296df;
            color: white;
            font-size: 17px;
            font-weight: 700;
            border: 1px solid white;
            border-radius: 6px;
        }
        @media only screen and (max-width: 600px){
          b, p, h2{
            margin: 12px;
          }
          h1{
            margin-top:5x;
          }

        }
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <worbli-title title="Unsubscribe"></worbli-title>
      <div class="split">
        <div class="main">
          <template is="dom-if" if="{{complete}}">
            <b>You have unsubscibed from the Demo Day promo for the Crypto-Fiat Gateway<b/><br/><br/>
          </template>
          <template is="dom-if" if="{{error}}">
            <b>[[error]]<b/><br/><br/>
          </template>
       </div>
        <div class="side">
          <worbli-partners></worbli-partners>
          <worbli-telegram></worbli-telegram>
        </div>
      </div>
      <worbli-footer name="footer"></worbli-footer>
    `;
  }

  static get properties() {
    return {
      route: {
        type: Object,
        observer: '_routeChanged',
      },
      complete: {
        type: Boolean,
        value: false,
      },
    };
  }

  _routeChanged() {
    this.error = '';
    const token = this.route.__queryParams.token;
    const url = `https://portal-api.worbli.io/api/v3/unsubscribe/${token}`;
    fetch(url, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          if (response && response.data === true) {
            this.complete = true;
          } else if (response && response.data === false && response.error) {
            this.error = response.error.replace(/['"]+/g, '');
            this.complete = false;
          } 
        })
        .catch((error) => {
          resolve(false);
        });
  }
} window.customElements.define('unsubscribe-route', UnsubscribeRoute);
