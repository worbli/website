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
          margin: 0 auto;
          display: block;
          padding-bottom: 12px;
          width: 255px;
        }
        .image-two {
          margin: 0 auto;
          display: block;
          padding-bottom: 12px;
          width: 255px;
        }
        .container-paper{
          display:block;
          background-color: white;
          border-radius: 3px;
          box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -webkit-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -moz-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          padding-bottom: 1px;
          margin-bottom: 12px
        }
        .button{
          margin-bottom: 12px;
        }
        .top {
          margin-top: 12px;
        }

      </style>
        <div class="container-paper">
            <div class="title">Social</div>
            <a href="https://t.me/worblicommunity" target="_blank">
              <img class="image top" src="./images/telegramlink.png" alt="Telegram">
            </a>
            <a href="https://medium.com/@WORBLI" target="_blank">
              <img class="image-two" src="./images/mediumlink.png" alt="Medium">
            </a>
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