import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat.js';
import '../../css/shared-styles.js';

class BlockProducers extends PolymerElement {
  static get template() {
    return html`
        <style include="shared-styles">
            :host {
                display: block;
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
            .block {
                color: #3a3e46;
                font-size: 28px;
                font-weight: 800;
                text-transform: uppercase;
                line-height: 16px;
                padding: 13px 12px;
                letter-spacing: 2px;
            }
            .small {
                color: #3a3e46;
                font-size: 12px;
                font-weight: 300;
                text-transform: uppercase;
                line-height: 16px;
                padding: 1px 12px 12px;
                letter-spacing: 1px;
            }
            ul {
                list-style: none;
                padding: 12px;
                }
            li {
                display: inline;
            }
        </style>
        <div class="container">
            <div class="title">Worbli Block Producers</div>
            <dom-repeat items="{{producers}}">
                <template>
                    <ul>
                        <li>[[item.owner]]</li>
                        <li>[[item.location]]</li>
                        <li>[[item.total_votes]]</li>
                        <li>[[item.url]]</li>
                        <li>[[item.is_active]]</li>
                    </ul>
                </template>
            </dom-repeat>
        </div>
      `;
  }
  static get properties() {
    return {
        jsonrpc: {
            type: Object,
            observer: '_getBlockProducers',
        },
        interval: {
            type: Number,
        },
        producers: {
            type: Object,
        }
    };
  }

  _getBlockProducers(){
    if(this.jsonrpc){
        setInterval(()=>{
            this.jsonrpc.get_producers()
            .then((producers) => {
                this.producers = producers.rows;
                this.producers = this.producers.map(function(each_element){
                    each_element.total_votes = parseInt(each_element.total_votes);
                    return each_element
                });
            })
            .catch((err)=>{

            })
        }, this.interval);
    }
  }

} window.customElements.define('block-producers', BlockProducers);