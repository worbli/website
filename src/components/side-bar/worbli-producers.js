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
        .bp {
          width: 45px;
          height: 45px;
          padding: 16px;
          border-radius: 1px;
          box-shadow: inset 0 0 0 1px rgba(0,0,0,0.05);
          margin-bottom:12px;
          margin-left:12px;
          display: block;
        }
        .bps{
          display: flex;
          flex-wrap: wrap;
          max-width: 267px;
          margin: auto;
        }
        .topline {
          margin-top: 12px;
        }
      </style>

      <div class="container">
        <div class="title">Block Producers</div>
          <div class="bps">
            <!-- <a href="https://www.dunenode.com/" target="_blank"><div class="bp topline"><img width="45px" src="./images/bp-logos/blue/dune.png"></div></a>
            <a href="https://eoscostarica.io/" target="_blank"><div class="bp"><img width="45px" src="./images/bp-logos/blue/eos-costa-rica.png"></div></a>
            <a href="https://eosdetroit.io" target="_blank"><div class="bp"><img width="45px" src="./images/bp-logos/blue/eos-detroit.png"></div></a>
            <a href="https://eosdublin.com" target="_blank"><div class="bp"><img width="45px" src="./images/bp-logos/blue/eos-dublin.png"></div></a>
            <a href="https://bp.fish" target="_blank"><div class="bp"><img width="45px" src="./images/bp-logos/blue/eos-fish.png"></div></a>
            <a href="https://eosgermany.one/" target="_blank"><div class="bp"><img width="45px" src="./images/bp-logos/blue/eos-germany.png"></div></a>
            <a href="https://eosnewyork.io" target="_blank"><div class="bp"><img width="45px" src="./images/bp-logos/blue/eos-new-york.png"></div></a>
            <a href="http://eosreal.com/" target="_blank"><div class="bp"><img width="45px" src="./images/bp-logos/blue/eos-real.png"></div></a>
            <a href="https://eosys.io" target="_blank"><div class="bp"><img width="45px" src="./images/bp-logos/blue/eosys.png"></div></a>
            <a href="http://eosgravity.com/" target="_blank"><div class="bp"><img width="45px" src="./images/bp-logos/blue/gravity-pool.png"></div></a>
            <a href="https://hkeos.com" target="_blank"><div class="bp"><img width="45px" src="./images/bp-logos/blue/hkeos.png"></div></a>
            <a href="https://www.infinitybloc.io" target="_blank"><div class="bp"><img width="45px" src="./images/bp-logos/blue/infinity-bloc.png"></div></a>
            <a href="https://octagonlabs.org/" target="_blank"><div class="bp"><img width="45px" src="./images/bp-logos/blue/octagon-labs.png"></div></a> -->


            <a href="https://eosblocksmith.io/" target="_blank"><div class="bp topline"><img width="45px" src="./images/bp-logos/blue/eos-blocksmith.png"></div></a>
            <a href="https://www.eoscafeblock.com/" target="_blank"><div class="bp topline"><img width="45px" src="./images/bp-logos/blue/eos-cafe-block.png"></div></a>
            <a href="https://eoscannon.io" target="_blank"><div class="bp"><img width="45px" src="./images/bp-logos/blue/eos-cannon.png"></div></a>
            <a href="https://eosdac.io" target="_blank"><div class="bp"><img width="45px" src="./images/bp-logos/blue/eos-dac.png"></div></a>
            <a href="https://www.eosnairobi.io/" target="_blank"><div class="bp"><img width="45px" src="./images/bp-logos/blue/eos-nairobi.png"></div></a>
            <a href="https://eosrio.io" target="_blank"><div class="bp"><img width="45px" src="./images/bp-logos/blue/eos-rio.png"></div></a>
            <!-- <a href="http://eos.vote/EOS_Singapore_pc_eng.html" target="_blank"><div class="bp"><img width="45px" src="./images/bp-logos/blue/eos-sg.png"></div></a> -->
            <a href="https://eosphere.io" target="_blank"><div class="bp"><img width="45px" src="./images/bp-logos/blue/eos-sphere.png"></div></a>
            <a href="https://eostitan.com/" target="_blank"><div class="bp"><img width="45px" src="./images/bp-logos/blue/eos-titan.png"></div></a>
            <a href="http://eostribe.io" target="_blank"><div class="bp"><img width="45px" src="./images/bp-logos/blue/eos-tribe.png"></div></a>
            <a href="https://www.genereos.io" target="_blank"><div class="bp"><img width="45px" src="./images/bp-logos/blue/genereos.png"></div></a>
            <a href="https://www.chainrift.com/" target="_blank"><div class="bp"><img width="45px" src="./images/bp-logos/blue/chain-rift.png"></div></a>
            
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