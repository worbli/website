import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';

class WorbliProducers extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        div {
            flex-grow: 1;
            color: var(--grey-text);
            font-size: 12px;
        }
        .container{
            position: relative;
          background: #FFF;
          border-radius: 3px;
          box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -webkit-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -moz-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          margin-bottom: 18px;
          cursor: pointer;
        }
        .title {
          color: #3a3e46;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          line-height: 16px;
          padding: 13px 12px;
          border-bottom: 1px solid #f5f5f5;
          background: none;
          text-shadow: none;
        }
        .faq-text {
          font-size: 13px;
          font-weight: 200;
          line-height: 16px;
          padding: 12px;
        }
        .button{
          display: block;
          box-shadow: inset 0 0 0 1px #c8d6e8;
          padding: 6px;
          max-width: 210px;
          border-radius: 3px;
          text-align: center;
          padding-top:12px;
          height: 25px;
          margin-left: 25px;
          text-decoration: none;
          color: #4978b3;
          font-size: 12px;
          font-weight: 600;
          width: 100%;
        }
        .bottom-space {
          padding-bottom: 20px;
        }
        .bp {
          width: 60px;
          height: 60px;
          padding: 16px;
          opacity: 0.5;
          -webkit-filter: grayscale(0.5);
          filter: grayscale(0.5);
        }
        .bps{
          display: flex;
          flex-wrap: wrap
        }
      </style>

<div class="container">
    <div class="title">Block Producers</div>
        <div class="bps">
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/dune.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-blocksmith.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-cafe-block.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-cannon.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-costa-rica.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-dac.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-detroit.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-dublin.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-fish.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-germany.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-nairobi.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-new-york.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-real.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-rio.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-sg.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-sphere.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-titan.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-tribe.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eosys.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/genereos.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/gravity-pool.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/hkeos.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/infinity-bloc.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/saltblock.png"></div>
        </div>
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

} window.customElements.define('worbli-producers', WorbliProducers);