import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';

class WorbliPartners extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        div {
            flex-grow: 1;
            color: var(--grey-text);
            font-size: 12px;
        }
        .bp {
          width: 105px;
          height: 105px;
          padding: 0 16px;
          background-color:red;
          
        }
        .bps{
          display: flex;
          flex-wrap: wrap
        }
       .bps a:nth-child(1) div {background: url('./images/strategic-partners.png') 519px -54px;}
       .bps a:nth-child(2) div {background: url('./images/strategic-partners.png') 1039px -54px;}
       .bps a:nth-child(3) div {background: url('./images/strategic-partners.png') 785px -54px;}
       .bps a:nth-child(4) div {background: url('./images/strategic-partners.png') 913px -54px;}
       .bps a:nth-child(5) div {background: url('./images/strategic-partners.png') 259px -54px;}
       .bps a:nth-child(6) div {background: url('./images/strategic-partners.png') -1261px -54px;}
       .bps a:nth-child(7) div {background: url('./images/strategic-partners.png') -216px -54px;}
       .bps a:nth-child(8) div {background: url('./images/strategic-partners.png') -353px -54px;}
       .bps a:nth-child(9) div {background: url('./images/strategic-partners.png') -475px -54px;}
       .bps a:nth-child(10) div {background: url('./images/strategic-partners.png') -85px -54px;}
      </style>



        <div class="container">
            <div class="title">Strategic Partners</div>
            <div class="bps">
            <a href="http://www.pinsentmasons.com"><div class="bp pinsentmasons"></div></a>
            <a href="http://hklaw.com/"><div class="bp"></div></a>
            <a href="http://onfido.com/"><div class="bp"></div></a>
            <a href="http://interblockchain.io/"><div class="bp"></div></a>
            <a href="http://webprofits.com.au/"><div class="bp"></div></a>
            <a href="http://www.trybe.one"><div class="bp"></div></a>
            <a href="http://eosdetroit.io/"><div class="bp"></div></a>
            <a href="http://www.eosgermany.one"><div class="bp"></div></a>
            <a href="http://genereos.io/"><div class="bp"></div></a>
            <a href="https://www.chintai.io/"><div class="bp"></div></a>
            </div>
        </div>
        
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

} window.customElements.define('worbli-partners', WorbliPartners);