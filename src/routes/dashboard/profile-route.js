import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';
import '../../components/worbli-footer.js';
import '../../components/side-bar/worbli-snapshot.js';
import '@polymer/app-route/app-location.js';
import '../../components/side-bar/worbli-dashnav.js';
import '../../worbli-env.js';

class ProfileRoute extends PolymerElement {
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
          flex-grow: 1;
          background: #FFF;
          border-radius: 3px;
          box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -webkit-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -moz-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
        }
        .footer {
          margin-top: 24px;
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
        label {
          display: block;
          font-size: 12px;
          color: #393d4d;
          font-weight: 600;
          padding: 17px 0 7px;
          width: 340px;
        }
        input {
          width: 307px;
          background: #f8f8f8;
          border: 1px solid #d1d5d7;
          border-radius: 2px;
          margin: 0;
          padding: 5px 7px;
          line-height: 19px;
          border: 1px solid #D9DBDE;
          border-radius: 3px;
          font-size: 13px;
          color: #393D4D;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.02), 0 1px 0 rgba(255, 255, 255, 0.075);
          -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.02), 0 1px 0 rgba(255, 255, 255, 0.075);
          -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.02),0 1px 0 rgba(255, 255, 255, 0.075);
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
          margin-top: 24px;
          display: block;
          border-top: 1px solid #f5f5f5;
        }
        .dropdown {
          background-color: #f8f8f8;
          border-color: #d1d5d7;
          -webkit-appearance: none;
          appearance: none;
          -moz-appearance: none;
          -moz-appearance: none;
          line-height: 15px;
          padding: 5px 5px 5px 7px;
          -webkit-padding-end: 20px;
          height: 31px;
          font-size: 13px;
          border: 1px solid #D9DBDE;
          border-radius: 3px;
          background: url(./images/dropdown.gif) no-repeat;
          background-size: 18px 22px;
          background-position: 100% 50%;
          width: 320px;
        }
        .error{
          color: #E54D53;
        }
        .dropdown-short{
          width:100px;
        }
        .button {
          display: block;
          box-shadow: inset 0 0 0 1px #c8d6e8;
          padding: 6px;
          border-radius: 3px;
          text-align: center;
          padding-top: 12px;
          height: 25px;
          margin: 0 12px 0 12px;
          text-decoration: none;
          color: #4978b3;
          font-size: 12px;
          font-weight: 600;
          width: 290px;
        }
        .text{
          text-transform: capitalize;
        }
        .upper {
          text-transform: uppercase;
        }
        .warn{
          font-weight: 800;
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
        }
        iframe {
          border: 1px solid #d1d5d7;
          border-radius: 2px;
        }
      </style>
      
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <worbli-env api-path="{{apiPath}}""></worbli-env>
      <div class="split">
        <div class="side">
          <worbli-dashnav></worbli-dashnav>
        </div>
        <div class="main">
          <h1>Application</h1>

          <div class="input-area">
            <div class="section-name">Name</div>
            <div class="form-inputs">
              <label>First Name </label>
              <input id="nameFirst" value="{{nameFirst::input}}" name="nameFirst" type="text" class="text"">
              <small class="comment error">[[nameFirstError]]</small>
              <label>Family Name </label>
              <input id="nameLast" value="{{nameLast::input}}" ame="nameLast" type="text" class="text"">
              <small class="comment error">[[nameLastError]]</small>
            </div>
          </div>
          <hr>
          <div class="input-area">
            <div class="section-name">Location</div>
            <div class="form-inputs">
            <label>Country</label>
              <select class="dropdown" id="addressCountry" value="{{addressCountry::input}}">
                <option value="">Select...</option>
                <option value="AFG">Afghanistan</option>
                <option value="ALA">Åland Islands</option>
                <option value="ALB">Albania</option>
                <option value="DZA">Algeria</option>
                <option value="AND">Andorra</option>
                <option value="ATG">Antigua and Barbuda</option>
                <option value="ARG">Argentina</option>
                <option value="ARM">Armenia</option>
                <option value="ABW">Aruba</option>
                <option value="AUS">Australia</option>
                <option value="AUT">Austria</option>
                <option value="AZE">Azerbaijan</option>
                <option value="BHR">Bahrain</option>
                <option value="BRB">Barbados</option>
                <option value="BLR">Belarus</option>
                <option value="BEL">Belgium</option>
                <option value="BLZ">Belize</option>
                <option value="BEN">Benin</option>
                <option value="BMU">Bermuda</option>
                <option value="BTN">Bhutan</option>
                <option value="BIH">Bosnia and Herzegovina</option>
                <option value="BRA">Brazil</option>
                <option value="BRN">Brunei Darussalam</option>
                <option value="BGR">Bulgaria</option>
                <option value="BFA">Burkina Faso</option>
                <option value="BDI">Burundi</option>
                <option value="KHM">Cambodia</option>
                <option value="CMR">Cameroon</option>
                <option value="CAN">Canada</option>
                <option value="CYM">Cayman Islands</option>
                <option value="CAF">Central African Republic</option>
                <option value="CHL">Chile</option>
                <option value="CHN">China</option>
                <option value="COL">Colombia</option>
                <option value="COG">Congo</option>
                <option value="COK">Cook Islands</option>
                <option value="CRI">Costa Rica</option>
                <option value="CIV">Côte d Ivoire</option>
                <option value="HRV">Croatia</option>
                <option value="CUB">Cuba</option>
                <option value="CYP">Cyprus</option>
                <option value="CZE">Czech Republic</option>
                <option value="DNK">Denmark</option>
                <option value="DJI">Djibouti</option>
                <option value="DMA">Dominica</option>
                <option value="DOM">Dominican Republic</option>
                <option value="ECU">Ecuador</option>
                <option value="EGY">Egypt</option>
                <option value="SLV">El Salvador</option>
                <option value="GNQ">Equatorial Guinea</option>
                <option value="EST">Estonia</option>
                <option value="ETH">Ethiopia</option>
                <option value="FRO">Faroe Islands</option>
                <option value="FJI">Fiji</option>
                <option value="FIN">Finland</option>
                <option value="FRA">France</option>
                <option value="GAB">Gabon</option>
                <option value="GEO">Georgia</option>
                <option value="DEU">Germany</option>
                <option value="GIB">Gibraltar</option>
                <option value="GRC">Greece</option>
                <option value="GRD">Grenada</option>
                <option value="GTM">Guatemala</option>
                <option value="GGY">Guernsey</option>
                <option value="GIN">Guinea</option>
                <option value="HND">Honduras</option>
                <option value="HKG">Hong Kong</option>
                <option value="HUN">Hungary</option>
                <option value="ISL">Iceland</option>
                <option value="IND">India</option>
                <option value="IDN">Indonesia</option>
                <option value="IRN">Iran, Islamic Republic of</option>
                <option value="IRL">Ireland</option>
                <option value="IMN">Isle of Man</option>
                <option value="ISR">Israel</option>
                <option value="ITA">Italy</option>
                <option value="JAM">Jamaica</option>
                <option value="JPN">Japan</option>
                <option value="JEY">Jersey</option>
                <option value="KAZ">Kazakhstan</option>
                <option value="KEN">Kenya</option>
                <option value="KOR">Korea, Republic of</option>
                <option value="KWT">Kuwait</option>
                <option value="KGZ">Kyrgyzstan</option>
                <option value="LVA">Latvia</option>
                <option value="LBN">Lebanon</option>
                <option value="LSO">Lesotho</option>
                <option value="LBY">Libya</option>
                <option value="LIE">Liechtenstein</option>
                <option value="LTU">Lithuania</option>
                <option value="LUX">Luxembourg</option>
                <option value="MWI">Malawi</option>
                <option value="MYS">Malaysia</option>
                <option value="MLI">Mali</option>
                <option value="MLT">Malta</option>
                <option value="MRT">Mauritania</option>
                <option value="MEX">Mexico</option>
                <option value="MDA">Moldova, Republic of</option>
                <option value="MCO">Monaco</option>
                <option value="MNE">Montenegro</option>
                <option value="MSR">Montserrat</option>
                <option value="MAR">Morocco</option>
                <option value="NAM">Namibia</option>
                <option value="NPL">Nepal</option>
                <option value="NLD">Netherlands</option>
                <option value="NZL">New Zealand</option>
                <option value="NIC">Nicaragua</option>
                <option value="NER">Niger</option>
                <option value="NGA">Nigeria</option>
                <option value="NFK">Norfolk Island</option>
                <option value="NOR">Norway</option>
                <option value="OMN">Oman</option>
                <option value="PAK">Pakistan</option>
                <option value="PSE">Palestinian Territory, Occupied</option>
                <option value="PAN">Panama</option>
                <option value="PRY">Paraguay</option>
                <option value="PER">Peru</option>
                <option value="PHL">Philippines</option>
                <option value="POL">Poland</option>
                <option value="PRT">Portugal</option>
                <option value="PRI">Puerto Rico</option>
                <option value="QAT">Qatar</option>
                <option value="ROU">Romania</option>
                <option value="RUS">Russian Federation</option>
                <option value="KNA">Saint Kitts and Nevis</option>
                <option value="LCA">Saint Lucia</option>
                <option value="VCT">Saint Vincent and the Grenadines</option>
                <option value="WSM">Samoa</option>
                <option value="SAU">Saudi Arabia</option>
                <option value="SRB">Serbia</option>
                <option value="SGP">Singapore</option>
                <option value="SVK">Slovakia</option>
                <option value="SVN">Slovenia</option>
                <option value="SOM">Somalia</option>
                <option value="ZAF">South Africa</option>
                <option value="ESP">Spain</option>
                <option value="LKA">Sri Lanka</option>
                <option value="SDN">Sudan</option>
                <option value="SWE">Sweden</option>
                <option value="CHE">Switzerland</option>
                <option value="SYR">Syrian Arab Republic</option>
                <option value="TWN">Taiwan, Province of China</option>
                <option value="TJK">Tajikistan</option>
                <option value="TZA">Tanzania, United Republic of</option>
                <option value="THA">Thailand</option>
                <option value="TGO">Togo</option>
                <option value="TTO">Trinidad and Tobago</option>
                <option value="TUN">Tunisia</option>
                <option value="TUR">Turkey</option>
                <option value="TKM">Turkmenistan</option>
                <option value="TCA">Turks and Caicos Islands</option>
                <option value="TUV">Tuvalu</option>
                <option value="UGA">Uganda</option>
                <option value="UKR">Ukraine</option>
                <option value="ARE">United Arab Emirates</option>
                <option value="GBR">United Kingdom</option>
                <option value="USA">United States</option>
                <option value="UZB">Uzbekistan</option>
                <option value="VUT">Vanuatu</option>
                <option value="VEN">Venezuela, Bolivarian Republic of</option>
                <option value="VNM">Viet Nam</option>
                <option value="VGB">Virgin Islands, British</option>
                <option value="ZMB">Zambia</option>
                <option value="ZWE">Zimbabwe</option>
              </select>
              <small class="comment">If your country is not included in this drop down we don't currently support it.</small>
              <small class="comment error">[[addressCountryError]]</small>
            </div>
          </div>
          <hr>
          <div class="input-area">
            <div class="section-name">About</div>
            <div class="form-inputs">
              <label>Date Of Birth</label>
              <select class="dropdown dropdown-short" id="dobDay" value="{{dobDay::input}}">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <select class="dropdown dropdown-short" id="dobMonth" value="{{dobMonth::input}}">
                <option value="1">January</option>
                <option value="2">Febuary</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <select class="dropdown dropdown-short" id="dobYear" value="{{dobYear::input}}">
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
                <option value="1969">1969</option>
                <option value="1968">1968</option>
                <option value="1967">1967</option>
                <option value="1966">1966</option>
                <option value="1965">1965</option>
                <option value="1964">1964</option>
                <option value="1963">1963</option>
                <option value="1962">1962</option>
                <option value="1961">1961</option>
                <option value="1960">1960</option>
                <option value="1959">1959</option>
                <option value="1958">1958</option>
                <option value="1957">1957</option>
                <option value="1956">1956</option>
                <option value="1955">1955</option>
                <option value="1954">1954</option>
                <option value="1953">1953</option>
                <option value="1952">1952</option>
                <option value="1951">1951</option>
                <option value="1950">1950</option>
                <option value="1949">1949</option>
                <option value="1948">1948</option>
                <option value="1947">1947</option>
                <option value="1946">1946</option>
                <option value="1945">1945</option>
                <option value="1944">1944</option>
                <option value="1943">1943</option>
                <option value="1942">1942</option>
                <option value="1941">1941</option>
                <option value="1940">1940</option>
                <option value="1939">1939</option>
                <option value="1938">1938</option>
                <option value="1937">1937</option>
                <option value="1936">1936</option>
                <option value="1935">1935</option>
                <option value="1934">1934</option>
                <option value="1933">1933</option>
                <option value="1932">1932</option>
                <option value="1931">1931</option>
                <option value="1930">1930</option>
                <option value="1929">1929</option>
                <option value="1928">1928</option>
                <option value="1927">1927</option>
                <option value="1926">1926</option>
                <option value="1925">1925</option>
                <option value="1924">1924</option>
                <option value="1923">1923</option>
                <option value="1922">1922</option>
                <option value="1921">1921</option>
                <option value="1920">1920</option>
                <option value="1919">1919</option>
                <option value="1918">1918</option>
                <option value="1917">1917</option>
                <option value="1916">1916</option>
                <option value="1915">1915</option>
                <option value="1914">1914</option>
                <option value="1913">1913</option>
                <option value="1912">1912</option>
                <option value="1911">1911</option>
                <option value="1910">1910</option>
                <option value="1909">1909</option>
                <option value="1908">1908</option>
                <option value="1907">1907</option>
                <option value="1906">1906</option>
                <option value="1905">1905</option>
                <option value="1904">1904</option>
                <option value="1903">1903</option>
                <option value="1902">1902</option>
                <option value="1901">1901</option>
                <option value="1900">1900</option>
              </select>
              <small class="comment error">[[dobError]]</small>
              <label>Gender</label>
              <select class="dropdown" id="addressCountry" value="{{gender::input}}">
                <option value="">Select...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <small class="comment error">[[genderError]]</small>
            </div>
          </div>
          <hr>
          <div class="input-area">
              <div class="section-name">Documents</div>
              <div class="form-inputs">
              <template is="dom-if" if="{{kycToken2}}"></template>
              <iframe allow="camera" width="500" height="650" src="https://portal-kyc.worbli.io?kyc_token=[[kycToken2]]"></iframe></template>
                </div>
            </div>
            <div class="footer">
              <button type="button" on-click="_saveProfile">[[btnText]]</button>
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
      btnText:{
        type: Text,
        value: 'Save Application',
      },
      showState: {
        type: Boolean,
        value: false,
      },
    };
  }

