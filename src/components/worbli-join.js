import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import { updateStyles } from '@polymer/polymer/lib/mixins/element-mixin.js';
import '@polymer/app-route/app-location.js';
import '../css/shared-styles.js';

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
            border: 1px solid #8bd2d0 !important;
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

      </style>
            <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
            <template is="dom-if" if="{{!complete}}">
                <h2>Join WORBLI</h2>
                <p>WORBLI is the place to access smarter financial services</p>
                <input type="text" class="text" placeholder="Email Address" id="email" value="{{email::input}}">
                <label><input type="checkbox" name="checkbox" id="terms" value="{{terms::input}}" on-mousedown="_termsCheckbox"> I agree to the <span><a href="/terms/">Terms</a></span> and <span><a href="/privacy/">Privacy Policy</a></span></label></br>
                <label><input type="checkbox" name="checkbox" id="marketing" value="{{marketing::input}}" on-mousedown="_marketingCheckbox"> I'm happy to recieve marketing communications from WORBLI</label></br></br>
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
        securityCode: {
            type: Text,
        },
    };
  }

ready() {
    super.ready();
    console.log('Getting security code');
    fetch('https://api.dac.city/api/v1/security-code/')
    .then((response) => {
        return response.json()
    })
    .then((response) => {
        this.securityCode = response.security_code;
    })
}

_termsCheckbox(){
    if(this.termsCheckbox === undefined && this.termsCheckboxValue === undefined){
        this.termsCheckboxValue = true
      } else {
        this.termsCheckboxValue = !this.termsCheckboxValue;
      };
      if(this.termsCheckboxValue){
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
    console.log(this.email)
    console.log(this.termsCheckboxValue)
    console.log(this.marketingCheckboxValue)
   // this.set('route.path', '/dashboard/email');
   console.log('Sending email');

if (this.email){
    fetch(`https://api.dac.city/api/v1/send-email/validate/${this.email}~${this.securityCode}`)
    .then((response) => {
        return response.json()
    })
    .then((response) => {
        console.log(response)
    })
}




}
_signIn(){
    this.join = false;
}

} window.customElements.define('worbli-join', WorbliJoin);