import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';

class WorbliFooter extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        div {
            flex-grow: 1;
            color: var(--grey-text);
            font-size: 12px;
        }
        .container{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 40px 0 170px 0;
            border-top: 1px solid var(--grey-keyline);
            margin-top: 40px;
        }
      </style>
      <div class="container">
        <div>&copy; 2018 Worbli Pty Ltd. All rights reserved.</div>
        <div>hello@worbli.io</div>
        <div>5865 Neal Ave N Ste 175</br> Stillwater, MN 55082</div>
        <div>Social Links</div>
      </div>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'worbli-footer',
      },
    };
  }
}

window.customElements.define('worbli-footer', WorbliFooter);