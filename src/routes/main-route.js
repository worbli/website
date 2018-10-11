import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';
import '../components/worbli-rpc.js';
import '../components/network-monitor/block-info.js';
import '../components/network-monitor/block-producers.js';


class MainRoute extends PolymerElement {
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
        .side {
          width: 280px;
        }
        .main {
          flex-grow: 1;
          padding-left: 30px;
        }
  
      </style>
      <worbli-rpc connect endpoint="http://18.191.86.34:8888" jsonrpc="{{jsonrpc}}"></worbli-rpc>
      <!-- <worbli-rpc connect endpoint="https://api.eosnewyork.io" jsonrpc="{{jsonrpc}}"></worbli-rpc> -->

      <div class="split">
        <block-info class="side" jsonrpc="[[jsonrpc]]" producer="{{producer}}" interval="500"></block-info>
        <block-producers class="main" jsonrpc="[[jsonrpc]]" producer="[[producer]]" interval="500"></block-producers>
      </div>
      <worbli-footer name="footer"></worbli-footer>
    `;
  }
} window.customElements.define('main-route', MainRoute);
