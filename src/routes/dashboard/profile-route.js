import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';
import '../../components/worbli-footer.js';
import '../../components/side-bar/worbli-snapshot.js';
import '@polymer/app-route/app-location.js';
import '../../worbli-env.js';

class ProfileRoute extends PolymerElement {
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
          padding-right: 30px;
        }
        .main {
          flex-grow: 1;
          max-width: 830px;
          background: #FFF;
          border-radius: 3px;
          box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -webkit-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -moz-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
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
        .navigation {
          color: #3a3e46;
          font-size: 11px;
          font-weight: 600;
          line-height: 16px;
          padding: 13px 12px;
          border-bottom: 1px solid #f5f5f5;
          background: none;
          text-shadow: none;
        }
        .navigation:hover {
          background-color: #F6F6F7;
        }
        .selected {
          color: black;
          background-color: #F6F6F7;
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
        h2 {
          color: var(--blue-text);
          font-size: 21px;
          font-weight: 600;
          margin-top: 12px;
          margin-bottom: 12px;
        }
        .container a {
          text-decoration: none;
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
        .notReady{
          cursor: not-allowed;
          opacity: 0.3;
        }
        .steps{

          margin-left: 40px;
        }
        .step-text {
          margin-left: 17px;
          color: #D8D8D8;
          font-weight:600;
        }
        .step-text div {
          text-align: center;
          display:inline-block;
          width:78px;
        }
        .step{
          color:#272727;
        }
        .sidebar{
          padding-bottom: 12px;
          background: #FFF;
          border-radius: 3px;
          box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -webkit-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -moz-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
        }
        .dropdown-short{
          width:100px;
        }
        .intro{
          padding: 12px;
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

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <worbli-env api-path="{{apiPath}}""></worbli-env>
      <div class="split">
        <div class="side">
          <div class="sidebar">
          <div class="title">Verification</div>
          <div class="title">Review</div>
          <div class="title">Status</div>
          <div class="title">Worbli Account</div>
          <div class="title">Claim Sharedrop</div>
          <div class="title">Change Password</div>
          </div>
        </div>




        <div class="main">
          <h1>Verification</h1>

<template is="dom-if" if="{{!started}}">
          <p class="intro">Completing the verification process will grant you complete access to the the myriad of financial services and applications on the WORBLI network.</p>
          <div class="footer">
              <button type="button" on-click="_startVerificatoin">Start Verification</button>
            </div>
      </template>
<template is="dom-if" if="{{started}}">
<!-- START TEMPLATE -->
          <div class="input-area">
            <div class="section-name">Name</div>
            <div class="form-inputs">
              <label>First Name </label>
              <input id="nameFirst" value="{{nameFirst::input}}" name="nameFirst" type="text" class="text" disabled="{{complete}}">
              <small class="comment error">[[nameFirstError]]</small>
              <label>Middle Name </label>
              <input id="nameMiddle" value="{{nameMiddle::input}}" ame="nameMiddle" type="text" class="text" disabled="{{complete}}">
              <small class="comment error">[[nameMiddleError]]</small>
              <label>Family Name </label>
              <input id="nameLast" value="{{nameLast::input}}" ame="nameLast" type="text" class="text" disabled="{{complete}}">
              <small class="comment error">[[nameLastError]]</small>
            </div>
          </div>
          <hr>

          <div class="input-area">
            <div class="section-name">Address</div>
            <div class="form-inputs">
              <label>Street</label>
              <input id="addressOne" value="{{addressOne::input}}" name="addressOne" type="text" class="text" disabled="{{complete}}">
              <small class="comment error">[[addressOneError]]</small>
              <label></label>
              <input id="addressTwo" value="{{addressTwo::input}}" ame="addressTwo" type="text" class="text" disabled="{{complete}}">
              <small class="comment error">[[addressTwoError]]</small>
              <label>City</label>
              <input id="addressCity" value="{{addressCity::input}}" ame="addressCity" type="text" class="text" disabled="{{complete}}">
              <small class="comment error">[[addressCityError]]</small>
              <label>State / Province / Region</label>
              <input id="addressRegion" value="{{addressRegion::input}}" ame="addressRegion" type="text" class="text" disabled="{{complete}}">
              <small class="comment error">[[addressRegionError]]</small>
              <label>Zip / Postal Code</label>
              <input id="addressZip" value="{{addressZip::input}}" ame="addressZip" type="text" class="text" disabled="{{complete}}">
              <small class="comment error">[[addressZipError]]</small>
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
              <small class="comment error">[[addressCountryError]]</small>
            </div>
          </div>
          <hr>

          <div class="input-area">
            <div class="section-name">Phone</div>
              <div class="form-inputs">
              <label>Dialing Code</label>
                <select name="countryCode" class="dropdown" id="phoneCode" value="{{phoneCode::input}}">
                  <option value="">Select...</option>
                  <option data-countryCode="DZ" value="213">Algeria (+213)</option>
                  <option data-countryCode="AD" value="376">Andorra (+376)</option>
                  <option data-countryCode="AO" value="244">Angola (+244)</option>
                  <option data-countryCode="AI" value="1264">Anguilla (+1264)</option>
                  <option data-countryCode="AG" value="1268">Antigua &amp; Barbuda (+1268)</option>
                  <option data-countryCode="AR" value="54">Argentina (+54)</option>
                  <option data-countryCode="AM" value="374">Armenia (+374)</option>
                  <option data-countryCode="AW" value="297">Aruba (+297)</option>
                  <option data-countryCode="AU" value="61">Australia (+61)</option>
                  <option data-countryCode="AT" value="43">Austria (+43)</option>
                  <option data-countryCode="AZ" value="994">Azerbaijan (+994)</option>
                  <option data-countryCode="BS" value="1242">Bahamas (+1242)</option>
                  <option data-countryCode="BH" value="973">Bahrain (+973)</option>
                  <option data-countryCode="BD" value="880">Bangladesh (+880)</option>
                  <option data-countryCode="BB" value="1246">Barbados (+1246)</option>
                  <option data-countryCode="BY" value="375">Belarus (+375)</option>
                  <option data-countryCode="BE" value="32">Belgium (+32)</option>
                  <option data-countryCode="BZ" value="501">Belize (+501)</option>
                  <option data-countryCode="BJ" value="229">Benin (+229)</option>
                  <option data-countryCode="BM" value="1441">Bermuda (+1441)</option>
                  <option data-countryCode="BT" value="975">Bhutan (+975)</option>
                  <option data-countryCode="BO" value="591">Bolivia (+591)</option>
                  <option data-countryCode="BA" value="387">Bosnia Herzegovina (+387)</option>
                  <option data-countryCode="BW" value="267">Botswana (+267)</option>
                  <option data-countryCode="BR" value="55">Brazil (+55)</option>
                  <option data-countryCode="BN" value="673">Brunei (+673)</option>
                  <option data-countryCode="BG" value="359">Bulgaria (+359)</option>
                  <option data-countryCode="BF" value="226">Burkina Faso (+226)</option>
                  <option data-countryCode="BI" value="257">Burundi (+257)</option>
                  <option data-countryCode="KH" value="855">Cambodia (+855)</option>
                  <option data-countryCode="CM" value="237">Cameroon (+237)</option>
                  <option data-countryCode="CA" value="1">Canada (+1)</option>
                  <option data-countryCode="CV" value="238">Cape Verde Islands (+238)</option>
                  <option data-countryCode="KY" value="1345">Cayman Islands (+1345)</option>
                  <option data-countryCode="CF" value="236">Central African Republic (+236)</option>
                  <option data-countryCode="CL" value="56">Chile (+56)</option>
                  <option data-countryCode="CN" value="86">China (+86)</option>
                  <option data-countryCode="CO" value="57">Colombia (+57)</option>
                  <option data-countryCode="KM" value="269">Comoros (+269)</option>
                  <option data-countryCode="CG" value="242">Congo (+242)</option>
                  <option data-countryCode="CK" value="682">Cook Islands (+682)</option>
                  <option data-countryCode="CR" value="506">Costa Rica (+506)</option>
                  <option data-countryCode="HR" value="385">Croatia (+385)</option>
                  <option data-countryCode="CU" value="53">Cuba (+53)</option>
                  <option data-countryCode="CY" value="90392">Cyprus North (+90392)</option>
                  <option data-countryCode="CY" value="357">Cyprus South (+357)</option>
                  <option data-countryCode="CZ" value="42">Czech Republic (+42)</option>
                  <option data-countryCode="DK" value="45">Denmark (+45)</option>
                  <option data-countryCode="DJ" value="253">Djibouti (+253)</option>
                  <option data-countryCode="DM" value="1809">Dominica (+1809)</option>
                  <option data-countryCode="DO" value="1809">Dominican Republic (+1809)</option>
                  <option data-countryCode="EC" value="593">Ecuador (+593)</option>
                  <option data-countryCode="EG" value="20">Egypt (+20)</option>
                  <option data-countryCode="SV" value="503">El Salvador (+503)</option>
                  <option data-countryCode="GQ" value="240">Equatorial Guinea (+240)</option>
                  <option data-countryCode="ER" value="291">Eritrea (+291)</option>
                  <option data-countryCode="EE" value="372">Estonia (+372)</option>
                  <option data-countryCode="ET" value="251">Ethiopia (+251)</option>
                  <option data-countryCode="FK" value="500">Falkland Islands (+500)</option>
                  <option data-countryCode="FO" value="298">Faroe Islands (+298)</option>
                  <option data-countryCode="FJ" value="679">Fiji (+679)</option>
                  <option data-countryCode="FI" value="358">Finland (+358)</option>
                  <option data-countryCode="FR" value="33">France (+33)</option>
                  <option data-countryCode="GF" value="594">French Guiana (+594)</option>
                  <option data-countryCode="PF" value="689">French Polynesia (+689)</option>
                  <option data-countryCode="GA" value="241">Gabon (+241)</option>
                  <option data-countryCode="GM" value="220">Gambia (+220)</option>
                  <option data-countryCode="GE" value="7880">Georgia (+7880)</option>
                  <option data-countryCode="DE" value="49">Germany (+49)</option>
                  <option data-countryCode="GH" value="233">Ghana (+233)</option>
                  <option data-countryCode="GI" value="350">Gibraltar (+350)</option>
                  <option data-countryCode="GR" value="30">Greece (+30)</option>
                  <option data-countryCode="GL" value="299">Greenland (+299)</option>
                  <option data-countryCode="GD" value="1473">Grenada (+1473)</option>
                  <option data-countryCode="GP" value="590">Guadeloupe (+590)</option>
                  <option data-countryCode="GU" value="671">Guam (+671)</option>
                  <option data-countryCode="GT" value="502">Guatemala (+502)</option>
                  <option data-countryCode="GN" value="224">Guinea (+224)</option>
                  <option data-countryCode="GW" value="245">Guinea - Bissau (+245)</option>
                  <option data-countryCode="GY" value="592">Guyana (+592)</option>
                  <option data-countryCode="HT" value="509">Haiti (+509)</option>
                  <option data-countryCode="HN" value="504">Honduras (+504)</option>
                  <option data-countryCode="HK" value="852">Hong Kong (+852)</option>
                  <option data-countryCode="HU" value="36">Hungary (+36)</option>
                  <option data-countryCode="IS" value="354">Iceland (+354)</option>
                  <option data-countryCode="IN" value="91">India (+91)</option>
                  <option data-countryCode="ID" value="62">Indonesia (+62)</option>
                  <option data-countryCode="IR" value="98">Iran (+98)</option>
                  <option data-countryCode="IQ" value="964">Iraq (+964)</option>
                  <option data-countryCode="IE" value="353">Ireland (+353)</option>
                  <option data-countryCode="IL" value="972">Israel (+972)</option>
                  <option data-countryCode="IT" value="39">Italy (+39)</option>
                  <option data-countryCode="JM" value="1876">Jamaica (+1876)</option>
                  <option data-countryCode="JP" value="81">Japan (+81)</option>
                  <option data-countryCode="JO" value="962">Jordan (+962)</option>
                  <option data-countryCode="KZ" value="7">Kazakhstan (+7)</option>
                  <option data-countryCode="KE" value="254">Kenya (+254)</option>
                  <option data-countryCode="KI" value="686">Kiribati (+686)</option>
                  <option data-countryCode="KP" value="850">Korea North (+850)</option>
                  <option data-countryCode="KR" value="82">Korea South (+82)</option>
                  <option data-countryCode="KW" value="965">Kuwait (+965)</option>
                  <option data-countryCode="KG" value="996">Kyrgyzstan (+996)</option>
                  <option data-countryCode="LA" value="856">Laos (+856)</option>
                  <option data-countryCode="LV" value="371">Latvia (+371)</option>
                  <option data-countryCode="LB" value="961">Lebanon (+961)</option>
                  <option data-countryCode="LS" value="266">Lesotho (+266)</option>
                  <option data-countryCode="LR" value="231">Liberia (+231)</option>
                  <option data-countryCode="LY" value="218">Libya (+218)</option>
                  <option data-countryCode="LI" value="417">Liechtenstein (+417)</option>
                  <option data-countryCode="LT" value="370">Lithuania (+370)</option>
                  <option data-countryCode="LU" value="352">Luxembourg (+352)</option>
                  <option data-countryCode="MO" value="853">Macao (+853)</option>
                  <option data-countryCode="MK" value="389">Macedonia (+389)</option>
                  <option data-countryCode="MG" value="261">Madagascar (+261)</option>
                  <option data-countryCode="MW" value="265">Malawi (+265)</option>
                  <option data-countryCode="MY" value="60">Malaysia (+60)</option>
                  <option data-countryCode="MV" value="960">Maldives (+960)</option>
                  <option data-countryCode="ML" value="223">Mali (+223)</option>
                  <option data-countryCode="MT" value="356">Malta (+356)</option>
                  <option data-countryCode="MH" value="692">Marshall Islands (+692)</option>
                  <option data-countryCode="MQ" value="596">Martinique (+596)</option>
                  <option data-countryCode="MR" value="222">Mauritania (+222)</option>
                  <option data-countryCode="YT" value="269">Mayotte (+269)</option>
                  <option data-countryCode="MX" value="52">Mexico (+52)</option>
                  <option data-countryCode="FM" value="691">Micronesia (+691)</option>
                  <option data-countryCode="MD" value="373">Moldova (+373)</option>
                  <option data-countryCode="MC" value="377">Monaco (+377)</option>
                  <option data-countryCode="MN" value="976">Mongolia (+976)</option>
                  <option data-countryCode="MS" value="1664">Montserrat (+1664)</option>
                  <option data-countryCode="MA" value="212">Morocco (+212)</option>
                  <option data-countryCode="MZ" value="258">Mozambique (+258)</option>
                  <option data-countryCode="MN" value="95">Myanmar (+95)</option>
                  <option data-countryCode="NA" value="264">Namibia (+264)</option>
                  <option data-countryCode="NR" value="674">Nauru (+674)</option>
                  <option data-countryCode="NP" value="977">Nepal (+977)</option>
                  <option data-countryCode="NL" value="31">Netherlands (+31)</option>
                  <option data-countryCode="NC" value="687">New Caledonia (+687)</option>
                  <option data-countryCode="NZ" value="64">New Zealand (+64)</option>
                  <option data-countryCode="NI" value="505">Nicaragua (+505)</option>
                  <option data-countryCode="NE" value="227">Niger (+227)</option>
                  <option data-countryCode="NG" value="234">Nigeria (+234)</option>
                  <option data-countryCode="NU" value="683">Niue (+683)</option>
                  <option data-countryCode="NF" value="672">Norfolk Islands (+672)</option>
                  <option data-countryCode="NP" value="670">Northern Marianas (+670)</option>
                  <option data-countryCode="NO" value="47">Norway (+47)</option>
                  <option data-countryCode="OM" value="968">Oman (+968)</option>
                  <option data-countryCode="PW" value="680">Palau (+680)</option>
                  <option data-countryCode="PA" value="507">Panama (+507)</option>
                  <option data-countryCode="PG" value="675">Papua New Guinea (+675)</option>
                  <option data-countryCode="PY" value="595">Paraguay (+595)</option>
                  <option data-countryCode="PE" value="51">Peru (+51)</option>
                  <option data-countryCode="PH" value="63">Philippines (+63)</option>
                  <option data-countryCode="PL" value="48">Poland (+48)</option>
                  <option data-countryCode="PT" value="351">Portugal (+351)</option>
                  <option data-countryCode="PR" value="1787">Puerto Rico (+1787)</option>
                  <option data-countryCode="QA" value="974">Qatar (+974)</option>
                  <option data-countryCode="RE" value="262">Reunion (+262)</option>
                  <option data-countryCode="RO" value="40">Romania (+40)</option>
                  <option data-countryCode="RU" value="7">Russia (+7)</option>
                  <option data-countryCode="RW" value="250">Rwanda (+250)</option>
                  <option data-countryCode="SM" value="378">San Marino (+378)</option>
                  <option data-countryCode="ST" value="239">Sao Tome &amp; Principe (+239)</option>
                  <option data-countryCode="SA" value="966">Saudi Arabia (+966)</option>
                  <option data-countryCode="SN" value="221">Senegal (+221)</option>
                  <option data-countryCode="CS" value="381">Serbia (+381)</option>
                  <option data-countryCode="SC" value="248">Seychelles (+248)</option>
                  <option data-countryCode="SL" value="232">Sierra Leone (+232)</option>
                  <option data-countryCode="SG" value="65">Singapore (+65)</option>
                  <option data-countryCode="SK" value="421">Slovak Republic (+421)</option>
                  <option data-countryCode="SI" value="386">Slovenia (+386)</option>
                  <option data-countryCode="SB" value="677">Solomon Islands (+677)</option>
                  <option data-countryCode="SO" value="252">Somalia (+252)</option>
                  <option data-countryCode="ZA" value="27">South Africa (+27)</option>
                  <option data-countryCode="ES" value="34">Spain (+34)</option>
                  <option data-countryCode="LK" value="94">Sri Lanka (+94)</option>
                  <option data-countryCode="SH" value="290">St. Helena (+290)</option>
                  <option data-countryCode="KN" value="1869">St. Kitts (+1869)</option>
                  <option data-countryCode="SC" value="1758">St. Lucia (+1758)</option>
                  <option data-countryCode="SD" value="249">Sudan (+249)</option>
                  <option data-countryCode="SR" value="597">Suriname (+597)</option>
                  <option data-countryCode="SZ" value="268">Swaziland (+268)</option>
                  <option data-countryCode="SE" value="46">Sweden (+46)</option>
                  <option data-countryCode="CH" value="41">Switzerland (+41)</option>
                  <option data-countryCode="SI" value="963">Syria (+963)</option>
                  <option data-countryCode="TW" value="886">Taiwan (+886)</option>
                  <option data-countryCode="TJ" value="7">Tajikstan (+7)</option>
                  <option data-countryCode="TH" value="66">Thailand (+66)</option>
                  <option data-countryCode="TG" value="228">Togo (+228)</option>
                  <option data-countryCode="TO" value="676">Tonga (+676)</option>
                  <option data-countryCode="TT" value="1868">Trinidad &amp; Tobago (+1868)</option>
                  <option data-countryCode="TN" value="216">Tunisia (+216)</option>
                  <option data-countryCode="TR" value="90">Turkey (+90)</option>
                  <option data-countryCode="TM" value="7">Turkmenistan (+7)</option>
                  <option data-countryCode="TM" value="993">Turkmenistan (+993)</option>
                  <option data-countryCode="TC" value="1649">Turks &amp; Caicos Islands (+1649)</option>
                  <option data-countryCode="TV" value="688">Tuvalu (+688)</option>
                  <option data-countryCode="UG" value="256">Uganda (+256)</option>
                  <option data-countryCode="GB" value="44">UK (+44)</option>
                  <option data-countryCode="UA" value="380">Ukraine (+380)</option>
                  <option data-countryCode="AE" value="971">United Arab Emirates (+971)</option>
                  <option data-countryCode="UY" value="598">Uruguay (+598)</option>
                  <option data-countryCode="US" value="1">USA (+1)</option>
                  <option data-countryCode="UZ" value="7">Uzbekistan (+7)</option>
                  <option data-countryCode="VU" value="678">Vanuatu (+678)</option>
                  <option data-countryCode="VA" value="379">Vatican City (+379)</option>
                  <option data-countryCode="VE" value="58">Venezuela (+58)</option>
                  <option data-countryCode="VN" value="84">Vietnam (+84)</option>
                  <option data-countryCode="VG" value="84">Virgin Islands - British (+1284)</option>
                  <option data-countryCode="VI" value="84">Virgin Islands - US (+1340)</option>
                  <option data-countryCode="WF" value="681">Wallis &amp; Futuna (+681)</option>
                  <option data-countryCode="YE" value="969">Yemen (North)(+969)</option>
                  <option data-countryCode="YE" value="967">Yemen (South)(+967)</option>
                  <option data-countryCode="ZM" value="260">Zambia (+260)</option>
                  <option data-countryCode="ZW" value="263">Zimbabwe (+263)</option>
                </optgroup>
              </select>
              <small class="comment error">[[phoneCodeError]]</small>
              <label>Mobile</label>
              <input id="phoneMobile" value="{{phoneMobile::input}}" name="phoneMobile" type="number" class="text" disabled="{{complete}}">
              <small class="comment error">[[phoneMobileError]]</small>
            </div>
          </div>


          <hr>
          <div class="input-area">
            <div class="section-name">About</div>
            <div class="form-inputs">
              <label>Date Of Birth</label>
              <select class="dropdown dropdown-short" id="dobDay" value="{{dobDay::input}}">
                <option value="">Day...</option>
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
                <option value="">Month...</option>
                <option value="1">1 - Jan</option>
                <option value="2">2 - Feb</option>
                <option value="3">3 - Mar</option>
                <option value="4">4 - Apr</option>
                <option value="5">5 - May</option>
                <option value="6">6 - Jun</option>
                <option value="7">7 - Jul</option>
                <option value="8">8 - Aug</option>
                <option value="9">9 - Sep</option>
                <option value="10">10 - Oct</option>
                <option value="11">11 - Nov</option>
                <option value="12">12 - Dec</option>
              </select>
              <select class="dropdown dropdown-short" id="dobYear" value="{{dobYear::input}}">
                <option value="">Year...</option>
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

</template>
<!-- END TEMPLATE -->

            <div class="footer">
              <button type="button" on-click="_saveProfile">Save Profile</button>
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
    };
  }

  ready() {
    super.ready();
    this._getData();
    const token = localStorage.getItem("token");
    if(token) {
      const url = `${this.apiPath}/user/auth`;
      fetch(url, {
        method: 'POST',
        headers: {'Authorization': `Bearer ${token}`},
      })
      .then((response) => {return response.json()})
      .then(response => {
        if(response.data === false){
          localStorage.removeItem("token");
          this.set('route.path', '/')
        } else {
          this.onfido_status = response.onfido_status;
          if(this.onfido_status === 'started'){
            this.started = true;
          }
        }
      })
      .catch(error => {this.set('route.path', '/')});
    } else {
      this.set('route.path', '/')
    }
  }

  _startVerificatoin(){
    const token = localStorage.getItem("token");
    if(token) {
      const url = `${this.apiPath}/kyc/applicant`;
      fetch(url, {
        method: 'GET',
        headers: {'Authorization': `Bearer ${token}`},
      })
      .then((response) => {return response.json()})
      .then(response => {
        this.onfido_status = response.onfido_status;
        if(this.onfido_status === 'started'){
          this.started = true;
        }
        const token = response.token;
        localStorage.setItem("token", token);
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
          this.nameMiddle = response.profile.name_middle || "";
          this.nameLast = response.profile.name_last || "";
          this.addressOne = response.profile.address_one || "";
          this.addressTwo = response.profile.address_two || "";
          this.addressCity = response.profile.address_city || "";
          this.addressRegion = response.profile.address_region || "";
          this.addressZip = response.profile.address_zip || "";
          if(response.profile && response.profile.address_country){
            this.addressCountry = response.profile.address_country.toUpperCase() || "";
          }
          this.phoneCode = response.profile.phone_code || "";
          this.phoneMobile = response.profile.phone_mobile || "";
          if(response.profile && response.profile.date_birth){
            this.dobYear = new Date(response.profile.date_birth).getFullYear() || "";
            this.dobMonth = new Date(response.profile.date_birth).getMonth() || "";
            this.dobDay = new Date(response.profile.date_birth).getDay() || "";
          }

          this.gender = response.profile.gender || "";
        }
      })
      .catch(error => {
        console.log(error)
      });
    } else {this.set('route.path', '/')}
  }

  _saveProfile(){
    let check = true
    const name_first = this.nameFirst;
    const name_middle = this.nameMiddle;
    const name_last = this.nameLast;
    const address_one = this.addressOne;
    let address_two = this.addressTwo;
    const address_city = this.addressCity;
    const address_region = this.addressRegion;
    const address_zip = this.addressZip;
    const address_country = this.addressCountry;
    const phone_code = this.phoneCode;
    const phone_mobile = this.phoneMobile;
    const dob_year = this.dobYear;
    const dob_month = this.dobMonth;
    const dob_day = this.dobDay;
    const gender = this.gender;
    this.nameFirstError = "";
    this.nameMiddleError = "";
    this.nameLastError = "";
    this.addressOneError = "";
    this.addressTwoError = "";
    this.addressCityError = "";
    this.addressRegionError = "";
    this.addressRegionError = "";
    this.addressZipError = "";
    this.addressCountryError = "";
    this.phoneCodeError = "";
    this.phoneMobileError = "";
    this.dobError = "";
    this.genderError = "";
    if(name_first === undefined || name_first === ""){check = false; this.nameFirstError = "Please enter a first name"};
    if(name_first && name_first.length > 35){check = false; this.nameFirstError = "Name too long"};
    if(name_middle && name_middle.length > 35){check = false; this.nameMiddleError = "Name too long"};
    if(name_last === undefined || name_last === ""){check = false; this.nameLastError = "Please enter a family name"};
    if(name_last && name_last.length > 35){check = false; this.nameLastError = "Name too long"};
    if(address_one === undefined || address_one === ""){check = false; this.addressOneError = "Please enter an address"};
    if(address_one && address_one.length > 255){check = false; this.addressOneError = "Address too long"};
    if(address_two && address_two.length > 150){check = false; this.addressTwoError = "Address too long"};
    if(!address_two){address_two = " "};
    if(address_city === undefined || address_city === ""){check = false; this.addressCityError = "Please enter a city"};
    if(address_city && address_city.length > 50){check = false; this.addressCityError = "City too long"};
    if(address_region === undefined || address_region === ""){check = false; this.addressRegionError = "Please enter a region"};
    if(address_region && address_region.length > 50){check = false; this.addressRegionError = "City too long"};
    if(address_zip === undefined || address_zip === ""){check = false; this.addressZipError = "Please enter a zip or postal code"};
    if(address_zip && address_zip.length > 15){check = false; this.addressZipError = "Zip too long"};
    if(address_country === undefined || address_country === ""){check = false; this.addressCountryError = "Please enter a country"};
    if(address_country && address_country.length > 3){check = false; this.addressCountryError = "Country too long"};
    if(address_country && address_country.length < 3){check = false; this.addressCountryError = "Country too short"};
    if(phone_code === undefined || phone_code === ""){check = false; this.phoneCodeError = "Please select a dialing code"};
    if(phone_code && phone_code.length < 1){check = false; this.phoneCodeError = "Phone code too short"};
    if(phone_code && phone_code.length > 4){check = false; this.phoneCodeError = "Phone code too long"};
    if(phone_mobile === undefined || phone_mobile === ""){check = false; this.phoneMobileError = "Please enter a mobile number"};
    if(phone_mobile && phone_mobile.length > 15){check = false; this.phoneMobileError = "Phone too long"};
    if(phone_mobile && phone_mobile.length < 3){check = false; this.phoneMobileError = "Phone too short"};
    if(dob_year === undefined || dob_year === ""){check = false; this.dobError = "Please select a year"};
    if(dob_month === undefined || dob_month === ""){check = false; this.dobError = "Please select a month"};
    if(dob_day === undefined || dob_day === ""){check = false; this.dobError = "Please select a day"};
    if(gender === undefined || gender === ""){check = false; this.genderError = "Please select a gender"};
    const date_birth = `${this.dobYear}-${this.dobMonth}-${this.dobDay}`;
    if(check === true){
      const data = {name_first, name_middle, name_last, address_one, address_two, address_city, address_region, address_zip, address_country, phone_code, phone_mobile, date_birth, gender}
      this._save(data);
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
    this.set('route.path', '/dashboard/identity/')
  })
  .catch(error => console.log('Error:', error));
}


} window.customElements.define('profile-route', ProfileRoute);
