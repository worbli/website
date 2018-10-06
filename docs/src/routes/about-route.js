define(["../worbli-portal.js"],function(_worbliPortal){"use strict";class AboutRoute extends _worbliPortal.PolymerElement{static get template(){return _worbliPortal.html`
      <style include="shared-styles">
        :host {
          display: block;
        }
      </style>
      <div class="card">
        <h1>About Route</h1>
        <p>Ea duis bonorum nec, falli paulo aliquid ei eum.</p>
        <p>Id nam odio natum malorum, tibique copiosae expetenda mel ea.Detracto suavitate repudiandae no eum. Id adhuc minim soluta nam.Id nam odio natum malorum, tibique copiosae expetenda mel ea.</p>
      </div>
      <worbli-footer name="footer"></worbli-footer>
    `}}window.customElements.define("about-route",AboutRoute)});