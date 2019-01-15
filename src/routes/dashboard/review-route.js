import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';
import '../../components/worbli-footer.js';
import '../../components/side-bar/worbli-snapshot.js';
import '@polymer/app-route/app-location.js';
import '../../components/side-bar/worbli-dashnav.js';
import '../../worbli-env.js';

class ReviewRoute extends PolymerElement {
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
        .side {
          width: 280px;
          padding-right: 30px;
        }
        .main {
          max-width: 850px;
          flex-grow: 1;
          background: #FFF;
          border-radius: 3px;
          box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -webkit-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -moz-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
        }
        .footer {
          display: block;
          height: 63px;
          border-top: 1px solid #f5f5f5;
          text-align: right;
        }
        h1 {
          color: var(--blue-text);
          font-weight: 600;
          margin-bottom: 12px;
          font-size: 13px;
          border-bottom: 1px solid #f5f5f5;
          padding: 12px;
        }
        button {
          display: inline-block;
          vertical-align: middle;
          background: #4f7eb8;
          border: 1px solid #4b77ad;
          border-radius: 3px;
          box-shadow: none;
          text-shadow: none;
          color: #fff;
          font-weight: bold;
          font-size: 12px;
          padding: 0 13px;
          line-height: 29px;
          text-align: center;
          margin: 16px;
          cursor: pointer;
        }
        .input-area {
          display: flex;
        }
        .section-name {
          display: inline-block;
          min-width: 200px;
          padding: 12px;
          font-size: 15px;
          color: #6f727d;
          font-weight: normal;
        }
        .form-inputs {
          display: inline-block;
          padding: 12px;
        }
        .label{
          font-size: 12px;
          color: #393d4d;
          font-weight: 600; 
          text-transform: capitalize; 
        }
        .comment {
          display: block;
          line-height: 18px;
          color: #9da1ab;
          padding: 9px 0 0;
          margin: 0 0 -2px 0;
          font-size: 12px;
        }
        hr {
          display: block;
          border-top: 1px solid #f5f5f5;
        }
        .error{
          color: #E54D53;
        }
        .intro{
          padding: 12px;
        }
        .upper {
          text-transform: uppercase;
        }

