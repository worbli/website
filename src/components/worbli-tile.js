import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
class WorbliTile extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
        h4 {
          font-size: 13px;
          font-weight: 600;
          line-height: 16px;
          margin-bottom: 6px;
        }
        .footer{
          border-top: 1px solid #f5f5f5;
          padding: 12px;
        }
        .square {
          min-width: 420px;
          margin-right: 19px;
          margin-bottom: 19px;
        }
        .no-right {
          margin-right: 0px;
        }
        .box-link {
          text-decoration: none;
          color: #393E46;
        } 
        .next {
          width: 20px;
          position: absolute;
          right: 23px;
          bottom: 21px;
          opacity: 0.5;
        }
        .pic {
          height: 333px;
          background-position: center; 
          background-repeat: no-repeat;
          background-size: cover;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }
        .description {
          font-size: 13px;
          font-weight: 200;
          line-height: 18px;
        }
        @media only screen and (max-width: 600px){
          .square {
            width: 100vw;
            margin-right: 0px;
          }
          .container {
            border-radius:0px;
          }
          .pic {
            height: 218px;
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;
          }
        }
        </style>
        <a href="[[link]]" class="box-link" name="WORBLI Developer Resources">
          <div class="container square no-right">
            <div class="pic" style="background-image: url('[[image]]')"></div>
            <div class="footer">
              <h4>[[title]]</h4>
              <div class="description">[[subtitle]]</div>
              <img src="./images/next.svg" class="next" alt="select button"> 
            </div>
          </div>
        </a>
    `;
  }
  static get properties() {
    return {
      title: {
        type: Text,
      },
      subtitle: {
        type: Text,
      },
      image: {
        type: Text,
      },
      link: {
        type: Text,
      }
    };
  }

} window.customElements.define('worbli-tile', WorbliTile);
