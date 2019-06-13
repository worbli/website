import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';
import '../components/worbli-profile.js';
import '../components/side-bar/worbli-partners.js';
import '../components/side-bar/worbli-producers.js';
import '../components/side-bar/worbli-telegram.js';
import '../components/worbli-title.js';

class TeamRoute extends PolymerElement {
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
          padding-left: 2px;
        }
        .main {
          flex-grow: 1;
          max-width: 878px;
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
          margin-bottom: 12px;
        }
        worbli-profile {
          display: inline-block;
          margin: auto;
        }
        .advisors{
          padding-top: 40px;
          display:block;
        }
        .bp {
          width: 60px;
          height: 60px;
          padding: 16px;
          opacity: 0.5;
          -webkit-filter: grayscale(0.5);
          filter: grayscale(0.5);
        }
        .bps{
          display: flex;
          flex-wrap: wrap
        }
        @media only screen and (max-width: 600px){
          .main {
            margin-left: 12px;
            margin-top: 4px;
          }
          .side {
          width: 100vw;
          padding-left: 0px;
          }
          .team-holder{
            margin-right: 12px;
            display:flex;
            flex-wrap: wrap;
            justify-content:space-between;
          }
        }

      </style>
      <worbli-title title="Team"></worbli-title>
      <div class="split">
        <div class="main">
          <div class="team-holder">
              <worbli-profile name="domenic-thomas" title="Co-Founder + CEO" linkedin="domenic-thomas-5403676" profile="Domenic Thomas has an MBA from Johns Hopkins Carey Business School, and also has degrees from the University of Southern California in Environmental Studies and Political Science. Domenic has been consulting in Blockchain Technology since 2016 and is part of the EOS Community governance committee. Domenic has a particular interest in solutions to improve financial services efficiency."></worbli-profile>
              <worbli-profile name="robert-dewilder" title="Co-Founder + CTO" linkedin="robert-dewilder-6b83311/" profile="Robert Dewilder is a technology leader with 20 years of hands-on experience managing large-scale technical infrastructures and application development. Robert's most recent role as Director, Global Information Technology at Sony Music where he's responsible for systems architecture, engineering, and cloud infrastructure. Robert attended the University of Southern California where he completed a degree in Computer Science."></worbli-profile>
              <worbli-profile name="william-hill" title="Technical Lead" linkedin="" profile="Go to LinkedIn"></worbli-profile>
              <worbli-profile name="tom-bicknell" title="Legal Counsel" linkedin="tom-bicknell-25629b47" profile="Tom Bicknell is a partner at Pinsent Masons, a leading Financial Technology law firm. Tom is an experienced financial service and corporate insurance practitioner based in the Middle East."></worbli-profile>
              <worbli-profile name="sean-anderson" title="VP Commercial Relations" linkedin="seanxanderson/" profile="Sean started out as a graphic designer and photographer over 25 years ago but quickly developed a taste for Marketing, Strategy, and Sales. His key focus over the past 20 years has been developing and leading teams to create the right message for the right target. Over the past two years, as a consultant, Sean has worked with companies in the following industries, Blockchain, Logistics, eLearning, Marketing and Mining. His focus as a Consultant has been on business development, messaging and marketing. The efforts of Sean and his team directly led to his clients generating over a billion dollars in revenue."></worbli-profile>
              <worbli-profile name="todor-karaivanov" title="Director of Blockchain Governance" linkedin="todor-karaivanov-325468" profile="Todor Karaivanov has a diverse professional background, including solid experience in the web hosting industry, information security, and video game design and development. Todor has a keen interest in economics, game theory, governance, cryptography, privacy, digital identity and many other topics that have been recently quite hot in the blockchain community. He has proposed and taken part in various EOS-related governance designs, including the Worker Proposal System, on which he worked together with Domenic."></worbli-profile>
              <worbli-profile name="mitchell-mahaffey" title="Commercial Partnerships & BP Relations" linkedin="mitchell-mahaffey" profile="Mitchell Mahaffey is a blockchain enthusiast and content creator with several years of experience in researching, writing and contributing in the distributed ledger community. Mitchell is the founder of Speak Crypto, a platform offering free courses, content and consulting which has been used as a critical resource for many individuals and start-ups looking to enter the space."></worbli-profile>
              <worbli-profile name="fuzzy" title="Strategic Advisor" linkedin="" profile="Fuzzy is the cofounder of Bitshares, Whaleshare and Beyond Bitcoin. He is also one of the OGs of EOS. Fuzzy is a blockchain visionary, with a passion to bring blockchain mainstream leveraging the art of incentivisation."></worbli-profile>
              <worbli-profile name="david-packham" title="Strategic Advisor & BP" linkedin="davidpackham" profile="David Packham has over 20 years experience in banking, asset management, and FinTech, working for Credit Suisse and Goldman Sachs. He's the co-founder of EOS42, a top 10 Block Producer on EOSIO mainnet. David has an MSc from City University in London, a Hyperledger Developer and Blockchain Strategy qualification from the University of Oxford. He is also the co-founder of Chintai, a token leasing delegation market dApp for WORBLI and EOSIO."></worbli-profile>
              <worbli-profile name="valentin-ivanov" title="Software Developer" linkedin="" profile="Profile"></worbli-profile>            
              <worbli-profile name="matt-haynes" title="Operations Manager" linkedin="matthew-haynes-93a9797b" profile="Profile"></worbli-profile>
              <worbli-profile name="bernard-gumbs" title="Director Of Finance And Accounting" linkedin="bernard-gumbs-4b640611" profile="Director Of Finance And Accounting"></worbli-profile>        
            </div>
        </div>
        <div class="side">
          <worbli-partners></worbli-partners>
          <worbli-producers></worbli-producers>
          <worbli-telegram></worbli-telegram>
      </div>
      </div>
      <worbli-footer name="footer"></worbli-footer>
    `;
  }
} window.customElements.define('team-route', TeamRoute);
