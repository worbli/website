import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-location.js';
import '../../css/shared-styles.js';

class BlockEndpoints extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
        .container {
          position: relative;
          background: #FFF;
          border-radius: 3px;
          box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -webkit-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -moz-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          margin-bottom: 18px;
        }
        .title {
          color: #3a3e46;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          line-height: 16px;
          padding: 13px 12px;
          border-bottom: 1px solid #f5f5f5;
          background: none;
          text-shadow: none;
        }
        .block {
          color: #3a3e46;
          font-size: 28px;
          font-weight: 800;
          text-transform: uppercase;
          line-height: 40px;
          padding: 13px 12px;
          letter-spacing: 2px;
        }
        .small {
          color: #3a3e46;
          font-size: 12px;
          font-weight: 300;
          line-height: 16px;
          padding: 1px 12px 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .indent {
          margin: 12px 12px 24px 12px;
        }
        .link {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 220px;
          display: inline-block;
          color: #3a3e46;
          font-size: 14px;
          font-weight: 300;
          text-decoration: none;
        }
        .name {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
          color: #3a3e46;
          text-decoration: none;
        }
        .indent img {
          width: 16px;
          margin-bottom: 4px;
          margin-left: 6px;
        }
        .history {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
          color: #7b8496;
        }
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <div class="container">
        <div class="title">Endpoints</div>
        <template is='dom-repeat' items='[[data]]'>
        <div class="indent">
          <div class="name">[[item.name]]</div>
          <!-- <template is="dom-if" if="[[item.p2pEndpoint]]"><a href="[[item.p2pEndpoint]]">A</a></template> -->
          <template is="dom-if" if="[[item.apiEndpoint]]"><div class="link">[[item.apiEndpoint]] </div><img src='./images/copy-icon.png' id='[[item.apiEndpoint]]' on-click='_copyToClipboard'></template>
          <template is="dom-if" if="[[item.history]]"><div class="history">History Node</div></template>
        </div>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      route: {
          type: Object,
          observer: "_routeChanged"
      },
      data: {
        type: Array,
      },
    };
  }

  _fallbackCopyTextToClipboard() {
    const textArea = document.createElement('textarea');
    textArea.value = this.txt;
    document.body.appendChild(textArea);
    if (navigator.userAgent.match(/ipad|iphone/i)) {
      const range = document.createRange();
      range.selectNodeContents(textArea);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      textArea.setSelectionRange(0, 999999);
    } else {
      textArea.focus();
      textArea.select();
    }
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }

  _copyToClipboard(e) {
    const text = e.model.__data.item.apiEndpoint;
    if (!navigator.clipboard) {
      this._fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text);
  }

  _routeChanged() {
    if (this.route.path === '/network/') {
      this.data = [{
        "name": "EOS Rio",
        "p2pEndpoint": "",
        "apiEndpoint": "https://api.worbli.eosrio.io",
        "history": true
      }, {
        "name": "EOS Blocksmith",
        "p2pEndpoint": "peer.worbli-mainnet.eosblocksmith.io:9876",
        "apiEndpoint": "https://worbli-mainnet.eosblocksmith.io",
        "history": false
      }, {
        "name": "EOS Tribe",
        "p2pEndpoint": "api.worbli.eostribe.io:9876",
        "apiEndpoint": "http://api.worbli.eostribe.io ",
        "history": true
      }, {
        "name": "EOSphere",
        "p2pEndpoint": "peer1-worbli.eosphere.io:9876",
        "apiEndpoint": "https://worbli.eosphere.io",
        "history": true	
      }, {
        "name": "EOSphere",
        "p2pEndpoint": "peer2-worbli.eosphere.io:9876",
        "apiEndpoint": "https://worbli.eosphere.io",
        "history": true
      }, {
        "name": "EOS Cannon",
        "p2pEndpoint": "worbli.eoscannon.io:19999",
        "apiEndpoint": "https://worbli.eoscannon.io",
        "history": false
      }, {
        "name": "EOS Cafe Block",
        "p2pEndpoint": "p2p.worbli-mainnet.eoscalgary.io:5222",
        "apiEndpoint": "https://api.worbli-mainnet.eoscalgary.io",
        "history": true
      }, {
        "name": "GenerEOS",
        "p2pEndpoint": "p2p.worbli.genereos.io:9876",
        "apiEndpoint": "https://worbli.genereos.io/",
        "history": true
      }, {
        "name": "Worbli Sw/eden",
        "p2pEndpoint": "http://p2p.worblisweden.org",
        "apiEndpoint": "https://api.worblisweden.org",
        "history": true
      }, {
        "name": "Worbli",
        "p2pEndpoint": "p2p-endpoint-1.worbli.io:9876",
        "apiEndpoint": "https://endpoint-1.worbli.io",
        "history": false
      }, {
        "name": "EOS Nairobi",
        "p2pEndpoint": "http://worbli-mainnet.eosnairobi.io:9276",
        "apiEndpoint": "http://worbli-mainnet.eosnairobi.io:9298",
        "history": true
      }, {
        "name": "calEOS",
        "p2pEndpoint": "http://testnet.worbli.caleos.io:9878",
        "apiEndpoint": "https://worbli.caleos.io",
        "history": true
      }];
      console.log(this.data);
    };
  }
} window.customElements.define('block-endpoints', BlockEndpoints);