import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';
import '../components/side-bar/worbli-whitepaper.js';
import '../components/side-bar/worbli-partners.js';
import '../components/side-bar/worbli-telegram.js';
class VisionRoute extends PolymerElement {
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
        .main {
          flex-grow: 1;
          max-width: 850px;
        }
        h1 {
          color: var(--blue-text);
          font-weight: 200;
          margin-bottom: 12px;
        }
        b {
          padding-top: 24px;
          display: block;
          font-size: 20px;
          font-weight: 600;
        }
        iframe {
          margin-top: 50px;
		      margin-bottom: 50px;
		      width:100%;
        }
        .side {
          width: 280px;
          padding-left: 30px;
        }
        h2 {
          color: var(--blue-text);
          font-size: 21px;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .features {
          display: flex;
          flex-wrap: wrap; 
        }
        .left {
          flex-grow:1;
          max-width: 50%;
        }
        .right{
          flex-grow:1;
          max-width: 50%;
        }
        .features p {
          padding-right: 24px;
        }
        .features b {
          font-size: 16px;
          font-weight: 600;
        }
        @media only screen and (max-width: 600px){
          b, p, h2{
            margin: 12px;
          }
          h1{
            margin-top:5x;
          }

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
         <h2>WORBLI’s Vision</h2>
          <p>Through blockchain technology, WORBLI will be at the forefront of a technological revolution that spans the financial services sector, cloud computing, data analysis, security and storage, supply chain logistics, social networking, voting, healthcare, income inequality, accounting, contractual arrangements and so much more.</p></br>
          <p>WORBLI exists to remove all obstacles and to foster a positive environment that allows developers to design and build applications for users knowing the associated financial/ transactional services are preconfigured; and merchant processing is available for businesses to instantly convert digital and fiat currencies into any payment form they desire (GBP, USD or BTC, EOS, WBI, ETH, LTC, XRP, etc).</p><br>
          <p>Our vision stems from one simple reality. We envision a day in the near future, whereby everybody is able to pay for a product or service in any currency or cryptocurrency of their choice. Now, that would be amazing, and that's the world that WORBLI is bringing to you..</p></br></br>
           <h2>Key Features</h2>
          <div class="features">
            <div class="left">
              <b>Finance Focused</b> 
              <p>WORBLI’s network governance is designed to meet the regulatory needs of global financial services and financial technology businesses.</p>
              <b>Strong Community</b> 
              <p>EOSIO users and community members have created an environment that demands world-leading technology. WORBLI has a hungry and passionate audience and community.</b>
              <b>Tamper-proof Transactions</b>
              <p>The ledger is immutable and transactions can’t be altered.</p> 
              <b>Account recovery</b> 
              <p>Customer accounts can be recovered when private keys are lost.</p>
              <b>Enterprise Ready</b>
              <p>Businesses and corporations will benefit from predictable pricing models when planning to operate on the network.</p>
            </div>
            <div class="right">
              <b>Startup Friendly</b> 
              <p>Startups and Incubators will benefit from corporate advisory, exchange listings, merchant processing services, and events, to quickly launch and fund their projects.</p>
              <b>Secure</b> 
              <p>Individual accounts and customers wallets are secured by the blockchain.</p> 
              <b>Compliant</b>
              <p>Developers and businesses will benefit from full AML/KYC user account verification.</p>
              <b>Fast</b>
              <p>Traditional financial transactions and peer-to-peer token transfers happen in seconds.</p>
              <b>Superior infrastructure</b> 
              <p>Leveraging our independent EOS blockchain with features such as built-in developer tools and feeless transactions.</p>
            </div>
          </div>
          <iframe width="840" height="472" src="https://www.youtube.com/embed/ideiyhAlvOQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
               </div>
        <div class="side">
          <worbli-whitepaper></worbli-whitepaper>
          <worbli-partners></worbli-partners>
          <worbli-telegram></worbli-telegram>
        </div>
      </div>
      <worbli-footer name="footer"></worbli-footer>
    `;
  }
} window.customElements.define('vision-route', VisionRoute);