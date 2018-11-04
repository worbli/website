import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';

class WorbliProfile extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">
    img {
        -moz-box-shadow: inset 0 0 10px #000000;
        -webkit-box-shadow: inset 0 0 10px #000000;
        box-shadow: inset 0 0 10px #000000;
        border-radius: 50%;
        opacity: 0.85;
        margin-top:40px;
        margin-bottom:20px;
    }
    img:hover {
        opacity: 1;
    }
    .container {
        position: relative;
    }
    h4 {
        font-size: 14px;
        color: var(--blue-text);
        font-weight: 600;
        text-transform: capitalize;
    }
    p {
        font-size: 11px;
        margin-bottom: 12px;
    }
    .footer{
        border-top: 1px solid #f5f5f5;
        text-align: right; 
    }
    .linked-in{
        background: url('./images/sprite.png') -81px -82px;
        background-size: 200px;
        width: 20px;
        height: 20px;
        display: inline-block;
        margin: 12px 10px 6px 6px;
    }
    .linked-in-none{
        background-size: 200px;
        width: 20px;
        height: 20px;
        display: inline-block;
        margin: 12px 10px 6px 6px;
    }

    .flip-container {
        -webkit-perspective: 1000;
        -moz-perspective: 1000;
        -o-perspective: 1000;
        perspective: 1000;
        margin: 6px 6px;
    }

	.flip-container:hover 
    .flipper,  
    .flip-container.hover 
    .flipper {
		-webkit-transform: rotateY(180deg);
		-moz-transform: rotateY(180deg);
        -o-transform: rotateY(180deg);
		transform: rotateY(180deg);
	}
    .flip-container, .front, .back {
        width: 270px;
        height: 255px;
    }

    .flipper {
        -webkit-transition: 0.6s;
        -webkit-transform-style: preserve-3d;
        -moz-transition: 0.6s;
        -moz-transform-style: preserve-3d;
        -o-transition: 0.6s;
        -o-transform-style: preserve-3d;
        transition: 0.6s;
        transform-style: preserve-3d;
        position: relative;
    }

    .front, .back {
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        -o-backface-visibility: hidden;
        backface-visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
    }

    .front {
        text-align: center;
        z-index: 2;
        background: #FFF;
        border-radius: 3px;
        box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
        -webkit-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
        -moz-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
    }

    .back {
        background: #FFF;
        border-radius: 3px;
        box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
        -webkit-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
        -moz-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
        -webkit-transform: rotateY(180deg);
        -moz-transform: rotateY(180deg);
        -o-transform: rotateY(180deg);
        transform: rotateY(180deg);
    }
    .profile{
        text-align: left;
        margin: 12px;
        height:185px;
        overflow: hidden;
    }


    @media only screen and (max-width: 600px){
        .container {
            min-width: 162px;
            margin-right: 0px;
        }
        h4 {
            font-size: 12px;
            color: var(--blue-text);
            font-weight: 600;
            text-transform: capitalize;
        }
        .flip-container, .front, .back {
    width: 316px;
    height: 255px;
}
    }
    </style>
        <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
            <div class="flipper">
                <div class="front">
                    <img src="./images/team-photos/[[name]].png" width="120px" height="120px" alt="[[formattedName]]">
                    <h4>[[formattedName]]</h4>
                    <p>[[title]]</p>
                </div>
                <div class="back">
                    <p class="profile">[[profile]]</p>
                    <div class="footer">
                        <template is="dom-if" if="{{linkedin}}">
                            <a href="https://www.linkedin.com/in/[[linkedin]]/" target="_blaank"><div class="linked-in"></div><a>
                        </template>
                        <template is="dom-if" if="{{!linkedin}}">
                            <div class="linked-in-none"></div>
                        </template> 
                        
                    <div>
                </div>
            </div>
        </div>
    `;
  }
  static get properties() {
    return {
        name: {
            type: Text,
            observer: '_format'
        },
        formattedName: {
            type: Text,
        },
        title: {
            type: Text,
        },
        linkedin: {
            type: Text,
        },
        profile: {
            type: Text,
        },
    };
  }
  _format(){
    this.formattedName = this.name.replace(new RegExp('-', 'g'), ' ');
  }

} window.customElements.define('worbli-profile', WorbliProfile);