ready() {
  super.ready();
  this._getData();
  this._onfidoJwt();
}

_onfidoJwt(){
  const token = localStorage.getItem("token");
  if(token) {
    const url = `${this.apiPath}/kyc/applicant`;
    fetch(url, {
      method: 'POST',
      headers: {'Authorization': `Bearer ${token}`},
    })
    .then((response) => {return response.json()})
    .then(response => {
      this.kycToken2 = response.kyc_token;
      this.showIframe = true;
    })
    .catch(error => {this.set('route.path', '/')});
  } else {
    this.set('route.path', '/')
  }
}

  _getData(){
    const token = localStorage.getItem("token");
    if(token) {
      const url = `${this.apiPath}/user/profile/`;
      fetch(url, {
        method: 'GET',
        headers: {'Authorization': `Bearer ${token}`},
      })
      .then((response) => {return response.json()})
      .then(response => {
        if(response.data === true){
          this.nameFirst = response.profile.name_first || "";
          this.nameLast = response.profile.name_last || "";
          this.addressCountry = response.profile.address_country || "";
          this.dobYear = response.profile.date_birth_year || "";
          this.dobMonth = response.profile.date_birth_month || "";
          this.dobDay = response.profile.date_birth_day || "";
          this.gender = response.profile.gender || "";
          if(response.profile && response.profile.address_country){this.addressCountry = response.profile.address_country.toUpperCase() || ""}
        }
      })
      .catch(error => {
        console.log(error)
      });
    } else {this.set('route.path', '/')}
  }

  _saveProfile(){
    this.btnText = 'Saving...';
    let check = true
    const name_first = this.nameFirst;
    const name_last = this.nameLast;
    const address_country = this.addressCountry;
    const date_birth_year = this.dobYear;
    const date_birth_month = this.dobMonth;
    const date_birth_day = this.dobDay;
    const gender = this.gender;
    this.nameFirstError = "";
    this.nameLastError = "";
    this.addressCountryError = "";
    this.dobError = "";
    this.genderError = "";
    
    if(name_first === undefined || name_first === ""){check = false; this.nameFirstError = "Please enter a first name"};
    if(name_first && name_first.length > 35){check = false; this.nameFirstError = "Name too long"};
    if(name_last === undefined || name_last === ""){check = false; this.nameLastError = "Please enter a family name"};
    if(name_last && name_last.length > 35){check = false; this.nameLastError = "Name too long"};
    if(address_country === undefined || address_country === ""){check = false; this.addressCountryError = "Please enter a country"};
    if(address_country && address_country.length > 3){check = false; this.addressCountryError = "Country too long"};
    if(address_country && address_country.length < 3){check = false; this.addressCountryError = "Country too short"};
    if(date_birth_year === undefined || date_birth_year === ""){check = false; this.dobError = "Please select a year"};
    if(date_birth_month === undefined || date_birth_month === ""){check = false; this.dobError = "Please select a month"};
    if(date_birth_day === undefined || date_birth_day === ""){check = false; this.dobError = "Please select a day"};
    if(gender === undefined || gender === ""){check = false; this.genderError = "Please select a gender"};
    if(check === true){
      const data = {
        name_first, 
        name_last, 
        address_country, 
        date_birth_day, 
        date_birth_month, 
        date_birth_year, 
        gender}
      this._save(data);
    } else {
      this.btnText = 'Save Application';
    }
  }



_save(data){
  const token = localStorage.getItem("token");
  const url = `${this.apiPath}/user/profile/`;
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data), 
    headers:{'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
  })
  .then((response) => {return response.json()})
  .then((response) => {
    if(response.data === true){
      const token = response.newjwt;
      localStorage.setItem("token", token);
      this.set('route.path', '/dashboard/review');
      this.btnText = 'Save Application';
    } else {
      console.log(error)
    }

  })
  .catch(error => console.log('Error:', error));
}

} window.customElements.define('profile-route', ProfileRoute);
