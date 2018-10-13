import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';

class WorbliFooter extends PolymerElement {
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
            padding: 40px 0 170px 0;
            border-top: 1px solid var(--grey-keyline);
            margin-top: 40px;
        }
        a {
            color: var(--grey-text);
            text-decoration: none;
        }
        ul {
            list-style: none;
            text-align: right;
        }
        ul li {
            display: inline;
        }
        ul li a{
            display: inline-block;
            width: 30px;
            height: 30px;
        }

        li:nth-child(1) a {background: url('./images/sprite.png') 0 -120px;}
        li:nth-child(2) a {background: url('./images/sprite.png') -35px -120px;}
        li:nth-child(3) a {background: url('./images/sprite.png') -72px -120px;}
        li:nth-child(4) a {background: url('./images/sprite.png') -112px -120px;}
        li:nth-child(5) a {background: url('./images/sprite.png') -149px -120px;}
        li:nth-child(6) a {background: url('./images/sprite.png') -184px -120px;}
        li:nth-child(7) a {background: url('./images/sprite.png') -218px -120px;}
        li:nth-child(8) a {background: url('./images/sprite.png') -250px -120px;}
        li:nth-child(1) a:hover {background: url('./images/sprite.png') 0 -80px;}
        li:nth-child(2) a:hover {background: url('./images/sprite.png') -35px -80px;}
        li:nth-child(3) a:hover {background: url('./images/sprite.png') -72px -80px;}
        li:nth-child(4) a:hover {background: url('./images/sprite.png') -112px -80px;}
        li:nth-child(5) a:hover {background: url('./images/sprite.png') -149px -80px;}
        li:nth-child(6) a:hover {background: url('./images/sprite.png') -184px -80px;}
        li:nth-child(7) a:hover {background: url('./images/sprite.png') -218px -80px;}
        li:nth-child(8) a:hover {background: url('./images/sprite.png') -250px -80px;}
      </style>
      <div class="container">
        <div>&copy; 2018 Worbli Pty Ltd. All rights reserved.</div>
        <div><a href="mailto:hello@worbli.io">hello@worbli.io</a></div>
        <div>5865 Neal Ave N Ste 175</br> Stillwater, MN 55082</div>
        <div class="social-links">
            <ul>
                <li><a href="https://www.facebook.com/worbli" target=”_blank”></a></li>
                <li><a href="https://www.instagram.com/worbli.io/" target=”_blank”></a></li>
                <li><a href="https://www.twitter.com/WORBLI" target=”_blank”></a></li>
                <li><a href="https://www.linkedin.com/company/worbli" target=”_blank”></a></li>
                <li><a href="https://t.me/worblicommunity" target=”_blank”></a></li>
                <li><a href="https://www.medium.com/@WORBLI" target=”_blank”></a></li>
                <li><a href="https://steemit.com/@worbli" target=”_blank”></a></li>
                <li><a href="https://www.youtube.com/channel/UCzJHGK-1utdhj623VYHSprA" target=”_blank”></a></li>
            </ul>
        </div>
      </div>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'worbli-footer',
      },
    };
  }
}

window.customElements.define('worbli-footer', WorbliFooter);