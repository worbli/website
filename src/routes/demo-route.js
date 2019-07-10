import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';
import '../components/side-bar/worbli-partners.js';
import '../components/side-bar/worbli-telegram.js';
import '../components/worbli-title.js';
class DemoRoute extends PolymerElement {
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
        input {
            border: 1px solid #b3b3b3;
            padding: 12px;
            border-radius: 3px;
            width: 250px;
            margin-top: 1px;
            margin-bottom: 20px;
        }
        .formbutton {
            height: 48px;
            width: 276px;
            background-color: #3296df;
            color: white;
            font-size: 17px;
            font-weight: 700;
            border: 1px solid white;
            border-radius: 6px;
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
      <worbli-title title="Demo Day"></worbli-title>
      <div class="split">
        <div class="main">
          <b>Demo Day promo for the Crypto-Fiat Gateway</b></br></br>
          <p>Like the Sasquatch, Blockchain IBC has been very elusive, however, on July 18th at 11:00 AM CST, Transledger and WORBLI will be doing a demo of 4 awesome IBC products…<p></br>
        <ul>
            <li>The Crypto-Fiat Gateway Testnet: Demonstrating a digitized fiat purchase</li>
            <li>Peer to Peer Exchange: Direct connection and embedded in the dashboard with a demo of trade, allowing funding with redemption</li>
            <li>The Wallet: Transfer tokens easily peer to peer similar to PayPal AND a full key storage solution.</li>
            <li>Optional Membership Directory System</li>
        </ul>
        <br>
        <b>Register for reminders about the event</b></br>
        <form>
            Name:<br>
            <input type="text" name="firstname">
            <br>
            Email:<br>
            <input type="text" name="lastname">
            <br>
            <input type="submit" value="Register" class="formbutton">
        </form> 
       </div>
        <div class="side">
          <worbli-partners></worbli-partners>
          <worbli-telegram></worbli-telegram>
        </div>
      </div>
      <worbli-footer name="footer"></worbli-footer>
    `;
  }
} window.customElements.define('demo-route', DemoRoute);
