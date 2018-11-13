import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-location.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';
import '../components/side-bar/worbli-telegram.js';
import '../components/side-bar/worbli-whitepaper.js';
import '../components/side-bar/worbli-support.js';
import '../components/side-bar/worbli-snapshot.js';
import '../components/worbli-subscribe.js';
class MainRoute extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
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
        h1 {
          color: var(--blue-text);
          font-size: 33px;
          font-weight: 500;
          line-height: 0.7;
          margin-top: 10px;
        }
        .tile-holder {
          display: flex;
          flex-wrap: wrap;
          max-width: 860px;
        }
        .square {
          width: 420px;
          margin-right: 19px;
          margin-bottom: 19px;
        }
        .no-right {
          margin-right: 0px;
        }
        .footer{
          border-top: 1px solid #f5f5f5;
          padding: 12px;
        }
        .footer span{
          margin-top: 12px;
          font-size: 12px;
          font-weight: 200;
        }
        .pic {
          height: 333px;
        }
        h4 {
          font-size: 13px;
          font-weight: 600;
          line-height: 16px;
          margin-bottom: 6px;
        }
        .description {
          font-size: 13px;
          font-weight: 200;
          line-height: 18px;
        }
        .pic4 {
          background-image: url("./images/home-page/bottom-right.jpg");
          background-position: center; 
          background-repeat: no-repeat;
          background-size: cover;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }
        .pic3 {
          background-image: url("./images/home-page/bottom-left.jpg");
          background-position: center; 
          background-repeat: no-repeat;
          background-size: cover;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }
        .pic2 {
          background-image: url("./images/home-page/top-right.jpg");
          background-position: center; 
          background-repeat: no-repeat;
          background-size: cover;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }
        .pic1 {
          background-image: url('./images/home-page/top-left.jpg');
          background-position: center; 
          background-repeat: no-repeat;
          background-size: cover;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }
        .box-link {
          text-decoration: none;
          color: #393E46;
        } 
        .btn-signin {
          display: block;
          text-align: center;
        } 
        .btn-join {
          display: block;
          text-align: center;
		    }		
        .mobile-signup-buttons{
          display:none;
        }
        .tag{
          line-height: 3.5;
        }
        .next {
          width: 20px;
          position: absolute;
          right: 23px;
          bottom: 21px;
          opacity: 0.5;
        }
        worbli-snapshot{
          margin-top: 81px;
        }
	    	@media only screen and (max-width: 600px){
          worbli-snapshot{
          margin-top:0px;
        }
			  .mobile-signup-buttons{
				  display:block;
          margin: 12px;
			  }
        :host {
          margin-top:50px;
        }
        h1 {
          font-size: 20px;
          margin: 12px 12px 0 12px;
          line-height: 2;
        }
        .tag{
          margin: 0 11px 20px 12px;
          line-height: 1.5;
        }
        .square {
          width: 100vw;
          margin-right: 0px;
        }
        .side {
          width: 100vw;
          padding-left: 0px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        p {
          font-size: 11px;
        }
        .container {
          border-radius:0px;
        }
        .pic1{
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
        }
        .pic2{
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
        }
        .pic3,{
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
        }
        .pic4{
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
        }
        .pic {
          height: 218px;
        }
		}
      </style>

      <!-- Google Tag Manager (noscript) -->
      <!-- <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KGVQG5T"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> -->
      <!-- End Google Tag Manager (noscript) -->

      <!-- Global site tag (gtag.js) - Google Analytics -->
      <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=UA-117118714-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-117118714-1');
      </script> -->

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <div class="split">
        <div class="main">


          <h1>Where Fintech & Blockchain Meet</h1>
          <p class="tag">The future is near and we’re ready to take you there.</p>

          <div class="mobile-signup-buttons">
            <button class="btn-critical" on-click="_signIn">Sign In</button>
            <button class="btn-critical" on-click="_joinNow">Join Now</button>
          </div>


          <worbli-subscribe></worbli-subscribe>
          <div class="tile-holder">

          <a href="/about/" class="box-link">
            <div class="container square">
              <div class="pic pic1"></div>
              <div class="footer">
              <h4>WORBLI Financial District</h4>
              <div class="description">Learn about the next generation of financial services...</div>
              <img src="./images/next.svg" class="next"> 
              </div>
            </div>
          </a>
        
          <a href="/network/" class="box-link">
          <div class="container square no-right">
            <div class="pic pic2"></div>
            <div class="footer">
            <h4>WORBLI Developer Resources</h4>
            <div class="description">Check out which BP produced the last block...</div>
            <img src="./images/next.svg" class="next"> 
            </div>
          </div>
          </a>

            <a href="/team/" class="box-link">
              <div class="container square">
                <div class="pic pic3"></div>
                <div class="footer">
                  <h4>WORBLI Team & Partners</h4>
                  <div class="description">Discover who’s building the WORBLI ecosystem...</div>
                  <img src="./images/next.svg" class="next"> 
                </div>
              </div>
            </a>

            <a href="/profservices/" class="box-link ">
              <div class="container square no-right ">
                <div class="pic pic4"></div>
                  <div class="footer"><h4>WORBLI Professional Services</h4><div class="description">Launch your dApp in safe hands</div></div>
                  <img src="./images/next.svg" class="next"> 
                </div>
              </div>
            </a>

        </div>
        
        <div class="side">
          <worbli-snapshot></worbli-snapshot>
          <worbli-support></worbli-support>
          <worbli-whitepaper></worbli-whitepaper>
          <worbli-telegram></worbli-telegram>
          
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
