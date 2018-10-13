import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {jsonrpc_connect} from '../libraries/eosjs-jsonrpc.js';
import '../css/shared-styles.js';

class WorbliProfile extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">
    img {
        -moz-box-shadow: inset 0 0 10px #000000;
        -webkit-box-shadow: inset 0 0 10px #000000;
        box-shadow: inset 0 0 10px #000000;
        border-radius: 50%;
    }
    </style>
    <img src="./images/team-photos/[[name]].png" width="120px" height="120px" alt="[[name]]">
    `;
  }
  static get properties() {
    return {
        name: {
            type: Text,
        },
        title: {
            type: Text,
        },
        linkedin: {
            type: Text,
        },
    };
  }

} window.customElements.define('worbli-profile', WorbliProfile);