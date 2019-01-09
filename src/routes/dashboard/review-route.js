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
              <p class="label">{{nameFirst}} {{nameMiddle}} {{nameLast}} </p>
            </div>
          </div>
          <hr>
          <div class="input-area">
            <div class="section-name">Address</div>
              <div class="form-inputs">
                <p class="label">[[addressBuildingNumber]] [[addressFlatNumber]] [[addressBuildingName]] </p>
                <p class="label">[[addressOne]]</p>
                <p class="label">[[addressTwo]]</p>
                <p class="label">[[addressTown]]</p>
                <p class="label">[[addressState]]</p>
                <p class="label upper">[[addressZip]]</p>
                <p class="label upper">[[addressCountry]]</p>
              </div>
            </div>
            <hr>
            <div class="input-area">
              <div class="section-name">Phone</div>
              <div class="form-inputs">
                <p class="label">+ [[phoneCode]] [[phoneMobile]] </p>
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
          this.nameMiddle = response.profile.name_middle || "";
          this.nameLast = response.profile.name_last || "";
          this.addressCountry = response.profile.address_country || "";
          this.addressFlatNumber = response.profile.address_flat_number || "";
          this.addressBuildingName = response.profile.address_building_name || "";
          this.addressBuildingNumber = response.profile.address_building_number || "";
          this.addressOne = response.profile.address_one || "";
          this.addressTwo = response.profile.address_two || "";
          this.addressState = response.profile.address_state || "";
          this.addressTown = response.profile.address_town || "";
          this.addressZip = response.profile.address_zip || "";
          this.phoneCode = response.profile.phone_code || "";
          this.phoneMobile = response.profile.phone_mobile || "";
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

} window.customElements.define('review-route', ReviewRoute);
