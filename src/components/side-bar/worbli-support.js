import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';

class WorbliSupport extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        div {
          flex-grow: 1;
          color: var(--grey-text);
          font-size: 12px;
        }
        .faq-text {
          font-size: 13px;
          font-weight: 200;
          line-height: 16px;
          padding: 12px;
        }
        .bottom-space {
          padding-bottom: 12px;
        }
        .support-icon{
          padding-left: 20px;
        }

      </style>
        <div class="container">
          <div class="title">Support Center</div>
          <p class="faq-text">Find out the answers to all of your questions</p>
          <a href="https://worbli.zendesk.com" class="button">Take me there...</a>
          <p class="bottom-space"></p>
        </div>
    `;
  }
  static get properties() {
    return {
      init: {
        type: String,
        observer: '_doOnfido',
      },
    };
  }

} window.customElements.define('worbli-support', WorbliSupport);