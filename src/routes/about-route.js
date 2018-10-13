import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';

class AboutRoute extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
        iframe {
          margin-top: 50px;
          margin-bottom: 50px;
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
          max-width: 850px;
        }
        .container {
          position: relative;
          background: #FFF;
          border-radius: 3px;
          box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -webkit-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -moz-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          margin-bottom: 18px;
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
          font-weight: 600;
          margin-bottom: 12px;
        }
        h2 {
          color: var(--blue-text);
          font-size: 21px;
          font-weight: 600;
          margin-bottom: 12px;
        }

      </style>
      <div class="split">
        <div class="main">
          <h1>About</h1>
          <p>WORBLI is a financial services network (FSN) where enterprises and individuals can access a broad range of services.</p>
          <iframe width="840" height="472" src="https://www.youtube.com/embed/ideiyhAlvOQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <h2>Our Vision</h2>
          <p>We believe blockchain technology is going to considerably improve financial services, cloud computing, data analysis, security and storage, supply chain logistics, social networks, voting, healthcare, income inequality, accounting, contractual arrangements and so much more, and WORBLI will be at the forefront of product innovation.</p>
        </div>
        <div class="side">
        <div class="container">
            <div class="title">White Paper</div>
        </div>
        <div class="container">
            <div class="title">Our Partners</div>
        </div>
        </div>
      </div>
      <worbli-footer name="footer"></worbli-footer>
    `;
  }
} window.customElements.define('about-route', AboutRoute);
