import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';
import '../components/worbli-rpc.js';
import '../components/network-monitor/block-info.js';
import '../components/network-monitor/block-producers.js';


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
          padding-left: 30px;
        }
        .main {
          flex-grow: 1;
        }
        .container {
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
        h1 {
          color: var(--blue-text);
          font-size: 50px;
        }
        .white-paper {
          margin-left: 25px;
          margin-top: 30px;
          margin-bottom: 12px;
        }
        .bottom a:hover {
          display: block;
          color: var(--green-text);
          text-decoration: underline;
        }
        .bottom {
          color: var(--blue-text);
          display: block;
          padding-top: 20px;
          padding-bottom: 20px;
          font-size: 11px;
          margin-left: 25px;
          text-decoration: none;
          font-style: italic;
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
        }
        .holder{
          margin-top: 24px;
          display: flex;
          flex-wrap: wrap;
          max-width: 840px
        }
        .square {
          width: 390px;
          min-height: 400px;
          margin-right: 24px;
          margin-bottom: 24px;
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
          background-image: url("./images/home-page/bottom-right.png");
          background-position: center; 
          background-repeat: no-repeat;
          background-size: cover;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;

        }
        .pic3 {
          background-image: url("./images/home-page/bottom-left.png");
          background-position: center; 
          background-repeat: no-repeat;
          background-size: cover;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;

        }
        .pic2 {
          background-image: url("./images/home-page/top-right.png");
          background-position: center; 
          background-repeat: no-repeat;
          background-size: cover;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;

        }
        .pic1 {
          background-image: url("./images/home-page/top-left.png");
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
        .faq-text {
          font-size: 13px;
          font-weight: 200;
          line-height: 16px;
          padding: 12px;
        }
        .support-icon{
          padding-left: 20px;
        }
        .bottom-space {
          padding-bottom: 20px;
        }
  
      </style>

      <!-- Google Tag Manager (noscript) -->
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KGVQG5T"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <!-- End Google Tag Manager (noscript) -->

      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-117118714-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-117118714-1');
      </script>


      <div class="split">
        <div class="main">
          <h1>Making blockchain legit.</h1>
          <p>The future is near and we’re ready to take you there.</p>
          <div class="holder">

     
          <div class="container square" on-click="_join">
              <div class="pic pic1"></div>
              <div class="footer">
                <h4>Claim your Sharedrop</h4>
                <div class="description">If you held EOS on 7th September, 1159PM UTC...</div>
              </div>
            </div>
       

          <a href="/about/" class="box-link">
            <div class="container square">
              <div class="pic pic2"></div>
              <div class="footer">
                <h4>WORBLI Financial District</h4>
                <div class="description">Learn about the next generation of financial services...</div>
              </div>
            </div>
          </a>

          <a href="/team/" class="box-link">
            <div class="container square">
              <div class="pic pic3"></div>
              <div class="footer">
                <h4>WORBLI Team & Partners</h4>
                <div class="description">Discover who’s building the WORBLI ecosystem...</div>
              </div>
            </div>
          </a>

          <a href="/network/" class="box-link">
            <div class="container square">
              <div class="pic pic4"></div>
              <div class="footer">
                <h4>Developer Resources</h4>
                <div class="description">Check out which BP produced the last block...</div>
              </div>
            </div>
          </div>
          </a>
        </div>
        <div class="side">
        <div class="container">
            <div class="title">FAQ & Support</div>
            <p class="faq-text">Find out the answers to all of your questions here...</p>
            <img src="./images/home-page/support-icon.png" width="230px" class="support-icon">
            <a href="https://worbli.zendesk.com" class="button" target="_blank">Take me there...</a>
            <p class="bottom-space"></p>
        </div>

        <div class="container">
            <div class="title">White Paper</div>
            <img src="./images/white-paper.png" alt="white paper" class="white-paper">
            <a href="https://portal-test.worbli.io/esm-bundled/images/white-papers/worbli-short-paper.pdf" class="button">Download Short Paper</a>
            <a href="https://portal-test.worbli.io/esm-bundled/images/white-papers/worbli-whitepaper.pdf" class="bottom">Or download our full White Paper</a>
        </div>

        <div class="container">
            <div class="title">Telegram</div>
            <p class="faq-text">Chat live with the WORBLI team</p>
            <a href="https://t.me/worblicommunity" class="button" target="_blank">Open Telegram</a>
            <p class="bottom-space"></p>
        </div>

        </div>
      </div>
      <worbli-footer name="footer"></worbli-footer>
    `;
  }

  _join() {
    this.dispatchEvent(new CustomEvent('overlay',{bubbles: true, composed: true, detail: {action: 'join'}}));
  }

} window.customElements.define('main-route', MainRoute);
