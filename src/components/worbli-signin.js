import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '@polymer/app-route/app-location.js';
import '../worbli-env.js';

class WorbliSignin extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        h2 {
          font-size: 22px;
          line-height: 26px;
          margin-bottom:12px;
          margin-top:0px;
          color: var(--blue-text);
          font-weight: 600;
          margin-bottom: 12px;
        }
        p {
          margin: 24px 0 24px 0;
        }
        input.text {
          padding: 8px;
          background: #F0F1F3;
          display: block;
          width: 100%;
          box-shadow: inset 0 1px 1px rgba(0,0,0,.02);
          border: 1px solid;
          border-color: #C9CCD0 #CFD2D6 #CFD2D6;
          border-radius: 3px;
          box-sizing: border-box;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          font-size: 14px;
          height: auto;
          margin-bottom:10px;
        }
        input:focus, select:focus, textarea:focus, button:focus {
          outline: none;
        }
        input.text:focus {
          background: #fff;
          border: 1px solid #AFD7B3 !important;
          box-shadow: 0 0 0 2px rgba(133,176,212,0.4);
        }
        input.text.error {
          color: #db6265;
          border-color: #d2928c;
          box-shadow: 0 0 0 2px #f0d1ce;
        }
        button {
          vertical-align: middle;
          outline: none;
          opacity: var(--btnOpacity, 0.3);
          cursor: var(--btnCursor, not-allowed);
        }
        label{
          font-size: 11px;
        }
        .center {
          padding: 20px 0 0;
          text-align: center;
          color: #8d919a;
          font-size: 12px;
          line-height: 20px;
        }
        .center span {
          color: #4079B0;
          cursor: pointer;
          font-weight: 600;
        }
        .error{
          color: #E54D53;
          margin-bottom:6px;
          cursor: pointer;
        }
        .comment {
          display: block;
          line-height: 18px;
          color: #9da1ab;
          padding: 9px 0 0;
          margin: 0 0 16px 0;
          font-size: 12px;
          color: #E54D53;
        }
      </style>
    <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
    <worbli-env api-path="{{apiPath}}""></worbli-env>

    <template is="dom-if" if="{{!forgotPassword}}">
      <h2>Sign In</h2>
      <p>Welcome back to WORBLI!</p>
      <input type="text" class="text" name="email" placeholder="Email" id="email" value="{{email::input}}" on-keyup="_confirmEmail">
      <input type="password" class="text" name="password" placeholder="Password" id="password" value="{{password::input}}" on-keydown="_checkEnter">
      <small class="comment error" on-click="_toggle">[[error]]</small>
      <button class="btn-critical" on-click="_login">Sign In</button>
    </template>
    <template is="dom-if" if="{{forgotPassword}}">
      <h2>Forgot Password?</h2>
      <p>Enter your email address</p>
      <input type="text" class="text" name="email" placeholder="Email" id="email" value="{{email::input}}" on-keyup="_confirmEmail">
      <small class="comment error">[[error]]</small>
      <button class="btn-critical" on-click="_reset">Send Email</button>
    </template>
    <div class="center">New to Worbli? <span on-click="_join">Join WORBLI</span></div>
    `;
  }
  static get properties() {
    return {
      join: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
      },
      emailConfirmed: {
        type: Boolean,
        value: false,
      },
      passwordConfirmed: {
        type: Boolean,
        value: false,
      },
      forgotPassword: {
        type: Boolean,
        value: false,
      },
      apiPath: {
        type: Text,
      },
    };
  }

  ready() {
    super.ready();
    this.set('route.path', `/`);
  }
  
_join(){
    this.join = true;
}

_toggle(){
  this.error = "";
  this.forgotPassword = true;
}
_reset(){
  this.error = "";
  const data = {
    email: this.email,
  }
  const url = `${this.apiPath}/visitor/reset/`;
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data), 
    headers:{'Content-Type': 'application/json'}
  })
  .then(response => {
      return response.json();
  })
  .then(response => {
    this.forgotPassword = false;
    this.dispatchEvent(new CustomEvent('hideOverlay',{bubbles: true, composed: true, detail: {action: 'hide'}}));
  })
  .catch(error => {
    this.error = "Please, try again";
  });
}

_login(){
  this.error = "";
  const data = {
      email: this.email,
      password: this.password,
  }
  const url = `${this.apiPath}/user/login/`;
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data), 
    headers:{'Content-Type': 'application/json'}
  })
  .then(response => {return response.json()})
  .then(response => {
    if (response.data === true){
      this.email = "";
      this.password = "";
      localStorage.setItem("token", response.token);
      const onfido_status = response.onfido_status;
      if (onfido_status === 'default'){this.set('route.path', '/dashboard/profile')}
      if (onfido_status === 'started'){this.set('route.path', '/dashboard/review')}
      if (onfido_status === 'review'){this.set('route.path', '/dashboard/status')}
      if (onfido_status === 'rejected'){this.set('route.path', '/dashboard/status')}
      if (onfido_status === 'approved'){this.set('route.path', '/dashboard/account')}
      if (onfido_status === 'named'){this.set('route.path', '/dashboard/account')}
      if (onfido_status === 'credited'){this.set('route.path', '/dashboard/account')}
      this.dispatchEvent(new CustomEvent('hideOverlay',{bubbles: true, composed: true, detail: {action: 'hide'}}));
    } else {
      this.error = "Forgot password? Click here to reset your password.";
    }
  })
  .catch(error => {
    this.error = "Forgot password? Click here to reset your password.";
  });
}

_confirmEmail(){
  this.emailConfirmed = this._validateEmail(this.email);
  this._buttonActive();
}
_buttonActive(){
  if (this.emailConfirmed){
    this.updateStyles({'--btnOpacity': 1});
    this.updateStyles({'--btnCursor': 'pointer'});
  } else {
    this.updateStyles({'--btnOpacity': 0.3});
    this.updateStyles({'--btnCursor': 'not-allowed)'});
  }
}

_validateEmail(email){
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}


_checkEnter() {
    document.addEventListener('keypress', (event) => {
        const keyCode = event.charCode;
        if (keyCode === 13) {
            this._login();
        }
    });
}

} window.customElements.define('worbli-signin', WorbliSignin);