import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';

class WorbliWhitepaper extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        div {
            flex-grow: 1;
            color: var(--grey-text);
            font-size: 12px;
        }
        .container{
            position: relative;
          background: #FFF;
          border-radius: 3px;
          box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -webkit-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -moz-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          margin-bottom: 18px;
          cursor: pointer;
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
        .faq-text {
          font-size: 13px;
          font-weight: 200;
          line-height: 16px;
          padding: 12px;
        }
        .button{
          display: block;
          box-shadow: inset 0 0 0 1px #c8d6e8;
          padding: 6px;
          max-width: 210px;
          border-radius: 3px;
          text-align: center;
          padding-top:12px;
          height: 25px;
          margin-left: 25px;
          text-decoration: none;
          color: #4978b3;
          font-size: 12px;
          font-weight: 600;
          width: 100%;
        }
        .bottom-space {
          padding-bottom: 20px;
        }
        .white-paper {
          margin-left: 25px;
          margin-top: 30px;
          margin-bottom: 12px;
        }
        .bottom a:hover {
          display: block;
          color: var(--green-text);
          text-decoration: underline;
        }
        .bottom {
          color: var(--blue-text);
          display: block;
          padding-top: 20px;
          padding-bottom: 20px;
          font-size: 11px;
          margin-left: 25px;
          text-decoration: none;
          font-style: italic;
        }
      </style>
        <div class="container">
            <div class="title">White Paper</div>
            <img src="./images/white-paper.png" alt="white paper" class="white-paper">
            <a href="https://drive.google.com/a/worbli.io/uc?authuser=1&id=1YTFLUf1h_XsjTHCDdiClBYS74STt_n5J&export=download" class="button">Download Short Paper</a>
            <a href="https://drive.google.com/a/worbli.io/uc?authuser=1&id=1a0Ec-2glbFXTgvr-7PnAdye0aPcHhmGd&export=download" class="bottom">Or download our full White Paper</a>
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