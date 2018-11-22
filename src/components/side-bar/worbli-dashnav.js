import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-location.js';
import '../../css/shared-styles.js';
import '../../worbli-env.js';

class WorbliDashnav extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
      :host {
        --profile-opacity: 1;
        --profile-pointer: unset;
        --profile-cursor: pointer;
      }
      div {
          flex-grow: 1;
          color: var(--grey-text);
          font-size: 12px;
      }
      .nav {
        color: #3a3e46;
        font-size: 11px;
        font-weight: 600;
        line-height: 16px;
        padding: 13px 12px;
        border-bottom: 1px solid #f5f5f5;
        background: none;
        text-shadow: none;
        opacity: 0.2;
      }
      .selected{
        opacity: 1;
        
      }
      .nav:hover {
        background-color: #F6F6F7;
      }
      .selected {
        color: black;
      }
      .link {
        text-decoration: none;
        cursor: default;
        pointer-events: none;
      }
      .active{
        pointer-events: unset;
        cursor: pointer;
      }
      </style>

        <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
        <worbli-env api-path="{{apiPath}}""></worbli-env>
        <div class="container">

          <template is="dom-if" if="{{default}}">
            <a href="/dashboard/profile" class="link active"><div class="nav selected">Application</div></a>
            <a href="/dashboard/review" class="link"><div class="nav">Review</div></a>
            <a href="/dashboard/status" class="link"><div class="nav">Status</div></a>
            <a href="/dashboard/account" class="link"><div class="nav">Account</div></a>
            <a href="/dashboard/sharedrop" class="link"><div class="nav">Sharedrop</div></a>
            <a href="/dashboard/password" class="link active"><div class="nav selected">Password</div></a>
          </template>

          <template is="dom-if" if="{{started}}">
            <a href="/dashboard/profile" class="link active"><div class="nav selected">Application</div></a>
            <a href="/dashboard/review" class="link active"><div class="nav selected">Review</div></a>
            <a href="/dashboard/status" class="link"><div class="nav">Status</div></a>
            <a href="/dashboard/account" class="link"><div class="nav">Account</div></a>
            <a href="/dashboard/sharedrop" class="link"><div class="nav">Sharedrop</div></a>
            <a href="/dashboard/password" class="link active"><div class="nav selected">Password</div></a>
          </template>

          <template is="dom-if" if="{{review}}">
            <a href="/dashboard/profile" class="link"><div class="nav">Application</div></a>
            <a href="/dashboard/review" class="link"><div class="nav">Review</div></a>
            <a href="/dashboard/status" class="link active"><div class="nav selected">Status</div></a>
            <a href="/dashboard/account" class="link"><div class="nav">Account</div></a>
            <a href="/dashboard/sharedrop" class="link"><div class="nav">Sharedrop</div></a>
            <a href="/dashboard/password" class="link active"><div class="nav selected">Password</div></a>
          </template>

          <template is="dom-if" if="{{approved}}">
            <a href="/dashboard/profile" class="link"><div class="nav">Application</div></a>
            <a href="/dashboard/review" class="link"><div class="nav">Review</div></a>
            <a href="/dashboard/status" class="link"><div class="nav">Status</div></a>
            <a href="/dashboard/account" class="link active"><div class="nav selected">Account</div></a>
            <a href="/dashboard/sharedrop" class="link"><div class="nav">Sharedrop</div></a>
            <a href="/dashboard/password" class="link active"><div class="nav selected">Password</div></a>
          </template>

          <template is="dom-if" if="{{approved}}">
            <a href="/dashboard/profile" class="link"><div class="nav">Application</div></a>
            <a href="/dashboard/review" class="link"><div class="nav">Review</div></a>
            <a href="/dashboard/status" class="link"><div class="nav">Status</div></a>
            <a href="/dashboard/account" class="link active"><div class="nav selected">Account</div></a>
            <a href="/dashboard/sharedrop" class="link"><div class="nav">Sharedrop</div></a>
            <a href="/dashboard/password" class="link active"><div class="nav selected">Password</div></a>
          </template>

          <template is="dom-if" if="{{named}}">
            <a href="/dashboard/profile" class="link"><div class="nav">Application</div></a>
            <a href="/dashboard/review" class="link"><div class="nav">Review</div></a>
            <a href="/dashboard/status" class="link"><div class="nav">Status</div></a>
            <a href="/dashboard/account" class="link"><div class="nav">Account</div></a>
            <a href="/dashboard/sharedrop" class="link active"><div class="nav selected">Sharedrop</div></a>
            <a href="/dashboard/password" class="link active"><div class="nav selected">Password</div></a>
          </template>

          <template is="dom-if" if="{{credited}}">
            <a href="/dashboard/profile" class="link"><div class="nav">Application</div></a>
            <a href="/dashboard/review" class="link"><div class="nav">Review</div></a>
            <a href="/dashboard/status" class="link"><div class="nav">Status</div></a>
            <a href="/dashboard/account" class="link"><div class="nav">Account</div></a>
            <a href="/dashboard/sharedrop" class="link"><div class="nav">Sharedrop</div></a>
            <a href="/dashboard/password" class="link active"><div class="nav selected">Password</div></a>
          </template>

        </div>
    `;
  }
  static get properties(){
    return {
      route: {
        type: String,
        observer: '_routeChanged',
      },
      onfidoStatus: {
        type: String,
      },
      apiPath: {
        type: String,
      },
      loaded: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true
      },
      default: {
        type: Boolean,
        value: false,
      },
      started: {
        type: Boolean,
        value: false,
      },
      review: {
        type: Boolean,
        value: false,
      },
      approved: {
        type: Boolean,
        value: false,
      },
      named: {
        type: Boolean,
        value: false,
      },
      credited: {
        type: Boolean,
        value: false,
      },
      page: {
        type: Text,
      }
    };
  }

  _routeChanged(){
      const location = this.route.path.split("/")[1];
      this.page = this.route.path.split("/")[2];
      if(this.page === 'password' && this.route && this.route.__queryParams && this.route.__queryParams.token){
        const token = this.route.__queryParams.token;
        localStorage.setItem("token", token);
      }
      if(location === 'dashboard'){
        this._auth();
      }
  }

  _auth(){
    this.loaded = false;
    const token = localStorage.getItem("token");
    if(token) {
        const url = `${this.apiPath}/user/auth`;
        fetch(url, {
            method: 'POST',
            headers: {'Authorization': `Bearer ${token}`},
        })
        .then((response) => {return response.json()})
        .then(response => {
            this.loaded = true;
            this.onfidoStatus = response.onfido_status;
            this._statusChanged();
            if(response.data === false){
                localStorage.removeItem("token");
                this._goHome()
            } else {
                localStorage.setItem("token", token);
            }
        })
        .catch(error => {
            this._goHome()
        });
    } else {
        this._goHome()
    }
  }

  _statusChanged(){
    this.default = false;
    this.started = false;
    this.review = false;
    this.approved = false;
    this.named = false;
    this.credited = false;
    if(this.onfidoStatus === 'default'){
      this.default = true;
      localStorage.setItem("loc", "default");
    };
    if(this.onfidoStatus === 'started'){
      this.started = true;
      localStorage.setItem("loc", "started");
    };
    if(this.onfidoStatus === 'review'){
      this.review = true;
      localStorage.setItem("loc", "review");
    };
    if(this.onfidoStatus === 'approved'){
      this.approved = true;
      localStorage.setItem("loc", "approved");
    };
    if(this.onfidoStatus === 'named'){
      this.named = true;
      localStorage.setItem("loc", "named");
    };
    if(this.onfidoStatus === 'credited'){
      this.credited = true;
      localStorage.setItem("loc", "credited");
    };
    this._bounce();
  }

  _bounce(){
    const status = this.onfidoStatus;
    const page = this.page;
    if(status === 'default' && page === 'review' ){this._goHome()}
    if(status === 'default' && page === 'status' ){this._goHome()}
    if(status === 'default' && page === 'account' ){this._goHome()}
    if(status === 'default' && page === 'sharedrop' ){this._goHome()}
    if(status === 'started' && page === 'status' ){this._goHome()}
    if(status === 'started' && page === 'account' ){this._goHome()}
    if(status === 'started' && page === 'sharedrop' ){this._goHome()}
    if(status === 'review' && page === 'profile' ){this._goHome()}
    if(status === 'review' && page === 'review' ){this._goHome()}
    if(status === 'review' && page === 'account' ){this._goHome()}
    if(status === 'review' && page === 'sharedrop' ){this._goHome()}
    if(status === 'approved' && page === 'profile' ){this._goHome()}
    if(status === 'approved' && page === 'review' ){this._goHome()}
    if(status === 'approved' && page === 'status' ){this._goHome()}
    if(status === 'approved' && page === 'sharedrop' ){this._goHome()}
    if(status === 'named' && page === 'profile' ){this._goHome()}
    if(status === 'named' && page === 'review' ){this._goHome()}
    if(status === 'named' && page === 'status' ){this._goHome()}
    if(status === 'named' && page === 'account' ){this._goHome()}
    if(status === 'credited' && page === 'profile' ){this._goHome()}
    if(status === 'credited' && page === 'review' ){this._goHome()}
    if(status === 'credited' && page === 'status' ){this._goHome()}
    if(status === 'credited' && page === 'account' ){this._goHome()}
    if(status === 'credited' && page === 'sharedrop' ){this._goHome()}
  }

  _goHome(){
   // this.set('route.path', '/')
  }

} window.customElements.define('worbli-dashnav', WorbliDashnav);

