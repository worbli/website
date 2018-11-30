import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-location.js';
import '../../css/shared-styles.js';
import '../../components/worbli-footer.js';
import '../../components/side-bar/worbli-snapshot.js';
import '../../components/side-bar/worbli-dashnav.js';
import '../../worbli-env.js';

class AccountRoute extends PolymerElement {
  static get template() {
    return html`
          <style include="shared-styles">
        :host {
          display: block;
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
          max-width: 850px;
          flex-grow: 1;
          background: #FFF;
          border-radius: 3px;
          box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -webkit-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -moz-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
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
        .error{
          color: #E54D53;
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
        .lower {
          text-transform: lowercase;
        }
        .info {
          margin: 12px;
        }
        a {
          color: #6681B5;
          text-decoration: none;
        }

      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <worbli-env api-path="{{apiPath}}""></worbli-env>
      <div class="split">
        <div class="side">
          <worbli-dashnav></worbli-dashnav>
        </div>
        <div class="main">
          <h1>Worbli Account</h1>
          <template is="dom-if" if="{{viewApproved}}">
            <template is="dom-if" if="{{!complete}}">
              <div class="input-area">
                <div class="section-name">Name</div>
                <div class="form-inputs">
                  <label>Worbli Account Name </label>
                  <input id="worbliAccountName" value="{{worbliAccountName::input}}" name="worbliAccountName" type="text" class="lower">
                  <small class="comment">Choose your desired Worbli account name (6-12 characters, must start with a letter and can only contain letters and numbers 1-5). Note: high profile trademarked names such as "google", "facebook", etc. are not allowed and accounts that have chosen such names will be frozen.</small></br>
                  <small class="comment error">[[worbliAccountNameError]]</small>
                </div>
              </div>
              <hr>
              <div class="input-area">
                <div class="section-name">Keys</div>
                <div class="form-inputs">
                  <label>Active Public Key</label>
                  <small class="comment">You can put your shareable/active keys in both fields.</small></br>
                  <input id="publicKeyActive" value="{{publicKeyActive::input}}" name="publicKeyActive" type="text" class="text">
                  <small class="comment error">[[publicKeyActiveError]]</small>
                  <label>Owner Public Key</label>
                  <input id="publicKeyOwner" value="{{publicKeyOwner::input}}" name="publicKeyOwner" type="text" class="text">
                  <small class="comment error">[[publicKeyOwnerError]]</small>
                  <p>
                  </br></br>
                  <a href="https://worbli.zendesk.com/hc/en-us/articles/360019917571-How-can-I-generate-my-Owner-or-Active-key-using-Scatter-" target="_blank">How can I generate my Owner or Active key using Scatter?</a></br>
                  </p>
                </div>
              </div>
            </template>
            <template is="dom-if" if="{{complete}}">
              <p class="intro">Your account has been successfully created!</p>
            </template>
            <template is="dom-if" if="{{!complete}}">
              <div class="footer">
                <button type="button" on-click="_applyAccount">Apply for Account</button>
              </div>
            </template>
          </template>
          <template is="dom-if" if="{{viewNamed}}">
            <p class="info">
              Your WORBLI blockchain account has been created. Account name <b>[[worbliAccountName]]</b></br></br>
              Check it out at <a href="https://worbli.bloks.io/account/[[worbliAccountName]]" target="_blank">worbli.bloks.io</a></br></br>
              If you had an EOS account on September 7th, you can <a href="/dashboard/sharedrop">Claim your Sharedrop</a>
            </p>
          </template>
          <template is="dom-if" if="{{viewCredited}}">
            <p class="info">
              Your WORBLI blockchain account has been created. Account name <b>[[worbliAccountName]]</b></br></br>
              Check it out at <a href="https://worbli.bloks.io/account/[[worbliAccountName]]" target="_blank">worbli.bloks.io</a></br></br>
              Congratulations you have successfully claimed your sharedrop!
            </p>
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
      route: {
        type: Boolean,
        observer: '_routeChanged'
      },
      viewApproved: {
        type: Boolean,
        value: true,
      },
      viewNamed: {
        type: Boolean,
        value: false,
      },
      viewCredited: {
        type: Boolean,
        value: false,
      },
      worbliAccountName: {
        type: Text,
      }
    };
  }

  _routeChanged(){
    const loc = localStorage.getItem("loc");
    if(loc =='approved'){
      this.viewApproved = true;
      this.viewNamed = false;
      this.viewCredited = false;
    }
    if(loc =='named'){
      this.viewApproved = false;
      this.viewNamed = true;
      this.viewCredited = false;
    }
    if(loc =='credited'){
      this.viewApproved = false;
      this.viewNamed = false;
      this.viewCredited = true;
    }
    this._getName();
  }

_applyAccount(data){
  let check = true;
  this.publicKeyActiveError = "";
  this.publicKeyOwnerError = "";
  this.worbliAccountNameError = "";
  const worbli_account_name = this.worbliAccountName;
  const public_key_active = this.publicKeyActive;
  const public_key_owner = this.publicKeyOwner;
  const nameConfirmed = this._validateAccountName(worbli_account_name);
  const activeConfirmed = this._validatePublicKey(public_key_active);
  const ownerConfirmed = this._validatePublicKey(public_key_owner);
  if(!activeConfirmed){this.publicKeyActiveError = "Wrong public key format. Make sure you are not pasting your private key."; check = false}
  if(!ownerConfirmed){this.publicKeyOwnerError = "Wrong public key format. Make sure you are not pasting your private key."; check = false}
  if(!nameConfirmed){this.worbliAccountNameError = "Account name must be between 6 and 12 characters, must start with a letter and can contain only lowercase letters and numbers 1-5. And must not contain the word worbli"; check = false;} 
  if(check === true){
    const data = {worbli_account_name, public_key_active, public_key_owner}
    const token = localStorage.getItem("token");
    const url = `${this.apiPath}/user/account/`;
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data), 
      headers:{'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
    })
    .then((response) => {return response.json()})
    .then((response) => {
      if(response.data === false){
        this.worbliAccountNameError = response.error
      } else {
        this.complete = true;
        localStorage.setItem("token", response.newjwt);
        this.set('route.path', '/dashboard/sharedrop');
      }
    })
    .catch(error => {
      console.log("response");
      this.worbliAccountNameError = "Account name is already taken"
    });
  }
}

_getName(){
  const token = localStorage.getItem("token");
  const url = `${this.apiPath}/user/name/`;
  fetch(url, {
    method: 'GET',
    headers:{'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
  })
  .then((response) => {return response.json()})
  .then((response) => {
    this.worbliAccountName = response.worbli_account_name;
    const loc = localStorage.getItem("loc");
    if(loc =='approved'){
      this.viewApproved = true;
      this.viewNamed = false;
      this.viewCredited = false;
    }
    if(loc =='named'){
      this.viewApproved = false;
      this.viewNamed = true;
      this.viewCredited = false;
    }
    if(loc =='credited'){
      this.viewApproved = false;
      this.viewNamed = false;
      this.viewCredited = true;
    }
  })
}

_validateAccountName(name){
  console.log(name)
  var re = /^(?!.*?worbli)[a-z][a-z1-5]{5,11}$/;
  console.log(re.test(name))
  return re.test(name);
}

_validatePublicKey(key){
  var re = /^EOS[A-Za-z0-9]{50}$/;
  return re.test(key);
}

} window.customElements.define('account-route', AccountRoute);
