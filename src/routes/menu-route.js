import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';

class MenuRoute extends PolymerElement {
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
          max-width: 770px;
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
          font-weight: 200;
          margin-bottom: 12px;
        }
        h2 {
          color: var(--blue-text);
          font-size: 21px;
          font-weight: 600;
          margin-top: 12px;
          margin-bottom: 12px;
        }
        img{
          width: 130px;
          display: block;
          margin-left: auto;
          margin-right: auto;
          margin-top: 30px;
          margin-bottom: 50px;
        }
        ul {
          list-style-type: none;
        }
        a {
          text-align: center;
          display: block;
          line-height: 50px;
          text-decoration: none;
          color: var(--blue-text);
          margin-bottom: 6px;
          border-bottom: 1px solid #DBE2EE;
          font-weight: 600;
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

        <img src="./images/logo.svg">
        <ul>
        <a href="/"><li>Home</li></a>
        <a href="/about"><li>About</li></a>
        <a href="/vision"><li>Vision</li></a>
        <a href="/team"><li>Team</li></a>
        <a href="/roadmap"><li>Roadmap</li></a>
        <a href="/network"><li>Network</li></a>
        <a href="https://worbli.zendesk.com/hc/en-us"><li>Support</li></a>

        </ul>
   
    `;
  }
} window.customElements.define('menu-route', MenuRoute);
