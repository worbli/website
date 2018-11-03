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
			      width:auto;
		    }
        .container-footer {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 19px 0 19px 0;
            border-top: 1px solid var(--grey-keyline);
            margin-top: 7px;
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
        @media only screen and (max-width: 600px){
          .container-footer {
            padding: 40px 0 63px 0;
            text-align: center;
            border-top: none;
            padding: 0;
          }
          .social-links ul {
            width: 315px;
            display: block !important;
          }
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
		@media only screen and (max-width: 600px){
			div{
				flex-direction:column;
				width:100%;
				margin:10px 0;
			}
			ul {
				display:flex;
			}
			ul li {
				display: inline-flex;
			}
		}
    .social {
      line-height: 0; 
      font-size: 0;
      color: transparent; 
      }
      </style>
      <div class="container-footer">
        <div>&copy; 2018 Worbli Pty Ltd. All rights reserved.<br>
        View our <a href="/terms/">Terms and Privacy Policy</a>
        </div>
        <div>491B River Valley Road #15-01 Valley Point </br>Singapore 248373</div>
        <div></div>
        <div class="social-links">
            <ul>
                <li><a class="social" href="https://www.facebook.com/worbli" target=”_blank”>Facebook</a></li>
                <li><a class="social" href="https://www.instagram.com/worbli.io/" target=”_blank”>Instagram</a></li>
                <li><a class="social" href="https://www.twitter.com/WORBLI" target=”_blank”>Twitter</a></li>
                <li><a class="social" href="https://www.linkedin.com/company/worbli" target=”_blank”>Linkedin</a></li>
                <li><a class="social" href="https://t.me/worblicommunity" target=”_blank”>Telegram</a></li>
                <li><a class="social" href="https://www.medium.com/@WORBLI" target=”_blank”>Medium</a></li>
                <li><a class="social" href="https://steemit.com/@worbli" target=”_blank”>Steemit</a></li>
                <li><a class="social" href="https://www.youtube.com/channel/UCzJHGK-1utdhj623VYHSprA" target=”_blank”>YouTube</a></li>
            </ul>
        </div>
      </div>
      <!-- Facebook Pixel Code -->
      <script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window,document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1608190052641676');
        fbq('track', 'PageView');
      </script>
    `;
  }
}

window.customElements.define('worbli-footer', WorbliFooter);