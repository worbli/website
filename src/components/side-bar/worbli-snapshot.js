import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';

class WorbliSnapshot extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        div {
            flex-grow: 1;
            color: var(--grey-text);
            font-size: 12px;
        }
        .bp {
          width: 60px;
          height: 60px;
          padding: 16px;
        }
        .bps{
          display: flex;
          flex-wrap: wrap
        }
        label {
          display: block;
          font-size: 12px;
          color: #393d4d;
          font-weight: 600;
          padding: 17px 0 7px;
          width: 340px;
          margin-left: 16px;
        }
        input {
          margin-left: 12px;
          width: calc(100% - 42px);
          background: #f8f8f8;
          border: 1px solid #d1d5d7;
          border-radius: 2px;
          padding: 5px 7px;
          line-height: 19px;
          border: 1px solid #D9DBDE;
          border-radius: 3px;
          font-size: 13px;
          color: #393D4D;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.02), 0 1px 0 rgba(255, 255, 255, 0.075);
          -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.02), 0 1px 0 rgba(255, 255, 255, 0.075);
          -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.02),0 1px 0 rgba(255, 255, 255, 0.075);
        }
        .btn-critical{
          margin: 12px;
          width: calc(100% - 24px);
          margin-bottom: 7px;
          display: block;
          font-size: 12px;
          cursor: pointer;
        }
        .container{
          display: block;
          padding-bottom: 9px;
        } 
        h1{
          font-weight: 800;
          color: var(--blue-text)
        }

      </style>



        <div class="container">
            <div class="title">Check Snapshot</div>
            <template is="dom-if" if="{{!complete}}">
              <label>Mainnet Account Name:</label>
              <input id="accountName" value="{{accountName::input}}" name="first-name" type="text" class="text">
              <button type="button" class="btn-critical" on-click="_checkSnapshot">Check Snapshot</button>
            </template>
            <template is="dom-if" if="{{complete}}">
              <h1>[[wbitotal]]</h1>
            </template>
        </div>
        
    `;
  }
  static get properties() {
    return {
      accountName: {
        type: String,
      },
      wbitotal: {
        type: String,
        value: 0.00,
      },
      complete: {
        type: Boolean,
        value: false,
      },
    };
  }

  _checkSnapshot(){
    this.complete = true;
    if (this.accountName){
      fetch(`https://api.dac.city/api/v1/snap-shot/${this.accountName}`)
      .then((response) => {
          return response.json()
      })
      .then((response) => {
          if(response.total){
            this.wbitotal = response.total * 0.8
          } else {
            this.complete = false;
          }
      })
    }
  }
} window.customElements.define('worbli-snapshot', WorbliSnapshot);