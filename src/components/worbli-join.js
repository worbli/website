import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import { updateStyles } from '@polymer/polymer/lib/mixins/element-mixin.js';
import '@polymer/app-route/app-location.js';
import '../css/shared-styles.js';
import '../worbli-env.js';
class WorbliJoin extends PolymerElement {
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
        .btn-critical{
            opacity: var(--btnOpacity, 0.3);
            cursor: var(--btnCursor, not-allowed);
        }
        label{
            font-size: 13px;
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
        input[type="checkbox"] {
            -webkit-appearance: none;
            width: 20px;
            height: 18px;
            background: url(./images/checkbox.svg) no-repeat;
            background-size: contain;
            vertical-align: middle;
            cursor: pointer;
            margin-top: 0px;
            outline:0;
            border: 0;
            padding:0;
            min-width:20px;
        }
        input[type="checkbox"]:checked {
            background-image: url(./images/checkbox-selected.svg);
            outline:0;
        }
        .checkbox-label {
            color: #9da1ab;
            padding: 0 0 0 3px;
            line-height: 20px;
            margin: 23px 0 0;
            width: auto;
            font-weight: 400;
        }
        .checkbox-container{
            display:flex;
            display: inline-block;
            height: 29px;
        }
        a {
            color: var(--blue-text);
            text-decoration: none;
        }
        a:hover {
            color: var(--blue-text);
            text-decoration: underline;
        }
        .error{
          color: #E54D53;
          margin-bottom:6px;
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
            <template is="dom-if" if="{{!complete}}">
                <h2>Join WORBLI</h2>
                <p>WORBLI is the place to access smarter financial services</p>
                <input type="email" class="text" placeholder="Email Address" id="email" value="{{email::input}}" on-keyup="_confirmEmail">
                
                <div class="checkbox-container">
                    <input type="checkbox" name="checkbox" id="terms" value="{{terms::input}}" on-mousedown="_termsCheckbox">
                    <label class="checkbox-label"> I agree to the <span><a href="/terms/">Terms and Privacy Policy</a></span></label></br>
                </div>
                <div class="checkbox-container">
                    <input type="checkbox" name="checkbox" id="marketing" value="{{marketing::input}}" on-mousedown="_marketingCheckbox">
                    <label class="checkbox-label">By registering you agree to the terms and conditions and opt-in to marketing communications.</label></br></br>
                </div>
                <small class="comment error">[[error]]</small>
                <button class="btn-critical" on-click="_sendEmail">Join</button>
                <div class="center">Already on WORBLI? <span on-click="_signIn">Log In</span></div>
            </template>
            <template is="dom-if" if="{{complete}}">
                <h2>Sent</h2>
                <p>Please check your email, we have sent you a confirmation email to: {{email}}</p>
                <div class="center">Already on WORBLI? <span on-click="_signIn">Log In</span></div>
            </template>
    `;
  }
  static get properties() {
    return {
        join: {
            type: Boolean,
            reflectToAttribute: true,
            notify: true,
        },
        complete: {
            type: Boolean,
            value: false,
        },
        confirmedEmail: {
            type: Boolean,
            value: false,
        },
        securityCode: {
            type: Text,
        },
        apiPath: {
            type: Text,
        },
        resetJoin: {
            type: Boolean,
            observer: '_reset',
            reflectToAttribute: true,
            notify: true,
        }
    };
  }


_reset(){
    if(this.resetJoin === true){
        setTimeout(() => {
            this.complete = false;
            this.resetJoin = false;
        }, 2000);
    } 
}

_confirmEmail(){
    this.confirmedEmail = this._validateEmail(this.email);
    this._buttonActive()
}
_termsCheckbox(){
    if(this.termsCheckbox === undefined && this.termsCheckboxValue === undefined){
        this.termsCheckboxValue = true
      } else {
        this.termsCheckboxValue = !this.termsCheckboxValue;
      };
    this._buttonActive()
}

_buttonActive(){
    if(this.termsCheckboxValue && this.confirmedEmail){
        this.updateStyles({'--btnOpacity': 1});
        this.updateStyles({'--btnCursor': 'pointer'});
      } else {
        this.updateStyles({'--btnOpacity': 0.3});
        this.updateStyles({'--btnCursor': 'not-allowed)'});
      }
}

_marketingCheckbox(){
    if(this.marketingCheckbox === undefined && this.marketingCheckboxValue === undefined){
        this.marketingCheckboxValue = true
      } else {
        this.marketingCheckboxValue = !this.marketingCheckboxValue;
      } 
}

_sendEmail(){
    if (this.email && this._validateEmail(this.email)){
        const data = {
            email: this.email,
            agreed_terms: this.termsCheckboxValue,
            agreed_marketing: this.marketingCheckboxValue,
        }
        const url = `${this.apiPath}/email/authorize/`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data), 
            headers:{'Content-Type': 'application/json'}
          })
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            if(response.data === true){
                this.complete = true;
                this.error = ""
            } else {
                this.error = "Invalid email, please try again!"
            }
        })
    } else {
        this.email = ""
    }
}


_validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


_signIn(){
    this.join = false;
}

} window.customElements.define('worbli-join', WorbliJoin);