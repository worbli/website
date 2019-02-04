import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-location.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';
import '../components/side-bar/worbli-telegram.js';
import '../components/side-bar/worbli-support.js';
import '../components/side-bar/worbli-snapshot.js';
import '../components/side-bar/worbli-partners.js';
import '../components/worbli-buy.js';
import '../components/worbli-title.js';
import '../components/worbli-tile.js';
class MainRoute extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
        /* --------------- Title and sub heading */
        .page-title {
          margin: 18px 0 18px 0; 
        }
        .page-title h1 {
          color: var(--blue-text);
          font-size: 33px;
          font-weight: 500; 
        }

        /* --------------- Split layout */
        .split {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .side {
          width: 280px;
          padding-left: 19px;
        }
        .main {
          flex-grow: 1;
        }
        .tile-holder {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          max-width: 860px;
        }
        /* --------------- buttons */
        .btn-signin, .btn-join{
          display: block;
          text-align: center;
        } 	
        .mobile-signup-buttons{
          display:none;
        }

	    	@media only screen and (max-width: 600px){
          :host {
            margin-top:50px;
          }
          .side {
            width: 100vw;
            padding-left: 0px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .mobile-signup-buttons{
            display:block;
            margin: 12px;
          }
		    }
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <worbli-title title="Where Fintech & Blockchain Meet" sub-title="The future is near and we’re ready to take you there."></worbli-title>
      <div class="split">
        <div class="main">
          <div class="mobile-signup-buttons">
            <button class="btn-critical" on-click="_signIn">Sign In</button>
            <!-- <button class="btn-critical" on-click="_joinNow">Join Now</button> -->
          </div>
          <worbli-buy></worbli-buy>
          <div class="tile-holder">
            <worbli-tile title="WORBLI Financial District" subtitle="Learn about the next generation of financial services..." image="./images/home-page/top-left.jpg" link="/about/"></worbli-tile>
            <worbli-tile title="WORBLI Developer Resources" subtitle="Check out which BP produced the last block..." image="./images/home-page/top-right.jpg" link="/network/"></worbli-tile>
            <worbli-tile title="WORBLI Team & Partners" subtitle="Discover who’s building the WORBLI ecosystem..." image="./images/home-page/bottom-left.jpg" link="/team/"></worbli-tile>
            <worbli-tile title="WORBLI Professional Services" subtitle="Launch your dApp in safe hands..." image="./images/home-page/bottom-right.jpg" link="/profservices/"></worbli-tile>
          </div>
        </div>
        <div class="side">
          <!-- <worbli-snapshot api="/email/add"></worbli-snapshot> -->
          <worbli-support url="https://worbli.zendesk.com"></worbli-support>
          <worbli-telegram telegram="https://t.me/worblicommunity" medium="https://medium.com/@WORBLI"></worbli-telegram>
          <worbli-partners></worbli-partners>
        </div>
      </div>
      <worbli-footer name="footer"></worbli-footer>
    `;
  }
  _joinNow(){
    this.set('route.path', '/join');
  }
  _signIn(){
    this.set('route.path', '/signin');
  }
  _join() {
    this.dispatchEvent(new CustomEvent('overlay',{bubbles: true, composed: true, detail: {action: 'join'}}));
  }

} window.customElements.define('main-route', MainRoute);
