import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {jsonrpc_connect} from '../libraries/eosjs-jsonrpc.js';
import '../css/shared-styles.js';

class WorbliProfile extends PolymerElement {
  static get template() {
    return html``;
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