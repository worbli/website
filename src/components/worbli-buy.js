import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
class WorbliBuy extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
            display: block;
            max-width: 860px;
        }
        .outer-container {
            background-image: url("./images/buy-background.png");
            background-position: center; 
            background-repeat: no-repeat;
            background-size: cover;
            height: 170px;
            border-radius: 4px;
            margin-bottom: 17px;
            color: white;
            font-size: 20px;
            display: block;
        }
        .btn-container {
            display: flex;
            margin-top: 17px;
            margin-left: 17px;
        }
        .btn-container p {
            margin: 12px;
            font-size: 14px;
        }
        .yellow-button {
            background-color: #FFDB6A;
            border-radius: 3px;
            width: 110px;
            height: 25px;
            color: #0E0137;
            font-size: 13px;
            font-weight: 600;
            text-align: center;
            padding-top: 6px;
            margin-right: 12px;
        }
        .yellow-button:hover {
            background-color: #E9BF2D;
            color: #000000;
        }
        .h1-text {
            padding-top: 70px;
            margin-left: 17px;
            display: block;
        }
        a {
            text-decoration: none;
        }
        </style>
        <div class="outer-container">
            <div class="h1-text">Where can I buy <strong>WORBLI</strong> tokens?</div>
            <div class="btn-container">
                <a href="https://hoo.com/" target="_blank"><div class="yellow-button">HOO</div></a>
                <a href="https://www.chainrift.com/?R=UEQAo" target="_blank"><div class="yellow-button">CHAINRIFT</div></a>
            </div>
        </div>
    `;
  }
  static get properties() {
    return {
      join: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
      },
    };
  }

} window.customElements.define('worbli-buy', WorbliBuy);
