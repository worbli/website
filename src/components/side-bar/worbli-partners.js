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
          width: 88px;
          height: 88px;
          padding: 0 16px;
          border-radius: 1px;
          box-shadow: inset 0 0 0 1px rgba(0,0,0,0.05);
          margin-bottom:12px;
        }
        .bps{
          display: flex;
          flex-wrap: wrap;
          padding:12px;
          max-width: 252px;
          margin: auto;
        }
       .bps a:nth-child(1) div {background: url('./images/strategic-partners.png') 513px -73px; margin-right:12px;}
       .bps a:nth-child(2) div {background: url('./images/strategic-partners.png') 1036px -73px;}
       .bps a:nth-child(3) div {background: url('./images/strategic-partners.png') 776px -70px; margin-right:12px;}
       .bps a:nth-child(4) div {background: url('./images/strategic-partners.png') 906px -71px;}
       .bps a:nth-child(5) div {background: url('./images/strategic-partners.png') 251px -72px; margin-right:12px;}
       .bps a:nth-child(6) div {background: url('./images/strategic-partners.png') -1267px -71px;}
       .bps a:nth-child(7) div {background: url('./images/strategic-partners.png') -191px -63px; margin-right:12px;  background-size: 1225% auto;}
       .bps a:nth-child(8) div {background: url('./images/strategic-partners.png') -889px -60px;  background-size: 1225% auto;}
       .bps a:nth-child(9) div {background: url('./images/strategic-partners.png') -485px -70px; margin-right:12px; margin-bottom:0px;}
       .bps a:nth-child(10) div {background: url('./images/strategic-partners.png') -92px -71px; margin-bottom:0px;}
      </style>

      <div class="container">
        <div class="title">Strategic Partners</div>
        <div class="bps">
          <a href="http://www.pinsentmasons.com" target="_blank"><div class="bp pinsentmasons"></div></a>
          <a href="http://hklaw.com/" target="_blank"><div class="bp"></div></a>
          <a href="http://onfido.com/" target="_blank"><div class="bp"></div></a>
          <a href="http://interblockchain.io/" target="_blank"><div class="bp"></div></a>
          <a href="http://webprofits.com.au/" target="_blank"><div class="bp"></div></a>
          <a href="http://www.trybe.one" target="_blank"><div class="bp"></div></a>
          <a href="http://eosdetroit.io/" target="_blank"><div class="bp"></div></a>
          <a href="http://www.0rigin.one" target="_blank"><div class="bp"></div></a>
          <a href="http://genereos.io/" target="_blank"><div class="bp"></div></a>
          <a href="https://www.chintai.io/" target="_blank"><div class="bp"></div></a>
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
