import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';

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
            border: 1px solid #8bd2d0 !important;
            box-shadow: 0 0 0 2px rgba(133,176,212,0.4);
        }
      
        input.text.error {
            color: #db6265;
            border-color: #d2928c;
            box-shadow: 0 0 0 2px #f0d1ce;
        }
  
        button {
            cursor: pointer;
            vertical-align: middle;
            outline: none;
        }
  
        .btn-critical {
            display: block;
            width: 100%;
            font-weight: bold;
            padding: 0 12px;
            line-height: 36px;
            font-size: 14px;
            border: 1px solid;
            border-radius: 3px;
            color: #5A616F;
            text-shadow: 0 1px 0 #FFF;
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
            border-color: #d1d3d6 #d2d3d5 #bdbec0;
            background: #F4F4F5;
            background: -webkit-linear-gradient(top,#FFF,#F6F7F8);
            background: -ms-linear-gradient(top,#FFFFFF,#f9f9f9);
            background: -moz-linear-gradient(top,#FFFFFF,#f9f9f9);
            background: -o-linear-gradient(top,#FFFFFF,#f9f9f9);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFF',
            endColorstr='#f9f9f9');
        }
  
        .btn-critical:hover {
            text-decoration: none;
            border-color: #CCCED2 #C7C8C9 #B6B7B9;
            background: rgb(255,255,255);
            background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(249,250,250,1) 100%);
            background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(249,250,250,1) 100%);
            background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(249,250,250,1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', 
            endColorstr='#f9fafa',GradientType=0 );
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

            <h2>Sign In</h2>
            <p>Welcome back to WORBLI.....</p>
            <input type="text" class="text" name="email" placeholder="Email" id="loginEmail">
            <input type="text" class="text" name="password" placeholder="Password" id="password">
            <button class="btn-critical" on-click="_checkPassword">Sign In</button>
            <div class="center">New to Worbli? <span on-click="_join">Join WORBLI</span></div>
    `;
  }
  static get properties() {
    return {
      init: {
        type: String,
        observer: '_doOnfido',
      },
    };
  }

} window.customElements.define('worbli-signin', WorbliSignin);