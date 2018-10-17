import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';

class WorbliRoadmap extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">

    </style>
    <div class="container">
        <div><img src="./images/road-map/[[status]].png"></div>
        <div>[[title]]</div>
    </div>
    `;
  }
  static get properties() {
    return {
        title: {
            type: Text,
        },
        status: {
            type: Text,
        },
    };
  }

} window.customElements.define('worbli-roadmap', WorbliRoadmap);