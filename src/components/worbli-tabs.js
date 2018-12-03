import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
class WorbliTabs extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
        .tab-area{         
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          border-bottom: 1px solid #f5f5f5;
          height: 50px;
        }
        .tab-area div{
          flex-grow: 1;
          text-align: center;    
          font-size: 14px;
          line-height: 54px;
          cursor: pointer;
          color: #737883;
          font-weight: 600;
          border-right: 1px solid #f5f5f5;
        }

        .tab-area div:last-child {
          border-right: 0;
        }
        .selected {
          border-bottom: 3px solid #4f7eb8;
        }

        @media only screen and (max-width: 600px){

        }
        </style>
        <div class="tab-area">
          <div class$="[[tabone]]" on-click="_tabOne">Claim With Scatter</div>
          <div class$="[[tabtwo]]" on-click="_tabTwo">Advanced</div>
        </div>
    `;
  }
  static get properties() {
    return {
      tabs: {
        type: Text,
      },
      tabSelected: {
        type: Text,
        notify: true,
        reflectToAttribute: true,
      },
      tabone: {
        type: Text,
        value: 'selected'
      },
      tabtwo: {
        type: Text,
        value: ''
      }
    };
  }

  _tabOne(){
    console.log('tab1')
    this.tabone = 'selected';
    this.tabtwo = '';
    this.tabSelected = 'Claim With Scatter';
  }

  _tabTwo(){
    console.log('tab2')
    this.tabone = '';
    this.tabtwo = 'selected';
    this.tabSelected = 'Advanced';
  }

} window.customElements.define('worbli-tabs', WorbliTabs);
