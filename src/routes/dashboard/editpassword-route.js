import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';
import '../../components/worbli-footer.js';
import '../../components/side-bar/worbli-snapshot.js';
import '../../components/side-bar/worbli-dashnav.js';
import '@polymer/app-route/app-location.js';
import '../../worbli-env.js';
import '../../components/worbli-logger.js';

class EditPasswordRoute extends PolymerElement {
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
        .error{
          color: #E54D53;
        }
        @media only screen and (max-width: 600px){
          .section-name {
            display: none;
          }
          .split{
            margin-top:40px;
          }
          .side {
            width: 100vw;
            padding-right: 0;
          }
        }
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <worbli-env api-path="{{apiPath}}""></worbli-env>
      <worbli-logger id="logger"></worbli-logger>
      <div class="split">
        <div class="side">
          <worbli-dashnav></worbli-dashnav>
        </div>
        <div class="main">
          <h1>Set Password</h1>
          <div class="input-area">
            <div class="section-name">Passwords</div>
            <div class="form-inputs">
              <label>Password</label>
              <input id="password" value="{{password::input}}" name="password" type="password" class="text">
              <small class="comment error">[[passwordError]]</small>
              <label>Confirm Password</label>
              <input id="passwordTwo" value="{{passwordTwo::input}}" ame="passwordTwo" type="password" class="text">
              <small class="comment error">[[passwordTwoError]]</small>
            </div>
          </div>
          <div class="footer">
            <button type="button" on-click="_savePassword">Set Password & Login</button>
          </div>
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
      readonly: {
        type: Text,
      },
      apiPath: {
        type: Text,
      },
      apiEnd: {
        type: Text,
      },
    };
  }

_savePassword(){
  this.passwordError = ""
  this.passwordTwoError = ""
  const password = this.password;
  const passwordTwo = this.passwordTwo;
  if (password != passwordTwo){
      this.passwordTwoError = "Passwords are not the same"
  } else if (this._validatePassword()){
      this._save({password});
  } else {
      this.passwordTwoError = "Password must be at least 8 characters long and must include uppercase and lowercase letters and a digit or a special character"
  }
}

_validatePassword(){
  const password = this.password;
  var re = /^(?=.*[a-z])(?=.*\d|.*[!@#\$%\^&\*])(?=.*[A-Z])(?:.{8,})$/;
  return re.test(password);
}

_save(data){
  if (this.route && this.route.__queryParams && this.route.__queryParams.token) {
    this.apiEnd = 'password';
  } else {
    this.apiEnd = 'updatePassword';
  }
  const token = localStorage.getItem("token");
  const url = `${this.apiPath}/user/${this.apiEnd}/`;
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data), 
    headers:{'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
  })
  .then((response) => {return response.json()})
  .then((response) => {
     if(response.data){
        localStorage.removeItem("token");
        this.set('route.path', '/')
        this.dispatchEvent(new CustomEvent('overlay',{bubbles: true, composed: true, detail: {action: 'signin'}}));
     } else {
        this.passwordTwoError = "Click the email link again"
     }
  })
  .catch(error => console.error('Error:', error));
}

} window.customElements.define('editpassword-route', EditPasswordRoute);
