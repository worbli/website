import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-location.js';
import '../css/shared-styles.js';
import '../worbli-env.js';
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
          padding-top: 23px;
          padding-right: 27px;
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
          cursor: pointer;
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
        h2 {
          color: #93bda4;
          font-size: 15px;
          margin-top: 20px;
          margin-right: 12px;
        }
        a {
          color: white;
          text-decoration:none;
        }
        .container {
          cursor: default;
        }
        ::placeholder { 
          color: #9BE2F9;
          opacity: 1; 
        }
        </style>
        <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
        <worbli-env api-path={{apiPath}}></worbli-env>
        <div class="container">
          <div class="pic">
            <div class="left"></div>
              <div class="right">
                <template is="dom-if" if="{{!complete}}">
                  <div>
                    <input type="email" name="email" class="email" value="{{email::input}}" placeholder="[[placeholder]]">
                    <input type="submit" value="Subscribe" class="submit" on-click="_subscribe">
                  </div>
                  <div class="tagline">By subscribing to this mailing list you opt in to marketing communications.</div>
                </template>
                <template is="dom-if" if="{{complete}}">
                  <h2>[[completeMessage]]</h2>
                </template>
            </div>
          </div>
          <div class="footer">
          <h4>Sign up for our mailing list</h4>
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
      apiPath: {
        type: Text,
      },
      placeholder: {
        type: Text,
        value: 'Email',
      },
      complete: {
        type: Boolean,
        value: false,
      },
      completeMessage: {
        type: Text,
      }
    };
  }

  _subscribe(){
    if (this._validateEmail(this.email)){
      const url = `${this.apiPath}/email/add`;
      const body = {email: this.email, confirmation_marketing: true};
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(body), 
        headers:{'Content-Type': 'application/json'}
      })
      .then(response => {
          return response.json();
      })
      .then(response => {
        if(response.data === 'pass'){
          this.email = "";
          this.complete = true;
          this.completeMessage = "Your email is now registered, Thank You!"
          setTimeout(() => { 
            this.complete = false;
          }, 3000);
        } else {
          this.email = "";
          this.complete = true;
          this.completeMessage = "Try again, invalid Email"
          setTimeout(() => { 
              this.complete = false;
          }, 3000);
        }
      })
      .catch(response => {
        return response.json();
      })
    } else {
      this.email = "";
      this.placeholder = "Try again, invalid Email"
    }
  }

  _validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

} window.customElements.define('worbli-subscribe', WorbliSubscribe);