import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';
import '../components/worbli-profile.js';
import '../components/side-bar/worbli-partners.js';
import '../components/side-bar/worbli-producers.js';
import '../components/side-bar/worbli-telegram.js';

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
          <h1>Team</h1>
          <div class="team-holder">
              <worbli-profile name="domenic-thomas" title="Co-Founder + CEO" linkedin="domenic-thomas-5403676" profile="Domenic Thomas has an MBA from Johns Hopkins Carey Business School, and also has degrees from the University of Southern California in Environmental Studies and Political Science. Domenic has been consulting in Blockchain Technology since 2016 and is part of the EOS Community governance committee. Domenic has a particular interest in solutions to improve financial services efficiency."></worbli-profile>
              <worbli-profile name="craig-kellogg" title="Co-Founder + COO" linkedin="ckellogg" profile="Craig Kellogg has been a leader in banking technology and fintech firms for almost 20 years. He has led strategic initiatives for companies including Wells Fargo, US Bank, and GE Capital, with whom he was the Vice President of Technology. Craig has an MBA, BS in Information Technology, and is a certified IT Auditor and Project Manager."></worbli-profile>
              <worbli-profile name="robert-dewilder" title="Co-Founder + CTO" linkedin="robert-dewilder-6b83311/" profile="Robert Dewilder is a technology leader with 20 years of hands-on experience managing large-scale technical infrastructures and application development. Robert’s most recent role as Director, Global Information Technology at Sony Music where he’s responsible for systems architecture, engineering, and cloud infrastructure. Robert attended the University of Southern California where he completed a degree in Computer Science."></worbli-profile>
              <worbli-profile name="sam-russell" title="Co-Founder + EVP Marketing & Product" linkedin="samueljamesrussell" profile="Sam Russell is a Marketing, Partnerships and Commercial Strategist who has worked with CEOs, Marketing Teams and Agencies to plan and deliver smarter marketing and partnership outcomes. After spending nearly a decade working in Marketing and Commercial roles for the likes of Red Bull, Experian, Zomato and Peazie, Sam knows what truly engages audiences."></worbli-profile>
              <worbli-profile name="john-steuart" title="CFO" linkedin="johnsteuart" profile="Go to LinkedIn"></worbli-profile>
              <worbli-profile name="tom-bicknell" title="Legal Counsel" linkedin="tom-bicknell-25629b47" profile="Tom Bicknell is a partner at Pinsent Masons, a leading Financial Technology law firm. Tom is an experienced financial service and corporate insurance practitioner based in the Middle East."></worbli-profile>
              <worbli-profile name="sean-anderson" title="VP Commercial Relations" linkedin="seanxanderson/" profile="Go to LinkedIn"></worbli-profile>
              <worbli-profile name="todor-karaivanov" title="Director of Blockchain Governance" linkedin="todor-karaivanov-325468" profile="Go to LinkedIn"></worbli-profile>
              <worbli-profile name="laura-magnano" title="Head of Marketing" linkedin="lauramagnano" profile="Laura Magnano is a Marketing Specialist with over a decade of experience leading and mentoring digital marketers across a variety of global and local businesses within the technology, lifestyle, and beauty industries. She studied Counter Terrorism and Cyber Forensics. During her studies, she learned of her passion for psychology, consumerism, strategy, and data, which she combined to commence her marketing career."></worbli-profile>
              <worbli-profile name="mitchell-mahaffey" title="Commercial Partnerships & BP Relations" linkedin="mitchell-mahaffey" profile="Mitchell Mahaffey is a blockchain enthusiast and content creator with several years of experience in researching, writing and contributing in the distributed ledger community. Mitchell is the founder of Speak Crypto, a platform offering free courses, content and consulting which has been used as a critical resource for many individuals and start-ups looking to enter the space."></worbli-profile>
              <worbli-profile name="brooke-munson" title="Marketing Operations Manager" linkedin="brooke-munson" profile="Brooke Munson is a customer-facing sales and creative marketing and community specialist, with a keen interest in emerging banking and financial technologies. Upon finishing her MBA at 23, Brooke realised traditional business was not for her, and she had an eagerness to pursue new technologies and applying them to improve the way we live."></worbli-profile>
              <worbli-profile name="andrew-woodman" title="PR & Communications Manager" linkedin="adwoodman" profile="Andrew is an award-winning financial journalist and media professional with many years of experience in publishing, brand building, community engagement and event coordination across the UK, Hong Kong, and Japan."></worbli-profile>
              <worbli-profile name="ramoncito-abella" title="Creative Design" linkedin="ramoncito-abella-37424ba4" profile="Ramoncito Abella is a Creative Director who has worked at Catch, Australia’s Number 1 online retailer, helping to build a robust and consistent brand. His 10+ years of experience have given him a comprehensive understanding of the design elements, principles, and processes, from conceptualisation and brainstorming to a meticulous eye for detail in delivery."></worbli-profile>
              <worbli-profile name="martin-quiambao" title="Creative Design" linkedin="martin-quiambao-404588153" profile="Martin Quiambao graduated Don Honorio Ventura Technological State University with a Bachelor of Architecture. He is a talented Graphic Designer, Junior Architect and has been interested in Blockchain, Cryptocurrency, and its many applications."></worbli-profile>
              <worbli-profile name="soyoung-kim" title="Community Manager - Korea" linkedin="koyoungk" profile="Go to LinkedIn"></worbli-profile>
              <worbli-profile name="gideon-hornung" title="Marketing & Product Advisor" linkedin="gideon-hornung" profile="Gideon Hornung is a strategic communications professional and entrepreneur with 13+ years of experience working across product management, consumer insights, media, digital and social strategy. Gideon is the Connections Design Director at Publicis Groupe for the ‘Suncorp Group’, Australia’s 5th largest bank and largest insurance group."></worbli-profile>
              <worbli-profile name="fuzzy" title="Strategic Advisor" linkedin="" profile="Fuzzy is the cofounder of Bitshares, Whaleshare and Beyond Bitcoin. He is also one of the OGs of EOS. Fuzzy is a blockchain visionary, with a passion to bring blockchain mainstream leveraging the art of incentivisation."></worbli-profile>
              <worbli-profile name="naeem-al-obaidi" title="Marketing Advisor" linkedin="naeem-al-obaidi" profile="Naeem Al-Obaidi founded SnipersTube. SnipersTube is a private cryptocurrency investor group with over 26K members. Currently, Naeem lives in Hollywood, California, but travel around the United States promoting crypto and providing value to different communities interested in this industry, most recently keynoting at UCLA talking the future of Cryptocurrency and Blockchain."></worbli-profile>
              <worbli-profile name="william-hill" title="Technical Lead" linkedin="" profile="Go to LinkedIn"></worbli-profile>
              <worbli-profile name="peregrine-buckler" title="Product Manager" linkedin="peregrine-buckler" profile="Peregrine Buckler graduated from University of Applied Arts in Vienna with a MSc in Architecture, and Degrees in Product and Industrial Design. He is a Blockchain Evangelist and has co-founded a decentralized and autonomous index fund called Dune, which is the world’s first self amending node array. Based in Hong Kong, Peregrine has a vast network of blockchain experts."></worbli-profile>
              <worbli-profile name="chethan-rangaswamy" title="Product Marketing Manager" linkedin="chethanrangaswamy" profile="Chethan Rangaswamy is a results-driven marketing professional with experience working with International and Australia’s top eCommerce and Retail groups. His end-to-end marketing experience is underpinned by a solid understanding of integrated marketing strategy having launched both Deliveroo and OBike in Australia as their Head of Marketing over the past four years"></worbli-profile>
              <worbli-profile name="enrique-murua" title="Community Operations Manager" linkedin="enrique-m" profile="Enrique Murua is an Information and Communication Technology Student at the University of Guadalajara under a scholarship program offered by business magnate Carlos Slim. He is a supervisor in sales, QA in customer care, technical support and he’s been passionate about blockchain technology since 2014"></worbli-profile>
              <worbli-profile name="sofiya-slyshkova" title="HR Operations & Project Manager" linkedin="sofiya-s-1b95b14b" profile="Go to LinkedIn"></worbli-profile>
              <worbli-profile name="daqian-jiang" title="Operations Executive" linkedin="daqian" profile="Go to LinkedIn"></worbli-profile>
              <worbli-profile name="nathan-hollis" title="Solutions Architect & Supply Chain Advisor" linkedin="nathanhollis" profile="Go to LinkedIn"></worbli-profile>
              <worbli-profile name="charlie-wapshott" title="Commercial Relations" linkedin="charlie-wapshott-65a7a737" profile="Charlie Wapshott is a commercial strategist with a comprehensive understanding of the global fund management market. He has acquired highly technical and personable skills applying them to capital raisings/ IPOs. In June 2018, he won Australia’s coveted National Investment Business Development Manager of the Year, at the Young Leaders in Finance awards. Charlie holds a BSc in Psychology from Oxford Brookes and an MSc in Countering Organised Crime and Terrorism from University College London. He is soon to commence a PhD in Financial Technology."></worbli-profile>
              <worbli-profile name="mark-paterson" title="Fintech & Banking Advisor" linkedin="mark-paterson-aaab3841" profile="Go to LinkedIn"></worbli-profile>
              <worbli-profile name="timothy-brown" title="Strategic Advisor" linkedin="timothy-brown-41875013" profile="Timothy Brown has been heavily involved in Blockchain for the last 12 months, supporting various core teams including XVG and Rise in community development and exchange relations. Tim has a BA in International Business and Biotechnology and has worked as a mentor for the Young Achievers Australia Program helping students develop and liquidate their start up ventures through the program. He started his career with the Informa Group supporting businesses with their growth and strategy across a variety of industries including Medical, Financial Services, Energy, Technology and FMCG."></worbli-profile>
              <worbli-profile name="david-packham" title="Strategic Advisor & BP" linkedin="davidpackham" profile="David Packham has over 20 years experience in banking, asset management, and FinTech, working for Credit Suisse and Goldman Sachs. He’s the co-founder of EOS42, a top 10 Block Producer on EOSIO mainnet. David has an MSc from City University in London, a Hyperledger Developer and Blockchain Strategy qualification from the University of Oxford. He is also the co-founder of Chintai, a token leasing delegation market dApp for WORBLI and EOSIO."></worbli-profile>
              <worbli-profile name="michael-cowan" title="Strategic Advisor" linkedin="michaelcowan88" profile="Michael Cowan graduated from the University of York with a BSc in Astrophysics before specialising in business intelligence best practice for multinational organisations at Deloitte. Michael moved to Bloomberg to run analytics for their Reference Data products in EMEA and the past 18 months has been running analytics and data science for Swoon, a large UK retailer. In mid-September, Michael will be Leading Sales Enablement in EMEA for FIS Global."></worbli-profile>
              <worbli-profile name="jeff-anderson" title="Strategic Advisor" linkedin="jeff-anderson-3777aa13" profile="Jeff Anderson is a seasoned fintech professional with over 30 years serving in various Finance, Operations & IT positions with GE Capital. Jef held vital customer interfacing, back-office leadership, and business analytics positions as GE Capital grew to become a dominant force in the fleet management industry."></worbli-profile>
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
