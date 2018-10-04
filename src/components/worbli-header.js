import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';

class WorbliHeader extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
      div {
          flex-grow: 1;
          color: var(--grey-text);
          font-size: 12px;
      }
      .container{
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          padding: 40px 0 40px 0;
          border-bottom: 1px solid var(--grey-keyline);
          margin-bottom: 40px;
      }
      ul {
        list-style: none;
      }
      li {
        display: inline;
      }
      li a {
        color: var(--blue-navigation);
        font-size: 16px;
        text-decoration: none;
        margin-right:20px;
        font-weight: 600;
      }
      </style>
      <div class="container">
        <div>WORBLI</div>
        <div>
          <ul>
            <li><a href="main">MAIN</a></li>
            <li><a href="about">ABOUT US</a></li>
            <li><a href="team">TEAM</a></li>
            <li><a href="roadmap">ROADMAP</a></li>
          </ul>
        </div>
        <div>
          <button type="button">SIGN IN</button>
          <button type="button">JOIN NOW</button>
        </div>
      </div>

  
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'worbli-header',
      },
    };
  }
}

window.customElements.define('worbli-header', WorbliHeader);