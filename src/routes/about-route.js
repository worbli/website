import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';
import '../components/side-bar/worbli-partners.js';
import '../components/side-bar/worbli-telegram.js';
import '../components/worbli-title.js';
class AboutRoute extends PolymerElement {
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
          margin-top: -32px;
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
      <worbli-title title="About"></worbli-title>
      <div class="split">
        <div class="main">
          <b>Here at WORBLI we are on a mission to develop the world’s most cost-effective and developer-friendly consumer and enterprise blockchain platform.</b></br></br>
          <p>To do this WORBLI is offering a user-friendly financial services ecosystem where users, developers, and businesses can access a huge range of powerful applications with limitless possibilities.<p></br>
          <iframe width="840" height="472" src="https://www.youtube.com/embed/QKAPbJbOdnU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h2>Where Fintech and Blockchain Meet</h2>
          <p>WORBLI’s platform is powered by EOSIO, allowing WORBLI to deliver, fast, compliant and secure applications, products and services to the world.</p></br>
          <p>WORBLI is in the process of creating new technology that enables the financial services and technology sectors to benefit from offering their customers instant transactions.</p>
          <iframe width="840" height="472" src="https://www.youtube.com/embed/3tcVg279HLg?start=788" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <div class="side">
          <worbli-partners></worbli-partners>
          <worbli-telegram></worbli-telegram>
        </div>
      </div>
      <worbli-footer name="footer"></worbli-footer>
    `;
  }
} window.customElements.define('about-route', AboutRoute);
