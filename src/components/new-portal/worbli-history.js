import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';
class WorbliHistory extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          margin: 24px;
        }
        .container {
            border: 1px solid #BDC1C6;
            background-color: #F8F8F8;
            display: block;
            margin: 12px 24px;
            display: flex;
            flex-wrap: wrap;
            color: #636570;
        }
        .container div {
            flex: 1;
            padding: 12px;
        }
        .date-time, .amount-claimed, .status {
            text-align: center;
        }
        p {
            margin: 0;
        }
        h1 {
            display: block;
            margin: 12px 24px;
            border-top: 1px solid #B1B2C6;
            border-bottom: 1px solid #B1B2C6;
            color: #636570;
            font-size: 24px;
            font-weight: 600;
            padding: 12px;
            background-image: url('./images/history.svg');
            background-repeat: no-repeat;
            background-size: 30px 30px;
            background-position: 0 16px; 
            text-indent: 24px;
        }
        .pending{
            background-color: #636570;
        }
        .sucess{
            background-color: #7FCE75;
        }
        .fail{
            background-color: #AB4949;
        }
        .status{
            color: white;
        }
        .status strong {
            text-transform: capitalize;
        }
        </style>
        <h1>History</h1>
        <dom-repeat items="{{formatted}}">
            <template>
            <div class="container">
                <div class="account"><p>EOS account:</p> <strong>[[item.accountName]]</strong></div>
                <div class="date-time"><p>[[item.dateHours]]</p><strong>[[item.dateTime]]</strong></div>
                <div class="amount-claimed"><p>Amount&nbspclaimed:</p><strong>[[item.claimed]]</strong></div>
                <div class$="status [[item.status]]"><p>Status:</p><strong>[[item.status]]</strong></div>
            </div>
            

            </template>
        </dom-repeat>
    `;
  }
  static get properties() {
    return {
        history: {
        type: Object,
        observer: '_history',
      },
      formatted: {
        type: Object,
      },
    };
  }

  _history(){
      this.formatted = this.history;
      this.history.map((obj) => {
        var date = new Date(obj.dateTime *1000);
        var hours = date.getHours();
        var minutes = date.getMinutes();
        obj.dateTime = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`, 
        obj.dateHours = `${hours < 10 ? '0' + hours.toString() : hours.toString()}:${minutes < 10 ? '0' + minutes.toString() : minutes.toString()}`;
        return obj
      })
  }

} window.customElements.define('worbli-history', WorbliHistory);

