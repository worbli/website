import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-location.js';
import '../css/shared-styles.js';
class WorbliSubscribe extends PolymerElement {
  static get template() {
    return html`
        <style include="shared-styles">
        :host {
            display: block;
            max-width: 860px;
        }
        .footer{
          border-top: 1px solid #f5f5f5;
          padding: 12px;
        }
        h4 {
          font-size: 13px;
          font-weight: 600;
          line-height: 16px;
          margin-bottom: 6px;
        }
        .description {
          font-size: 13px;
          font-weight: 200;
          line-height: 18px;
        }
        .pic {
            height: 100px;
            background-image: url("./images/home-page/subscribe.png");
            background-position: center; 
            background-repeat: no-repeat;
            background-size: cover;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            display: flex;
            width:100%;
        }
        .tagline{
            color: white;
            font-size: 11px;
            margin-top: 10px;
        }
        .left{
            flex-grow:3;
            display:block;
        }
        .right{
            display:block;
            flex-grow:1;
            text-align: right;
            padding-top:15px;
            padding-right:15px;
        }
        .submit{
            margin-left: 12px;
            color: #9BE2F9;
            padding: 5px 7px;
            line-height: 19px;
            border: 1px solid #9BE2F9;
            border-radius: 2px;
            font-size: 13px;
            background: #232675;
            padding: 5px 20px;
        }
        .email{
            color: #9BE2F9;
            padding: 5px 7px;
            line-height: 19px;
            border: 1px solid #9BE2F9;
            border-radius: 2px;
            font-size: 13px;
            background: #232675;
            width: 230px;
        }
        a{
            color: white;
            text-decoration:none;
        }
        </style>
        <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
        <div class="container">
            <div class="pic">
                <div class="left"></div>
                <div class="right">
                    <div><input type="email" name="email" class="email"><input type="submit" value="Subscribe" class="submit"></div>
                    <div class="tagline">By registering you agree to the <a href="/terms/">terms and conditions</a></br> and opt-in to marketing communications.</div>
                </div>
            </div>
            <div class="footer">
            <h4>Sign Up for Launch Updates</h4>
            <div class="description">We're on a mission to develop the world's most cost-effective and developer-friendly, consumer and enterprise Blockchain Platform. We hope you are excited to take part in Blockchain's Financial District! Sign up for email updates.</div>
            </div>
        </div>
    `;
  }
  static get properties() {
    return {
        join: {
            type: Boolean,
            reflectToAttribute: true,
            notify: true,
        },
    };
  }

_sendEmail(){
    if (this.email && this._validateEmail(this.email)){
        const data = {
            email: this.email,
            security_code: this.securityCode,
        }
        localStorage.setItem('worbli_request', JSON.stringify(data));

        fetch(`${this.apiPath}/send-email/validate/${this.email}~${this.securityCode}`)
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            if(response = true){
                this.complete = true;
                this._fetchSecurityCode();
            } else {
                console.log('try again')
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

} window.customElements.define('worbli-subscribe', WorbliSubscribe);