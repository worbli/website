import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';

class WorbliOverlay extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
            --opacity: 0;
            --display-none-block: none;
            position: fixed; 
            display: var(--display-none-block);
            width: 100%; 
            height: 100%; 
            top: 0; 
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 2; 
        }

        .overlay{
            opacity: var(--opacity);
            background-color: rgba(0, 0, 0, 0.5); 
            transition: opacity 0.2s ease-in-out;
            position: fixed; 
            display: block;
            width: 100%; 
            height: 100%; 
            top: 0; 
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 3; 
            cursor: pointer; 
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .card {
            width: 500px;
            padding: 40px;
            cursor: default;
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
        h2 {
            font-size: 22px;
            line-height: 26px;
            margin-bottom:12px;
            margin-top:0px;
            color: var(--blue-text);
            font-weight: 600;
            margin-bottom: 12px;
        }

        small {
            color: #4c505a;
            font-size: 15px;
            font-weight: normal;
            line-height: 20px;
            opacity: 0.7;
            display: block;
            padding-top: 13px;
        }
        .card {
            margin: 24px;
            padding: 40px;
            color: #757575;
            border-radius: 5px;
            background-color: #fff;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 
            0 1px 5px 0 rgba(0, 0, 0, 0.12), 
            0 3px 1px -2px rgba(0, 0, 0, 0.2);
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
        p {
        margin: 24px 0 24px 0;
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
      </style>
      <div class="overlay" on-click="_hide">
      <template is="dom-if" if="{{join}}">
        <div class="card" on-click="_clickCard">
            <h2>Join Worbli</h2>
            <p>Worbli is the place to.....</p>
            <input type="text" class="text" placeholder="Email Address" id="email">
            <button class="btn-critical" on-click="_sendEmail">Join</button>
            <div class="center">Already on Warbli? <span on-click="_signIn">Log In</span></div>
        </div>
    </template>

    <template is="dom-if" if="{{!join}}">
        <div class="card" on-click="_clickCard">
            <h2>Sign In</h2>
            <p>Welcome back to Worbli.....</p>
            <input type="text" class="text" name="email" placeholder="Email">
            <input type="text" class="text" name="password" placeholder="Password">
            <button class="btn-critical">Sign In</button>
            <div class="center">New to Worbli? <span on-click="_join">Join Worbli</span></div>
        </div>
    </template>
      </div>

    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'worbli-overlay',
      },
    };
  }

ready() {
    super.ready();
    console.log('fired1');
    window.addEventListener('overlay', (event) => {
        console.log('fired2');
        this._show(event.detail.action);
    });
}

_show(event) {
    this.updateStyles({'--display-none-block': 'block'});
    setTimeout(()=>{
        this.updateStyles({'--opacity': 1});
    }, 1);
    if (event === 'join') {
        this._join();
    } else {
        this._signIn();
    }
}

_hide() {
    this.updateStyles({'--opacity': 0});
    setTimeout(()=>{
        this.updateStyles({'--display-none-block': 'none'});
    }, 200);
}
_clickCard(event) {
    event.stopPropagation();
}

_join(){
    this.join = true;
}

_signIn(){
    this.join = false;
}
_sendEmail(){
    const email = this.shadowRoot.querySelector('#email').value;
    fetch(`http://testnetapi.worbli.io/api/v1/send-mail/${email}`)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(response);
    })
}


} window.customElements.define('worbli-overlay', WorbliOverlay);