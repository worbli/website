import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';

class WorbliWhitepaper extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host{
          display:block;
        }
        div {
            /* flex-grow: 1; */
            color: var(--grey-text);
            font-size: 12px;
        }
        .bottom a:hover {
          display: block;
          color: var(--green-text);
          text-decoration: underline;
        }

        .button{
          margin-bottom: 12px;
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
        .white-paper{
          margin: 0 auto;
          display:block;
          padding-top:12px;
          padding-bottom:12px;
        }
        .bottom-text{
          margin:12px;
          margin: 12px;
          display: block;
          text-align: center;
          text-decoration: none;
          color: black;
        }
      </style>
        <div class="container-paper">
            <div class="title">Short Paper</div>
            <a href="https://drive.google.com/a/worbli.io/uc?authuser=1&id=1YTFLUf1h_XsjTHCDdiClBYS74STt_n5J&export=download">
            <img src="./images/white-paper.png" alt="white paper" class="white-paper">
      </a>
            <a href="https://drive.google.com/a/worbli.io/uc?authuser=1&id=1a0Ec-2glbFXTgvr-7PnAdye0aPcHhmGd&export=download" class="bottom-text">Or download our full White Paper</a>
          
            <a href="https://drive.google.com/a/worbli.io/uc?authuser=1&id=1YTFLUf1h_XsjTHCDdiClBYS74STt_n5J&export=download" class="button">Download Short Paper</a>
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

} window.customElements.define('worbli-whitepaper', WorbliWhitepaper);