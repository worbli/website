import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
class WorbliTitle extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
        div {
          margin: 18px 0 18px 0; 
        }
        h1 {
          color: var(--blue-title-text);
          font-size: 33px;
          font-weight: 500; 
        }
        p {
          color: var(--grey-subtitle-text);
          font-size: 14px;
        }
        @media only screen and (max-width: 600px){
          h1 {
            font-size: 20px;
            margin: 12px 12px 0 12px;
            line-height: 2;
          }
          p {
            margin: 0 11px 20px 12px;
            line-height: 1.5;
            font-size: 12px;
          }
        }
        </style>
        <div>
          <h1>[[title]]</h1>
          <p>[[subTitle]]</p>
        </div>
    `;
  }
  static get properties() {
    return {
      title: {
        type: Text,
      },
      subTitle: {
        type: Text,
      }
    };
  }

} window.customElements.define('worbli-title', WorbliTitle);
