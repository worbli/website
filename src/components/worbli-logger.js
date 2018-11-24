import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../worbli-env.js';

class WorbliLogger extends PolymerElement {
  static get template() {
    return html`
    <worbli-env api-path="{{apiPath}}""></worbli-env>`;
  }
  static get properties() {
    return {
        apiPath: {
            type: Text,
        },
    };
  }

log(_action, _data){
    if (_action) {
        const action = _action;
        const data = _data || {};
        const created_at = (new Date).getTime();
        const browser = this._browser();
        const token = localStorage.getItem("token") || '';
        this._send({action, data, created_at, browser, token});
    }
}

_send(_data){
    const data = _data;
    const url = `${this.apiPath}/logger/log/`;
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data), 
        headers:{'Content-Type': 'application/json'}
    })
}

_browser(){
    var userAgent= navigator.userAgent, tem, 
    M= userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(userAgent) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= userAgent.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= userAgent.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
}




} window.customElements.define('worbli-logger', WorbliLogger);