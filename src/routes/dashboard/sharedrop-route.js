import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';
import '../../components/worbli-footer.js';
import '../../components/side-bar/worbli-snapshot.js';
import '@polymer/app-route/app-location.js';
import '../../worbli-env.js';
import '../../components/side-bar/worbli-dashnav.js';

class SharedropRoute extends PolymerElement {
  static get template() {
    return html`
          <style include="shared-styles">
        :host {
          display: block;
        }
        iframe {
          margin-top: 50px;
          margin-bottom: 50px;
        }
        .split {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .side {
          width: 280px;
          padding-right: 30px;
        }
        .main {
          flex-grow: 1;
          max-width: 830px;
          background: #FFF;
          border-radius: 3px;
          box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -webkit-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -moz-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
        }
        .container {
          position: relative;
          background: #FFF;
          border-radius: 3px;
          box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -webkit-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -moz-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          margin-bottom: 18px;
            }
        .navigation {
          color: #3a3e46;
          font-size: 11px;
          font-weight: 600;
          line-height: 16px;
          padding: 13px 12px;
          border-bottom: 1px solid #f5f5f5;
          background: none;
          text-shadow: none;
        }
        .navigation:hover {
          background-color: #F6F6F7;
        }
        .selected {
          color: black;
          background-color: #F6F6F7;
        }
        .footer {
          margin-top: 24px;
          display: block;
          height: 63px;
          border-top: 1px solid #f5f5f5;
          text-align: right;
        }
        h1 {
          color: var(--blue-text);
          font-weight: 600;
          margin-bottom: 12px;
          font-size: 13px;
          border-bottom: 1px solid #f5f5f5;
          padding: 12px;
        }
        h2 {
          color: var(--blue-text);
          font-size: 21px;
          font-weight: 600;
          margin-top: 12px;
          margin-bottom: 12px;
        }
        .container a {
          text-decoration: none;
        }
        button {
          display: inline-block;
          vertical-align: middle;
          background: #4f7eb8;
          border: 1px solid #4b77ad;
          border-radius: 3px;
          box-shadow: none;
          text-shadow: none;
          color: #fff;
          font-weight: bold;
          font-size: 12px;
          padding: 0 13px;
          line-height: 29px;
          text-align: center;
          margin: 16px;
          cursor: pointer;
        }
        .input-area {
          display: flex;
        }
        .section-name {
          display: inline-block;
          min-width: 200px;
          padding: 12px;
          font-size: 15px;
          color: #6f727d;
          font-weight: normal;
        }
        .form-inputs {
          display: inline-block;
          padding: 12px;
        }
        label {
          display: block;
          font-size: 12px;
          color: #393d4d;
          font-weight: 600;
          padding: 17px 0 7px;
          width: 340px;
        }
        input {
          width: 307px;
          background: #f8f8f8;
          border: 1px solid #d1d5d7;
          border-radius: 2px;
          margin: 0;
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
        .comment {
          display: block;
          line-height: 18px;
          color: #9da1ab;
          padding: 9px 0 0;
          margin: 0 0 -2px 0;
          font-size: 12px;
        }
        hr {
          margin-top: 24px;
          display: block;
          border-top: 1px solid #f5f5f5;
        }
        .dropdown {
          background-color: #f8f8f8;
          border-color: #d1d5d7;
          -webkit-appearance: none;
          appearance: none;
          -moz-appearance: none;
          -moz-appearance: none;
          line-height: 15px;
          padding: 5px 5px 5px 7px;
          -webkit-padding-end: 20px;
          height: 31px;
          font-size: 13px;
          border: 1px solid #D9DBDE;
          border-radius: 3px;
          background: url(./images/dropdown.gif) no-repeat;
          background-size: 18px 22px;
          background-position: 100% 50%;
          width: 320px;
        }
        .error{
          color: #E54D53;
        }
        .notReady{
          cursor: not-allowed;
          opacity: 0.3;
        }
        .steps{

          margin-left: 40px;
        }
        .step-text {
          margin-left: 17px;
          color: #D8D8D8;
          font-weight:600;
        }
        .step-text div {
          text-align: center;
          display:inline-block;
          width:78px;
        }
        .step{
          color:#272727;
        }
        .sidebar{
          padding-bottom: 12px;
          background: #FFF;
          border-radius: 3px;
          box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -webkit-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -moz-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
        }
        .dropdown-short{
          width:100px;
        }
        .intro{
          padding: 12px;
        }
        .button {
          display: block;
          box-shadow: inset 0 0 0 1px #c8d6e8;
          padding: 6px;
          border-radius: 3px;
          text-align: center;
          padding-top: 12px;
          height: 25px;
          margin: 0 12px 0 12px;
          text-decoration: none;
          color: #4978b3;
          font-size: 12px;
          font-weight: 600;
          width: 290px;
        }
        .text{
          text-transform: capitalize;
        }
        .upper {
          text-transform: uppercase;
        }

      </style>
      
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <worbli-env api-path="{{apiPath}}""></worbli-env>
      <div class="split">
        <div class="side">
          <worbli-dashnav></worbli-dashnav>
        </div>

        <div class="main">
          <h1>Claim Sharedrop</h1>
          <p class="intro">
          1. You are going to be using Scatter in order to claim your sharedrop. Make sure you have the Scatter Desktop application open.</br>
          2. Click on the "Attach Scatter to EOS" button.</br>
          3. A pop-up window may appear, choose “Login” and then choose your EOS identity.</br>
          4. Click on the “Claim Sharedrop” button.</br>
          5. A pop-up window will appear, click on the tick to sign the transaction on the EOS network.</br></br>
          </p>
     
        <template is="dom-if" if="{{!scatterConnected}}">
          <button type="button" on-click="_startVerificatoin">Attach Scatter to EOS</button>
        </template>
        
        <template is="dom-if" if="{{scatterConnected}}">
          <button type="button" on-click="_signScatter">Claim Sharedrop</button>
        </template>

        </div>
      </div>
      </br></br>
      <worbli-footer name="footer"></worbli-footer>
    `;
  }

