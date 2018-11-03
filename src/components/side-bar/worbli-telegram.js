import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';

class WorbliTelegram extends PolymerElement {
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
          padding-bottom: 20px;
        }
        .image {
          width: 90px;
          margin: -10px 83px -30px 83px;
          height: 90px;
        }

      </style>
        <div class="container">
            <div class="title">Telegram</div>
            <img class="image" src="./images/telegram.svg" alt="Telegram">
            <p class="faq-text">Chat live with the WORBLI team</p>
            <a href="https://t.me/worblicommunity" class="button">
           
              <div class="open-text">Open Telegram</div>
            </a>
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

} window.customElements.define('worbli-telegram', WorbliTelegram);