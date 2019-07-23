import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
class WorbliDemo extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
            display: block;
            max-width: 860px;
        }
        .outer-container {
            background-image: url("./images/demo-background.png");
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
            background-color: #0047D7;
            border-radius: 3px;
            width: 110px;
            height: 25px;
            color: #FFF;
            font-size: 13px;
            font-weight: 600;
            text-align: center;
            padding-top: 6px;
            margin-right: 12px;
        }
        .yellow-button:hover {
            background-color: #0047D7;
            color: #FFF;
        }
        .h1-text {
            padding-top: 0px;
            margin-left: 17px;
            display: block;
            font-weight: 600;
            font-size: 15px;
        }
        a {
            text-decoration: none;
        }
        .titlebox {
            font-size: 30px;
            padding-top: 37px;
        }
        </style>
        <div class="outer-container">
            <div class="h1-text titlebox"><strong>Inter Blockchain</strong></div>
            <div class="h1-text">Demo-day Video Replay</div>
            <div class="btn-container">
                <a href="https://www.crowdcast.io/e/transledgerdemoday/1" target="_blank"><div class="yellow-button">Watch Now</div></a>
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

} window.customElements.define('worbli-demo', WorbliDemo);