  static get properties() {
    return {
      complete: {
        type: Boolean,
        value: false,
      },
      started: {
        type: Boolean,
        value: false,
      },
      readonly: {
        type: Text,
      },
      apiPath: {
        type: Text,
      },
      kycToken2: {
        type: Text,
      },
      showIframe: {
        type: Boolean,
        value: false,
      },
      scatterConnected: {
        type: Boolean,
        value: false, 
      },
      eos: {
        type: Object,
      },
      scatter: {
        type: Object,
      },
      securityCode: {
        type: Text,
      },
    };
  }

  _startVerificatoin(){
    const token = localStorage.getItem("token");
    const url = `${this.apiPath}/user/sharedrop/`;
    fetch(url, {
      method: 'GET',
      headers:{'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
    })
    .then((response) => {return response.json()})
    .then((response) => {
      if(response && response.data === true && response.security_code){
        this.securityCode = response.security_code;
        this.started = true;
        this._connectScatter();
      }
    })
  }

  _connectScatter(){
    let scatter, eos;
    const network = {
      blockchain:'eos',
      protocol:'https',
      host:'nodes.get-scatter.com',
      port:443,
      chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
    }
    const options = {expireInSeconds:60};
    const reqFields = {accounts:[network]};
    ScatterJS.plugins(new ScatterEOS());
    ScatterJS.scatter.connect("worbli")
    .then(connected => {
        if (!connected) return false;
        scatter = ScatterJS.scatter;
        scatter.getIdentity(reqFields)
        .then(() => {
          eos = scatter.eos(network, Eos, options) 
          this.scatterConnected = true;
          this.eos = eos;
          this.scatter = scatter; 
        })
        .catch((error) => {
          alert('Scatter not found, Open it and try again');
        });
    })
    .catch(error => console.log(error));

  }

  _signScatter(){
      const account = this.scatter.identity.accounts.find(x => x.blockchain === 'eos');
      const options = { authorization:[`${account.name}@${account.authority}`]};
      const contractAccount = 'worbliworbli';
      const functionName = 'reg';
      const owner = account.name;
      const securitycode = this.securityCode;
      const args = {owner, securitycode}
      this.eos.transaction([contractAccount], sendTx => {
          sendTx[contractAccount][functionName](args, options)
      })
      .then(trx => console.log('trx', trx))
      .catch(err => console.error(err));
  }

} window.customElements.define('sharedrop-route', SharedropRoute);
