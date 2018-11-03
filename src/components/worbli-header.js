import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '@polymer/app-route/app-location.js';
class WorbliHeader extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">
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
        border-bottom: 1px solid var(--grey-keyline);
        margin-bottom: 40px;
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
        margin-right:30px;
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
      .menu-toggle{
        background:url('./images/noun_hamburger_menu.png');
        background-size:contain;
        background-repeat:no-repeat;
        display:none;
        height:30px;
        position: relative;
        top: 11px;
      }

      @media only screen and (max-width: 600px) {
        .navigation {
          display: none;
        }
        .menu-toggle{
          display:block;
        }
        .logo {
          text-align: center;
        }
        .container-header {
          line-height: 50px;
          padding-bottom: 10px;
        }


}
    </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <div class="container-header">
      <div class="logo">
        <a href="/" tabindex="0">
  
          <picture>
            <source srcset="./images/logo.webp" type="image/webp">
            <source srcset="./images/logo.png" type="image/png"> 
            <source srcset="./images/logo.svg" type="image/svg"> 
            <img src="./images/logo.png" alt="Worbli Logo" height="30px">
          </picture>
      
      </a>
      </div>
		  <div class="menu-toggle" on-click="_toggleMenu" name="menu" id="menu"></div>
      <div class="navigation">
          <ul>
            <li><a href="/about/" tabindex="1">ABOUT</a></li>
            <li><a href="/team/" tabindex="2">TEAM</a></li>
            <li><a href="/roadmap/" tabindex="3">ROADMAP</a></li>
            <li><a href="/network/" tabindex="4">NETWORK</a></li>
          </ul>
      </div>
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
      logedOut: {
        type: Boolean,
        value: false,
      },
      worbliProfile: {
        type: Object,
      }
    };
  }

  _routeChanged(){
    let str = this.route.path.split("/")
    if(str[1] === 'dashboard'){
      this.logedIn = false;
      this.logedOut = false;
    } else {
      this.worbliProfile = JSON.parse(localStorage.getItem("worbli_profile"));
      if(this.worbliProfile){
        this.logedIn = true;
        this.logedOut = false;
      } else {
        this.logedIn = false;
        this.logedOut = true;
      }
    }
  }

  _signOut(){
    localStorage.removeItem("worbli_profile");
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