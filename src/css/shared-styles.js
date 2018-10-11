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
      }
      :host {
        --grey-keyline: rgba(220, 226, 239, 1);
        --grey-text: rgba(120, 131, 145, 1);
        --blue-navigation: rgba(38, 40, 88, 1);
        --blue-button: rgba(13, 28, 114, 1);
        --blue-text: rgba(13, 28, 114, 1);
      }
      p {
        line-hright: 3em;
      }
      
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
