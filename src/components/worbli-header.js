import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '@polymer/app-route/app-location.js';
class WorbliHeader extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">
        :host {
          line-height: 0;
          display: block;
          margin-bottom:17px;
          background-color: white;
          box-shadow: inset 0 1px 0 #f5f5f5, 0 1px 0px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.05);
        }
      div {
          display: inline-block;
          flex-grow: 1;
          color: var(--grey-text);
          font-size: 12px;
      }
      .container-header{
		    position:relative;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        line-height: 60px;
        margin: 0 auto;
        max-width: 1160px;
      }
      ul {
        list-style: none;
        text-align: right;
      }
      li {
        display: inline;
      }
      li a {
        text-transform: uppercase;
        color: var(--blue-navigation);
        font-size: 14px;
        text-decoration: none;
        margin-left:30px;
        font-weight: 600;
      }
      button {
        color: var(--blue-navigation);
        font-size: 14px;
        font-weight: 600;
        width: 130px;
        height: 50px;
        cursor: pointer;
        border-radius: 3px;
      }
      img {
        vertical-align: middle;
	    }
      .center {
          max-width: 1160px;
          margin: 0 auto;
        }
        .logoimg{
          height:30px
        }
      .blue-bg{
        background-color: var(--blue-navigation);
        color: white;
        padding: 12px 24px 12px 24px;
        border-radius: 3px;
        cursor: pointer;
        font-weight: 600;
      }
      .join-btn{
        text-transform: uppercase;
        color: var(--blue-navigation);
        font-size: 14px;
        text-decoration: none;
        margin-left:30px;
        font-weight: 600;
        margin-right: 30px;
        cursor: pointer;
      }

      @media only screen and (max-width: 600px) {
        .navigation{
          display: none;
        }
        .menu-togglee{
          display:block;
          position:fixed;
          opacity: 0.3;
          width: 25px;
          height: 25px;
          right: 15px;
          top: 10px;
          background:url('./images/noun_hamburger_menu.png');
          background-size:contain;
          background-repeat:no-repeat;
          z-index:500;
          filter: grayscale(100%);
        }
        .logo {
          text-align: center;
        }
        .container-header {
          line-height: 45px;
        }
        .logoimg{
          height:25px
        }
      }
    </style>

    <template is="dom-if" if="{{!logedIn}}"></template>
      <div class="menu-togglee" on-click="_toggleMenu"></div>
    </template>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <div class="container-header">
        <div class="logo">
          <a href="/" tabindex="0">
            <img src="./images/logo.svg" alt="Worbli Logo" height="30px" class="logoimg">      
          </a>
        </div>
		    
        <div class="navigation">
          <template is="dom-if" if="{{!logedIn}}">
            <ul>
              <li><a href="/about/" tabindex="1">ABOUT</a></li>
              <li><a href="/vision/" tabindex="1">VISION</a></li>
              <li><a href="/team/" tabindex="2">TEAM</a></li>
              <li><a href="/roadmap/" tabindex="3">ROADMAP</a></li>
              <li><a href="/network/" tabindex="4">NETWORK</a></li>
            </ul>
          </template>
        </div>

      <template is="dom-if" if="{{!logedIn}}">
        <div class="navigation">
          <ul>
            <li on-click="_join" class="join-btn">JOIN WORBLI</a></li>
            <li on-click="_signIn" class="blue-bg">SIGN IN</a></li>
          </ul>
      </div>
    </template>
    <template is="dom-if" if="{{logedIn}}">
        <div class="navigation">
          <ul>
            <li on-click="_signOut" class="join-btn">SIGN OUT</a></li>
            <li on-click="_dashboard" class="blue-bg">DASHBOARD</a></li>
          </ul>
      </div>
    </template>


	    </div>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'worbli-header',
      },
      route: {
        type: Object,
        observer: "_routeChanged"
      },
      logedIn: {
        type: Boolean,
        value: false,
      },
      worbliProfile: {
        type: Object,
      }
    };
  }

  _routeChanged(){
    const token = localStorage.getItem("token");
    if(token){
      this.logedIn = true;
    } 
  }

  _dashboard(){
    const loc = localStorage.getItem("loc");
    if(loc === 'default')   {this.set('route.path', `/dashboard/profile`)};
    if(loc === 'started')   {this.set('route.path', `/dashboard/profile`)};
    if(loc === 'review')    {this.set('route.path', `/dashboard/review`)};
    if(loc === 'approved')  {this.set('route.path', `/dashboard/account`)};
    if(loc === 'named')     {this.set('route.path', `/dashboard/sharedrop`)};
    if(loc === 'credited')  {this.set('route.path', `/dashboard/account`)};
    
  }
  _signOut(){
    this.logedIn = false;
    localStorage.removeItem("token");
    this.set('route.path', `/`);
  }
  _goProfile(){
    this.set('route.path', `/dashboard/profile/${this.worbli_profile.security_code}`);
  }
  _signIn() {
    this.dispatchEvent(new CustomEvent('overlay',{bubbles: true, composed: true, detail: {action: 'signin'}}));
  }

  _join() {
    this.dispatchEvent(new CustomEvent('overlay',{bubbles: true, composed: true, detail: {action: 'join'}}));
  }

  _toggleMenu(){
    this.set('route.path', `/menu`);
  }

} window.customElements.define('worbli-header', WorbliHeader);