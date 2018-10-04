import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      * { 
        margin: 0; 
        padding: 0; 
        border: 0; 
      }
      *:focus {
        outline: none !important;
      }
      :host {
        display: block;
        min-height: 100vh;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
