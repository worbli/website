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
      </style>
      <div class="overlay" on-click="_hide">

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

_join(){

}

_signIn(){
    
}


} window.customElements.define('worbli-overlay', WorbliOverlay);