        @media only screen and (max-width: 600px){
          .split {
            margin-top: 40px;
          }
          .section-name{
            width:0px;
            height:0px;
          }
          .section-name {
            display: none;
          }
          .side {
            width: 100vw;
            padding-right: 0px;
          }
        }

      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <worbli-env api-path="{{apiPath}}""></worbli-env>
      <div class="split">
        <div class="side">
          <worbli-dashnav></worbli-dashnav>
        </div>
        <div class="main">
          <h1>Review</h1>
          <p class="intro">Please review your applicant data and make sure that it is correct before submitting the application. We will be checking the validity of your identity against public record databases based on the documents you submitted. Thank you!</p>
          <hr>
          <div class="input-area">
            <div class="section-name">Applicant</div>
            <div class="form-inputs">
              <p class="label">{{nameFirst}} {{nameLast}} </p>
            </div>
          </div>
          <hr>
          <div class="input-area">
            <div class="section-name">Location</div>
              <div class="form-inputs">
                <p class="label">[[addressCountry]]</p>
              </div>
            </div>
            <hr>
            <div class="input-area">
              <div class="section-name">Date Of Birth</div>
              <div class="form-inputs">
                <p class="label"> [[dobDay]]/[[dobMonth]]/[[dobYear]] </p>
              </div>
            </div>
            <hr>
            <div class="input-area">
              <div class="section-name">Gender</div>
              <div class="form-inputs">
                <p class="label"> [[gender]] </p>
              </div>
            </div>
            <hr>
            <div class="input-area">
              <div class="section-name">Documents</div>
              <div class="form-inputs">
                <p class="label"> [[documentCount]] </p>
                <small class="comment error">[[documentCountError]]</small>
              </div>
            </div>
            <div class="footer">
              <button type="button" on-click="_submitApplication">[[btnText]]</button>
              <small class="comment">[[patient]]</small>
            </div>
        </div>
      </div>
      </br></br>
      <worbli-footer name="footer"></worbli-footer>
    `;
  }

  static get properties() {
    return {
      complete: {
        type: Boolean,
        value: false,
      },
      started: {
        type: Boolean,
        value: false,
      },
      readonly: {
        type: Text,
      },
      apiPath: {
        type: Text,
      },
      kycToken2: {
        type: Text,
      },
      showIframe: {
        type: Boolean,
        value: false,
      },
      route: {
        type: Object,
        observer: '_routeChanged'
      },
      btnText: {
        type: Text,
        value: 'Submit Application'
      },
      patient: {
        type: Text,
      },
      btnImage: {
        type: Boolean,
        value: false,
      },
      addressCountryCode: {
        type: Text,
        observer: '_addressCountry'
      }
    };
  }

  _submitApplication(){
    this.patient = "Please be patient";
    this.btnText = "Submitting...";
    this.btnImage = true;
    if(this.documentCount >= 1){
      const token = localStorage.getItem("token");
      const url = `${this.apiPath}/kyc/check/`;
      fetch(url, {
        method: 'GET',
        headers: {'Authorization': `Bearer ${token}`},
      })
      .then((response) => {return response.json()})
      .then(response => {
        if(response.data === true){
          const token = response.token;
          localStorage.setItem("token", token);
          this.set('route.path', '/dashboard/status');
          this.btnText = 'Submit Application';
          this.btnImage = false;
        }
      })
    } else {
      this.btnText = 'Submit Application';
      this.documentCountError = "Return to your application and add your documents"
    }
  }
  _routeChanged(){
    window.scrollTo(0,0);
    if(this.route.path === '/dashboard/review/' || this.route.path === '/dashboard/review')
    this._getData();
  }


  _getData(){
    this.documentCountError = ""
    const token = localStorage.getItem("token");
    if(token) {
      const url = `${this.apiPath}/user/profile/`;
      fetch(url, {
        method: 'GET',
        headers: {'Authorization': `Bearer ${token}`},
      })
      .then((response) => {return response.json()})
      .then(response => {
        this.documentCount = response.image_count;
        if(response.data === true){
          this.nameFirst = response.profile.name_first || "";
          this.nameLast = response.profile.name_last || "";
          this.addressCountryCode = response.profile.address_country || "";
          this.dobYear = response.profile.date_birth_year || "";
          this.dobMonth = response.profile.date_birth_month || "";
          this.dobDay = response.profile.date_birth_day || "";
          this.gender = response.profile.gender || "";
        }
      })
      .catch(error => {
        this.btnText = 'Submit Application';
        console.log(error)
      });
    } else {this.set('route.path', '/')}
  }

  _addressCountry(){
    console.log(this.addressCountryCode.toUpperCase())
    switch (this.addressCountryCode.toUpperCase()) {
      case 'AFG':
        this.addressCountry = "Afghanistan";
        break;
      case 'ALA':
        this.addressCountry = "Åland Islands";
        break;
      case 'ALB':
        this.addressCountry = "Albania";
        break;
      case 'DZA':
        this.addressCountry = "Algeria";
        break;
      case 'AND':
        this.addressCountry = "Andorra";
        break;
      case 'ATG':
        this.addressCountry = "Antigua and Barbuda";
        break;
      case 'ARG':
        this.addressCountry = "Argentina";
        break;
      case 'ARM':
        this.addressCountry = "Armenia";
        break;
      case 'ABW':
        this.addressCountry = "Aruba";
        break;
      case 'AUS':
        this.addressCountry = "Australia";
        break;
      case 'AUT':
        this.addressCountry = "Austria";
        break;
      case 'AZE':
        this.addressCountry = "Azerbaijan";
        break;
      case 'BHR':
        this.addressCountry = "Bahrain";
        break;
      case 'BRB':
        this.addressCountry = "Barbados";
        break;
      case 'BLR':
        this.addressCountry = "Belarus";
        break;
      case 'BEL':
        this.addressCountry = "Belgium";
        break;
      case 'BLZ':
        this.addressCountry = "Belize";
        break;
      case 'BEN':
        this.addressCountry = "Benin";
        break;
      case 'BMU':
        this.addressCountry = "Bermuda";
        break;
      case 'BTN':
        this.addressCountry = "Bhutan";
        break;
      case 'BIH':
        this.addressCountry = "Bosnia and Herzegovina";
        break;
      case 'BRA':
        this.addressCountry = "Brazil";
        break;
      case 'BRN':
        this.addressCountry = "Brunei Darussalam";
        break;
      case 'BGR':
        this.addressCountry = "Bulgaria";
        break;
      case 'BFA':
        this.addressCountry = "Burundi";
        break;
      case 'BDI':
        this.addressCountry = "Antigua and Barbuda";
        break;
      case 'KHM':
        this.addressCountry = "Cambodia";
        break;
      case 'CMR':
        this.addressCountry = "Cameroon";
        break;
      case 'CAN':
        this.addressCountry = "Canada";
        break;
      case 'CYM':
        this.addressCountry = "Cayman Islands";
        break;
      case 'CAF':
        this.addressCountry = "Central African Republic";
        break;
      case 'CHL':
        this.addressCountry = "Chile";
        break;
      case 'CHN':
        this.addressCountry = "China";
        break;
      case 'COL':
        this.addressCountry = "Colombia";
        break;
      case 'COG':
        this.addressCountry = "Congo";
        break;
      case 'COK':
        this.addressCountry = "Cook Islands";
        break;
      case 'CRI':
        this.addressCountry = "Costa Rica";
        break;
      case 'CIV':
        this.addressCountry = "Croatia";
        break;
      case 'HRV':
        this.addressCountry = "Bermuda";
        break;
      case 'CUB':
        this.addressCountry = "Cuba";
        break;
      case 'CYP':
        this.addressCountry = "Cyprus";
        break;
      case 'CZE':
        this.addressCountry = "Czech Republic";
        break;
      case 'DNK':
        this.addressCountry = "Denmark";
        break;
      case 'DJI':
        this.addressCountry = "Djibouti";
        break;
      case 'DMA':
        this.addressCountry = "Dominica";
        break;
      case 'DOM':
        this.addressCountry = "Dominican Republic";
        break;
      case 'ECU':
        this.addressCountry = "Ecuador";
        break;
      case 'EGY':
        this.addressCountry = "Egypt";
        break;
      case 'SLV':
        this.addressCountry = "El Salvador";
        break;
      case 'GNQ':
        this.addressCountry = "Equatorial Guinea";
        break;
      case 'EST':
        this.addressCountry = "Estonia";
        break;
      case 'ETH':
        this.addressCountry = "Ethiopia";
        break;
      case 'FRO':
        this.addressCountry = "Faroe Islands";
        break;
      case 'FJI':
        this.addressCountry = "Fiji";
        break;
      case 'FIN':
        this.addressCountry = "Finland";
        break;
      case 'FRA':
        this.addressCountry = "France";
        break;
      case 'GAB':
        this.addressCountry = "Gabon";
        break;
      case 'GEO':
        this.addressCountry = "Georgia";
        break;
      case 'DEU':
        this.addressCountry = "Germany";
        break;
      case 'GIB':
        this.addressCountry = "Gibraltar";
        break;
      case 'GRC':
        this.addressCountry = "Greece";
        break;
      case 'GRD':
        this.addressCountry = "Grenada";
        break;
      case 'GTM':
        this.addressCountry = "Guatemala";
        break;
      case 'GGY':
        this.addressCountry = "Guernsey";
        break;
      case 'GIN':
        this.addressCountry = "Guinea";
        break;
      case 'HND':
        this.addressCountry = "Honduras";
        break;
      case 'HKG':
        this.addressCountry = "Hong Kong";
        break;
      case 'HUN':
        this.addressCountry = "Hungary";
        break;
      case 'ISL':
        this.addressCountry = "Iceland";
        break;
      case 'IND':
        this.addressCountry = "India";
        break;
      case 'IDN':
        this.addressCountry = "Indonesia";
        break;
      case 'IRN':
        this.addressCountry = "Iran, Islamic Republic of";
        break;
      case 'IRL':
        this.addressCountry = "Ireland";
        break;
      case 'IMN':
        this.addressCountry = "Isle of Man";
        break;
      case 'ISR':
        this.addressCountry = "Israel";
        break;
      case 'ITA':
        this.addressCountry = "Italy";
        break;
      case 'JAM':
        this.addressCountry = "Jamaica";
        break;
      case 'JPN':
        this.addressCountry = "Japan";
        break;
      case 'JEY':
        this.addressCountry = "Jersey";
        break;
      case 'KAZ':
        this.addressCountry = "Kazakhstan";
        break;
      case 'KEN':
        this.addressCountry = "Kenya";
        break;
      case 'KOR':
        this.addressCountry = "Korea, Republic of";
        break;
      case 'KWT':
        this.addressCountry = "Kuwait";
        break;
      case 'KGZ':
        this.addressCountry = "Kyrgyzstan";
        break;
      case 'LVA':
        this.addressCountry = "Lebanon";
        break;
      case 'LBN':
        this.addressCountry = "Antigua and Barbuda";
        break;
      case 'LSO':
        this.addressCountry = "Lesotho";
        break;
      case 'LBY':
        this.addressCountry = "Libya";
        break;
      case 'LIE':
        this.addressCountry = "Liechtenstein";
        break;
      case 'LTU':
        this.addressCountry = "Lithuania";
        break;
      case 'LUX':
        this.addressCountry = "Luxembourg";
        break;
      case 'MWI':
        this.addressCountry = "Malawi";
        break;
      case 'MYS':
        this.addressCountry = "Malaysia";
        break;
      case 'MLI':
        this.addressCountry = "Mali";
        break;
      case 'MLT':
        this.addressCountry = "Malta";
        break;
      case 'MRT':
        this.addressCountry = "Mauritania";
        break;
      case 'MEX':
        this.addressCountry = "Mexico";
        break;
      case 'MDA':
        this.addressCountry = "Moldova, Republic of";
        break;
      case 'MCO':
        this.addressCountry = "Monaco";
        break;
      case 'MNE':
        this.addressCountry = "Montenegro";
        break;
      case 'MSR':
        this.addressCountry = "Montserrat";
        break;
      case 'MAR':
        this.addressCountry = "Morocco";
        break;
      case 'NAM':
        this.addressCountry = "Namibia";
        break;
      case 'NPL':
        this.addressCountry = "Nepal";
        break;
      case 'NLD':
        this.addressCountry = "Netherlands";
        break;
      case 'NZL':
        this.addressCountry = "New Zealand";
        break;
      case 'NIC':
        this.addressCountry = "Nicaragua";
        break;
      case 'NER':
        this.addressCountry = "Niger";
        break;
      case 'NGA':
        this.addressCountry = "Nigeria";
        break;
      case 'NFK':
        this.addressCountry = "Norfolk Island";
        break;
      case 'NOR':
        this.addressCountry = "Norway";
        break;
      case 'OMN':
        this.addressCountry = "Oman";
        break;
      case 'PAK':
        this.addressCountry = "Pakistan";
        break;
      case 'PSE':
        this.addressCountry = "Palestinian Territory, Occupied";
        break;
      case 'PAN':
        this.addressCountry = "Panama";
        break;
      case 'PRY':
        this.addressCountry = "Paraguay";
        break;
      case 'PER':
        this.addressCountry = "Peru";
        break;
      case 'PHL':
        this.addressCountry = "Philippines";
        break;
      case 'POL':
        this.addressCountry = "Poland";
        break;
      case 'PRT':
        this.addressCountry = "Portugal";
        break;
      case 'PRI':
        this.addressCountry = "Puerto Rico";
        break;
      case 'QAT':
        this.addressCountry = "Qatar";
        break;
      case 'ROU':
        this.addressCountry = "Romania";
        break;
      case 'RUS':
        this.addressCountry = "Russian Federation";
        break;
      case 'KNA':
        this.addressCountry = "Saint Kitts and Nevis";
        break;
      case 'LCA':
        this.addressCountry = "Saint Lucia";
        break;
      case 'VCT':
        this.addressCountry = "Saint Vincent and the Grenadines";
        break;
      case 'WSM':
        this.addressCountry = "Samoa";
        break;
      case 'SAU':
        this.addressCountry = "Saudi Arabia";
        break;
      case 'SRB':
        this.addressCountry = "Serbia";
        break;
      case 'SGP':
        this.addressCountry = "Singapore";
        break;
      case 'SVK':
        this.addressCountry = "Slovakia";
        break;
      case 'SVN':
        this.addressCountry = "Slovenia";
        break;
      case 'SOM':
        this.addressCountry = "Somalia";
        break;
      case 'ZAF':
        this.addressCountry = "South Africa";
        break;
      case 'ESP':
        this.addressCountry = "Spain";
        break;
      case 'LKA':
        this.addressCountry = "Sri Lanka";
        break;
      case 'SDN':
        this.addressCountry = "Sudan";
        break;
      case 'SWE':
        this.addressCountry = "Sweden";
        break;
      case 'CHE':
        this.addressCountry = "Switzerland";
        break;
      case 'SYR':
        this.addressCountry = "Syrian Arab Republic";
        break;
      case 'TWN':
        this.addressCountry = "Taiwan, Province of China";
        break;
      case 'TJK':
        this.addressCountry = "Tajikistan";
        break;
      case 'TZA':
        this.addressCountry = "Tanzania, United Republic of";
        break;
      case 'THA':
        this.addressCountry = "Thailand";
        break;
      case 'TGO':
        this.addressCountry = "Togo";
        break;
      case 'TTO':
        this.addressCountry = "Trinidad and Tobago";
        break;
      case 'TUN':
        this.addressCountry = "Tunisia";
        break;
      case 'TUR':
        this.addressCountry = "Turkey";
        break;
      case 'TKM':
        this.addressCountry = "Turkmenistan";
        break;
      case 'TCA':
        this.addressCountry = "Turks and Caicos Islands";
        break;
      case 'TUV':
        this.addressCountry = "Tuvalu";
        break;
      case 'UGA':
        this.addressCountry = "Uganda";
        break;
      case 'UKR':
        this.addressCountry = "Ukraine";
        break;
      case 'ARE':
        this.addressCountry = "United Arab Emirates";
        break;
      case 'GBR':
        this.addressCountry = "United Kingdom";
        break;
      case 'USA':
        this.addressCountry = "United States";
        break;
      case 'UZB':
        this.addressCountry = "Uzbekistan";
        break;
      case 'VUT':
        this.addressCountry = "Vanuatu";
        break;
      case 'VEN':
        this.addressCountry = "Venezuela, Bolivarian Republic of";
        break;
      case 'VNM':
        this.addressCountry = "Viet Nam";
        break;
      case 'VGB':
        this.addressCountry = "Virgin Islands, British";
        break;
      case 'ZMB':
        this.addressCountry = "Zambia";
        break;
      case 'ZWE':
        this.addressCountry = "Zimbabwe";
        break;
    }
  }

} window.customElements.define('review-route', ReviewRoute);
