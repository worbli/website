import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';
import '../../components/worbli-footer.js';
import '../../components/side-bar/worbli-snapshot.js';
import '@polymer/app-route/app-location.js';
import '../../worbli-env.js';

class ProfileRoute extends PolymerElement {
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
        }
        .error{
          color: #E54D53;
        }
        .notReady{
          cursor: not-allowed;
          opacity: 0.3;
        }
      </style>
      
      <!-- Google Tag Manager (noscript) -->
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KGVQG5T"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <!-- End Google Tag Manager (noscript) -->

      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-117118714-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-117118714-1');
      </script>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <worbli-env api-path="{{apiPath}}""></worbli-env>
      <div class="split">
        <div class="side">
          <div class="container">
              <a href="/dashboard/profile"><div class="navigation selected">My Profile</div></a>
              <div class="navigation notReady">Identity Verification</div>
              <div class="navigation notReady">Claim Sharedrop</div>
              <div class="navigation notReady">News</div>
              <a href="/"><div class="navigation">Logout</div></a>
          </div>
        </div>
        <div class="main">
          <h1>My Profile</h1>
          <div class="input-area">
            <div class="section-name">Profile</div>
            <div class="form-inputs">
              <label>First Name </label>
              <input id="first-name" value="{{firstName::input}}" name="first-name" type="text" class="text" disabled="{{complete}}">
              <small class="comment">Your real first name, as found on your ID.</small>
              <small class="comment error">[[firstNameError]]</small>
              <label>Family Name </label>
              <input id="family-name" value="{{familyName::input}}" ame="family-name" type="text" class="text" disabled="{{complete}}">
              <small class="comment">Your real family name, as found on your ID.</small>
              <small class="comment error">[[familyNameError]]</small>
              <label>Country of Residence</label>
                <small class="comment error">[[countryResidenceError]]</small>
            </div>
          </div>

        <template is="dom-if" if="{{!complete}}">
          <hr>
          <div class="input-area">
            <div class="section-name">Password</div>
            <div class="form-inputs">
              <label>Password</label>
              <input id="passwordOne" value="{{passwordOne::input}}" name="password" type="password" class="text" disabled="{{complete}}">
              <label>Confirm Password</label>
              <input id="passwordTwo" value="{{passwordTwo::input}}" name="confirm-password" type="password" class="text" disabled="{{complete}}">
              <small class="comment error">[[emailError]]</small>
            </div>
          </div>
            <div class="footer">
              <button type="button" on-click="_saveProfile">Save Profile</button>
            </div>
        </template>
        </div>
      </div>
      
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
    };
  }

  ready() {
    super.ready();
    if(this.route && this.route.__queryParams && this.route.__queryParams.token) {
      const token = this.route.__queryParams.token;
      const url = `${this.apiPath}/user/auth`;
      console.log(token);
      console.log(url);
      fetch(url, {
        method: 'POST',
        headers: {'Authorization': `Bearer ${token}`},
        body: {'test':'1234'}
      })
      .then((response) => {
        return response.json()
      })
      .then(response => {
        console.log(response);
        if(response.data){
          console.log('good')
        } else {
          ///this.set('route.path', '/');
        }
      })
      .catch(error => {
        //this.set('route.path', '/');
      });
    } else {
      //this.set('route.path', '/');
    }
  }

  _saveProfile(){
    const security_code = this.route.path.split("/");
    let postCheck;
    this.emailError = "";
    this.countryResidenceError = "";
    this.firstNameError = "";
    this.familyNameError = "";

    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*\d|.*[!@#\$%\^&\*])(?=.*[A-Z])(?:.{8,})$");
    if(!strongRegex.test(this.passwordOne)) {
      this.emailError = "Password must be at least 8 characters long and must include uppercase and lowercase letters and a digit or special character";
      postCheck = false;
    } 
    if(this.passwordOne !== this.passwordTwo){
      this.emailError = "Passwords do not match each other!";
      postCheck = false;
    }
    if(this.countryResidence === undefined || this.countryResidence === 0){
      this.countryResidenceError = "Please select a country of residence";
      postCheck = false;
    }
    if(!this.firstName){
      this.firstNameError = "Please enter your first name";
      postCheck = false;
    }
    if(!this.familyName){
      this.familyNameError = "Please enter your family name";
      postCheck = false;
    }
    if(postCheck !== false){
      const data = {
        first_name : this.firstName,
        family_name : this.familyName,
        country_residence : this.countryResidence,
        security_code : security_code[3],
        password: this.passwordOne,
      }
      this._save(data);
      data.password = null
      localStorage.setItem('worbli_profile', JSON.stringify(data));
      this.complete = true;
    }

  }

_save(data){
  const url = `${this.apiPath}/register-user/`;
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data), 
    headers:{'Content-Type': 'application/json'}
  })
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));
}
  

} window.customElements.define('profile-route', ProfileRoute);
