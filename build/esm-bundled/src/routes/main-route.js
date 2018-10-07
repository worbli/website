import{html,PolymerElement}from"../worbli-portal.js";class BlockInfo extends PolymerElement{static get template(){return html`
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
                line-height: 16px;
                padding: 1px 12px 12px;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
        </style>
        <div class="container">
            <div class="title">Current Block Info</div>
            <p class="block">[[info.head_block_num]]</p>
            <p class="small">[[info.head_block_time]]</p>
            <p class="small">Irreversible Block: <b>[[info.last_irreversible_block_num]]</b></p>
            <p class="small">Produced By: <b>[[info.head_block_producer]]</b></p>
        </div>
      `}static get properties(){return{jsonrpc:{type:Object,observer:"_getBlockInfo"},interval:{type:Number},info:{type:Object},producer:{type:Object,notify:!0,reflectToAttribute:!0}}}_getBlockInfo(){if(this.jsonrpc){setInterval(()=>{this.jsonrpc.get_info().then(info=>{info.head_block_num=info.head_block_num.toLocaleString();let formatted_block_time=info.head_block_time.split("T"),no_seconds=formatted_block_time[1].split(".");info.head_block_time=`${formatted_block_time[0]} ${no_seconds[0]}`;this.info=info;this.producer=info.head_block_producer})},this.interval)}}}window.customElements.define("block-info",BlockInfo);class BlockProducers extends PolymerElement{static get template(){return html`
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
                font-size: 12px;
                list-style: none;
                padding: 6px 0 6px 12px;
                }
            li {
                display: inline;
            }
            .number{
                display: inline-block;
                width: 30px;
                height:30px;
            }
            .logo{
                display: inline-block;
                width: 35px; 
                height:30px;
            }
            .logo img{
                width: 30px; 
                height: 30px; 
                position: relative;
                top: 10px;
            }
            .owner {
                display: inline-block;
                width: 170px;
                height:30px;
            }
            .owner a {
                text-transform: uppercase;
                letter-spacing: 1px;
                font-weight: 600;
                color: #3a3e46;
                text-decoration: none;
            }
            .location{
                display: inline-block;
                width: 200px;
                height:30px;
            }
            .totalvotes{
                display: inline-block;
                width: 250px;
                height:30px;
            }
            .red {
                background-color: #f5f5f5;
                border-bottom: 1px solid #f5f5f5;
            }
            .circle {
                display: inline-block;
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background-color: red;
            }
            .active {
                background-color: #16a085;
            }
            .blue {
                border-bottom: 1px solid #f5f5f5;
            }
            ul.blue:hover {
                background-color: #f5f5f5;
            }
        </style>
        <div class="container">
            <div class="title">Worbli Block Producers</div>
            <ul>
                <li class="number">Rank</li>
                <li class="logo"></li>
                <li class="owner">Name:</li>
                <li class="location">Location:</li>
                <li class="totalvotes">Votes:</li>
                <li>Active:</li>
            </ul>
            <dom-repeat items="{{producers}}">
                <template>
                    <ul class$="[[item.selected]]">
                        <li class="number">[[item.number]]. </li>
                        <li class="logo"><img src$="./images/bp-logos/[[item.owner]]_100x100.png"></li>
                        <li class="owner"><a href="[[item.url]]" target=”_blank”>[[item.owner]]</a></li>
                        <li class="location">[[item.location]]</li>
                        <li class="totalvotes">[[item.total_votes]]</li>
                        <li><div class$="[[item.is_active]] circle"></div></li>
                    </ul>
                </template>
            </dom-repeat>
        </div>
      `}static get properties(){return{jsonrpc:{type:Object,observer:"_getBlockProducers"},interval:{type:Number},producers:{type:Object},producer:{type:Text,observer:"_getBlockProducers"},isoCountries:{type:Object,value:{4:"Afghanistan",248:"\xC5land Islands",8:"Albania",12:"Algeria",16:"American Samoa",20:"Andorra",24:"Angola",660:"Anguilla",10:"Antarctica",28:"Antigua and Barbuda",32:"Argentina",51:"Armenia",533:"Aruba",36:"Australia",40:"Austria",31:"Azerbaijan",44:"Bahamas",48:"Bahrain",50:"Bangladesh",52:"Barbados",112:"Belarus",56:"Belgium",84:"Belize",204:"Benin",60:"Bermuda",64:"Bhutan",68:"Bolivia",535:"Bonaire, Sint Eustatius and Saba",70:"Bosnia and Herzegovina",72:"Botswana",74:"Bouvet Island",76:"Brazil",86:"British Indian Ocean Territory",96:"Brunei Darussalam",100:"Bulgaria",854:"Burkina Faso",108:"Burundi",132:"Cabo Verde",116:"Cambodia",120:"Cameroon",124:"Canada",136:"Cayman Islands",140:"Central African Republic",148:"Chad",152:"Chile",156:"China",162:"Christmas Island",166:"Cocos (Keeling) Islands",170:"Colombia",174:"Comoros",178:"Congo",180:"Congo",184:"Cook Islands",188:"Costa Rica",384:"C\xF4te dIvoire",191:"Croatia",192:"Cuba",531:"Cura\xE7ao",196:"Cyprus",203:"Czechia",208:"Denmark",262:"Djibouti",212:"Dominica",214:"Dominican Republic",218:"Ecuador",818:"Egypt",222:"El Salvador",226:"Equatorial Guinea",232:"Eritrea",233:"Estonia",748:"Eswatini",231:"Ethiopia",238:"Falkland Islands ",234:"Faroe Islands",242:"Fiji",246:"Finland",250:"France",254:"French Guiana",258:"French Polynesia",260:"French Southern Territories",266:"Gabon",270:"Gambia",268:"Georgia",276:"Germany",288:"Ghana",292:"Gibraltar",300:"Greece",304:"Greenland",308:"Grenada",312:"Guadeloupe",316:"Guam",320:"Guatemala",831:"Guernsey",324:"Guinea",624:"Guinea-Bissau",328:"Guyana",332:"Haiti",334:"Heard Island and McDonald Islands",336:"Holy See",340:"Honduras",344:"Hong Kong",348:"Hungary",352:"Iceland",356:"India",360:"Indonesia",364:"Iran",368:"Iraq",372:"Ireland",833:"Isle of Man",376:"Israel",380:"Italy",388:"Jamaica",392:"Japan",832:"Jersey",400:"Jordan",398:"Kazakhstan",404:"Kenya",296:"Kiribati",408:"Korea (Democratic Peoples Republic of)",410:"Korea (Republic of)",414:"Kuwait",417:"Kyrgyzstan",418:"Lao Peoples Democratic Republic",428:"Latvia",422:"Lebanon",426:"Lesotho",430:"Liberia",434:"Libya",438:"Liechtenstein",440:"Lithuania",442:"Luxembourg",446:"Macao",807:"Macedonia (the former Yugoslav Republic of)",450:"Madagascar",454:"Malawi",458:"Malaysia",462:"Maldives",466:"Mali",470:"Malta",584:"Marshall Islands",474:"Martinique",478:"Mauritania",480:"Mauritius",175:"Mayotte",484:"Mexico",583:"Micronesia (Federated States of)",498:"Moldova (Republic of)",492:"Monaco",496:"Mongolia",499:"Montenegro",500:"Montserrat",504:"Morocco",508:"Mozambique",104:"Myanmar",516:"Namibia",520:"Nauru",524:"Nepal",528:"Netherlands",540:"New Caledonia",554:"New Zealand",558:"Nicaragua",562:"Niger",566:"Nigeria",570:"Niue",574:"Norfolk Island",580:"Northern Mariana Islands",578:"Norway",512:"Oman",586:"Pakistan",585:"Palau",275:"Palestine, State of",591:"Panama",598:"Papua New Guinea",600:"Paraguay",604:"Peru",608:"Philippines",612:"Pitcairn",616:"Poland",620:"Portugal",630:"Puerto Rico",634:"Qatar",638:"R\xE9union",642:"Romania",643:"Russian Federation",646:"Rwanda",652:"Saint Barth\xE9lemy",654:"Saint Helena, Ascension and Tristan da Cunha",659:"Saint Kitts and Nevis",662:"Saint Lucia",663:"Saint Martin",666:"Saint Pierre and Miquelon",670:"Saint Vincent and the Grenadines",882:"Samoa",674:"San Marino",678:"Sao Tome and Principe",682:"Saudi Arabia",686:"Senegal",688:"Serbia",690:"Seychelles",694:"Sierra Leone",702:"Singapore",534:"Sint Maarten (Dutch part)",703:"Slovakia",705:"Slovenia",90:"Solomon Islands",706:"Somalia",710:"South Africa",239:"South Georgia and the South Sandwich Islands",728:"South Sudan",724:"Spain",144:"Sri Lanka",729:"Sudan",740:"Suriname",744:"Svalbard and Jan Mayen",752:"Sweden",756:"Switzerland",760:"Syrian Arab Republic",158:"Taiwan, Province of China[a]",762:"Tajikistan",834:"Tanzania, United Republic of",764:"Thailand",626:"Timor-Leste",768:"Togo",772:"Tokelau",776:"Tonga",780:"Trinidad and Tobago",788:"Tunisia",792:"Turkey",795:"Turkmenistan",796:"Turks and Caicos Islands",798:"Tuvalu",800:"Uganda",804:"Ukraine",784:"United Arab Emirates",826:"United Kingdom",840:"United States of America",581:"United States Minor Outlying Islands",858:"Uruguay",860:"Uzbekistan",548:"Vanuatu",862:"Venezuela",704:"Viet Nam",92:"Virgin Islands (British)",850:"Virgin Islands (U.S.)",876:"Wallis and Futuna",732:"Western Sahara",887:"Yemen",894:"Zambia",716:"Zimbabwe"}}}}_getBlockProducers(){if(this.jsonrpc){this.jsonrpc.get_producers().then(producers=>{let iterator=1;this.producers=producers.rows;this.producers=this.producers.map(x=>{x.total_votes=parseInt(x.total_votes);x.location=this._getCountryName(x.location);x.total_votes=x.total_votes.toLocaleString();x.selected=x.owner==this.producer?"red":"blue";x.is_active=1==x.is_active?"active":"deactive";x.number=iterator;iterator++;return x})})}}_getCountryName(countryCode){if(0===countryCode||7===countryCode){return" "}if(this.isoCountries.hasOwnProperty(countryCode)){return this.isoCountries[countryCode]}else{return countryCode}}}window.customElements.define("block-producers",BlockProducers);function jsonrpc_connect(){return eosjs_jsonrpc}var eosjs_jsonrpc=function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=!0;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:!0,get:getter})}};__webpack_require__.r=function(exports){if("undefined"!==typeof Symbol&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:!0})};__webpack_require__.t=function(value,mode){if(1&mode)value=__webpack_require__(value);if(8&mode)return value;if(4&mode&&"object"===typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:!0,value:value});if(2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module["default"]}:function(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s="./src/eosjs-jsonrpc.ts")}({"./node_modules/webpack/buildin/global.js":function(module){var g=function(){return this}();try{g=g||Function("return this")()||(1,eval)("this")}catch(e){if("object"===typeof window)g=window}module.exports=g},"./src/eosjs-jsonrpc.ts":function(module,exports,__webpack_require__){"use strict";(function(global){var __awaiter=this&&this.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator["throw"](value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value)}).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})},__generator=this&&this.__generator||function(thisArg,body){var _={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),throw:verb(1),return:verb(2)},"function"===typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=2&op[0]?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[2&op[0],t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:!1};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=0<t.length&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1];t=op;break}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_)}catch(e){op=[6,e];y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}},__values=this&&this.__values||function(o){var m="function"===typeof Symbol&&o[Symbol.iterator],i=0;if(m)return m.call(o);return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o}}}};Object.defineProperty(exports,"__esModule",{value:!0});var eosjs_numeric_1=__webpack_require__("./src/eosjs-numeric.ts"),eosjs_rpcerror_1=__webpack_require__("./src/eosjs-rpcerror.ts");function arrayToHex(data){var e_1,_a,result="";try{for(var data_1=__values(data),data_1_1=data_1.next(),x;!data_1_1.done;data_1_1=data_1.next()){x=data_1_1.value;result+=("00"+x.toString(16)).slice(-2)}}catch(e_1_1){e_1={error:e_1_1}}finally{try{if(data_1_1&&!data_1_1.done&&(_a=data_1.return))_a.call(data_1)}finally{if(e_1)throw e_1.error}}return result}var JsonRpc=function(){function JsonRpc(endpoint,args){if(void 0===args){args={}}this.endpoint=endpoint;if(args.fetch){this.fetchBuiltin=args.fetch}else{this.fetchBuiltin=global.fetch}}JsonRpc.prototype.fetch=function(path,body){return __awaiter(this,void 0,void 0,function(){var response,json,f,e_2;return __generator(this,function(_a){switch(_a.label){case 0:_a.trys.push([0,3,,4]);f=this.fetchBuiltin;return[4,f(this.endpoint+path,{body:JSON.stringify(body),method:"POST"})];case 1:response=_a.sent();return[4,response.json()];case 2:json=_a.sent();if(json.processed&&json.processed.except){throw new eosjs_rpcerror_1.RpcError(json)}return[3,4];case 3:e_2=_a.sent();e_2.isFetchError=!0;throw e_2;case 4:if(!response.ok){throw new eosjs_rpcerror_1.RpcError(json)}return[2,json];}})})};JsonRpc.prototype.get_abi=function(account_name){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:return[4,this.fetch("/v1/chain/get_abi",{account_name:account_name})];case 1:return[2,_a.sent()];}})})};JsonRpc.prototype.get_account=function(account_name){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:return[4,this.fetch("/v1/chain/get_account",{account_name:account_name})];case 1:return[2,_a.sent()];}})})};JsonRpc.prototype.get_block_header_state=function(block_num_or_id){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:return[4,this.fetch("/v1/chain/get_block_header_state",{block_num_or_id:block_num_or_id})];case 1:return[2,_a.sent()];}})})};JsonRpc.prototype.get_block=function(block_num_or_id){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:return[4,this.fetch("/v1/chain/get_block",{block_num_or_id:block_num_or_id})];case 1:return[2,_a.sent()];}})})};JsonRpc.prototype.get_code=function(account_name){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:return[4,this.fetch("/v1/chain/get_code",{account_name:account_name})];case 1:return[2,_a.sent()];}})})};JsonRpc.prototype.get_currency_balance=function(code,account,symbol){if(void 0===symbol){symbol=null}return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:return[4,this.fetch("/v1/chain/get_currency_balance",{code:code,account:account,symbol:symbol})];case 1:return[2,_a.sent()];}})})};JsonRpc.prototype.get_currency_stats=function(code,symbol){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:return[4,this.fetch("/v1/chain/get_currency_stats",{code:code,symbol:symbol})];case 1:return[2,_a.sent()];}})})};JsonRpc.prototype.get_info=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:return[4,this.fetch("/v1/chain/get_info",{})];case 1:return[2,_a.sent()];}})})};JsonRpc.prototype.get_producer_schedule=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:return[4,this.fetch("/v1/chain/get_producer_schedule",{})];case 1:return[2,_a.sent()];}})})};JsonRpc.prototype.get_producers=function(json,lower_bound,limit){if(void 0===json){json=!0}if(void 0===lower_bound){lower_bound=""}if(void 0===limit){limit=50}return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:return[4,this.fetch("/v1/chain/get_producers",{json:json,lower_bound:lower_bound,limit:limit})];case 1:return[2,_a.sent()];}})})};JsonRpc.prototype.get_raw_code_and_abi=function(account_name){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:return[4,this.fetch("/v1/chain/get_raw_code_and_abi",{account_name:account_name})];case 1:return[2,_a.sent()];}})})};JsonRpc.prototype.get_table_rows=function(_a){var _b=_a.json,json=void 0===_b?!0:_b,code=_a.code,scope=_a.scope,table=_a.table,_c=_a.table_key,table_key=void 0===_c?"":_c,_d=_a.lower_bound,lower_bound=void 0===_d?"":_d,_e=_a.upper_bound,upper_bound=void 0===_e?"":_e,_f=_a.limit,limit=void 0===_f?10:_f;return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_g){switch(_g.label){case 0:return[4,this.fetch("/v1/chain/get_table_rows",{json:json,code:code,scope:scope,table:table,table_key:table_key,lower_bound:lower_bound,upper_bound:upper_bound,limit:limit})];case 1:return[2,_g.sent()];}})})};JsonRpc.prototype.getRequiredKeys=function(args){return __awaiter(this,void 0,void 0,function(){var _a;return __generator(this,function(_b){switch(_b.label){case 0:_a=eosjs_numeric_1.convertLegacyPublicKeys;return[4,this.fetch("/v1/chain/get_required_keys",{transaction:args.transaction,available_keys:args.availableKeys})];case 1:return[2,_a.apply(void 0,[_b.sent().required_keys])];}})})};JsonRpc.prototype.push_transaction=function(_a){var signatures=_a.signatures,serializedTransaction=_a.serializedTransaction;return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_b){switch(_b.label){case 0:return[4,this.fetch("/v1/chain/push_transaction",{signatures:signatures,compression:0,packed_context_free_data:"",packed_trx:arrayToHex(serializedTransaction)})];case 1:return[2,_b.sent()];}})})};JsonRpc.prototype.db_size_get=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:return[4,this.fetch("/v1/db_size/get",{})];case 1:return[2,_a.sent()];}})})};JsonRpc.prototype.history_get_actions=function(account_name,pos,offset){if(void 0===pos){pos=null}if(void 0===offset){offset=null}return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:return[4,this.fetch("/v1/history/get_actions",{account_name:account_name,pos:pos,offset:offset})];case 1:return[2,_a.sent()];}})})};JsonRpc.prototype.history_get_transaction=function(id,block_num_hint){if(void 0===block_num_hint){block_num_hint=null}return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:return[4,this.fetch("/v1/history/get_transaction",{id:id,block_num_hint:block_num_hint})];case 1:return[2,_a.sent()];}})})};JsonRpc.prototype.history_get_key_accounts=function(public_key){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:return[4,this.fetch("/v1/history/get_key_accounts",{public_key:public_key})];case 1:return[2,_a.sent()];}})})};JsonRpc.prototype.history_get_controlled_accounts=function(controlling_account){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:return[4,this.fetch("/v1/history/get_controlled_accounts",{controlling_account:controlling_account})];case 1:return[2,_a.sent()];}})})};return JsonRpc}();exports.JsonRpc=JsonRpc}).call(this,__webpack_require__("./node_modules/webpack/buildin/global.js"))},"./src/eosjs-numeric.ts":function(module,exports,__webpack_require__){"use strict";var _StringfromCharCode=String.fromCharCode,__read=this&&this.__read||function(o,n){var m="function"===typeof Symbol&&o[Symbol.iterator];if(!m)return o;var i=m.call(o),r,ar=[],e;try{while((void 0===n||0<n--)&&!(r=i.next()).done)ar.push(r.value)}catch(error){e={error:error}}finally{try{if(r&&!r.done&&(m=i["return"]))m.call(i)}finally{if(e)throw e.error}}return ar},__spread=this&&this.__spread||function(){for(var ar=[],i=0;i<arguments.length;i++)ar=ar.concat(__read(arguments[i]));return ar},__values=this&&this.__values||function(o){var m="function"===typeof Symbol&&o[Symbol.iterator],i=0;if(m)return m.call(o);return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o}}}};Object.defineProperty(exports,"__esModule",{value:!0});var ripemd160=__webpack_require__("./src/ripemd.js").RIPEMD160.hash,base58Chars="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",base64Chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var base58Map=function(){for(var base58M=Array(256).fill(-1),i=0;i<base58Chars.length;++i){base58M[base58Chars.charCodeAt(i)]=i}return base58M}();var base64Map=function(){for(var base64M=Array(256).fill(-1),i=0;i<base64Chars.length;++i){base64M[base64Chars.charCodeAt(i)]=i}base64M["=".charCodeAt(0)]=0;return base64M}();function isNegative(bignum){return 0!==(128&bignum[bignum.length-1])}exports.isNegative=isNegative;function negate(bignum){for(var carry=1,i=0,x;i<bignum.length;++i){x=(255&~bignum[i])+carry;bignum[i]=x;carry=x>>8}}exports.negate=negate;function decimalToBinary(size,s){for(var result=new Uint8Array(size),i=0,srcDigit;i<s.length;++i){srcDigit=s.charCodeAt(i);if(srcDigit<"0".charCodeAt(0)||srcDigit>"9".charCodeAt(0)){throw new Error("invalid number")}for(var carry=srcDigit-"0".charCodeAt(0),j=0,x;j<size;++j){x=10*result[j]+carry;result[j]=x;carry=x>>8}if(carry){throw new Error("number is out of range")}}return result}exports.decimalToBinary=decimalToBinary;exports.signedDecimalToBinary=function(size,s){var negative="-"===s[0];if(negative){s=s.substr(1)}var result=decimalToBinary(size,s);if(negative){negate(result);if(!isNegative(result)){throw new Error("number is out of range")}}else if(isNegative(result)){throw new Error("number is out of range")}return result};function binaryToDecimal(bignum,minDigits){if(void 0===minDigits){minDigits=1}for(var result=Array(minDigits).fill("0".charCodeAt(0)),i=bignum.length-1,carry;0<=i;--i){carry=bignum[i];for(var j=0,x;j<result.length;++j){x=(result[j]-"0".charCodeAt(0)<<8)+carry;result[j]="0".charCodeAt(0)+x%10;carry=0|x/10}while(carry){result.push("0".charCodeAt(0)+carry%10);carry=0|carry/10}}result.reverse();return _StringfromCharCode.apply(String,__spread(result))}exports.binaryToDecimal=binaryToDecimal;exports.signedBinaryToDecimal=function(bignum,minDigits){if(void 0===minDigits){minDigits=1}if(isNegative(bignum)){var x=bignum.slice();negate(x);return"-"+binaryToDecimal(x,minDigits)}return binaryToDecimal(bignum,minDigits)};function base58ToBinary(size,s){for(var result=new Uint8Array(size),i=0,carry;i<s.length;++i){carry=base58Map[s.charCodeAt(i)];if(0>carry){throw new Error("invalid base-58 value")}for(var j=0,x;j<size;++j){x=58*result[j]+carry;result[j]=x;carry=x>>8}if(carry){throw new Error("base-58 value is out of range")}}result.reverse();return result}exports.base58ToBinary=base58ToBinary;function binaryToBase58(bignum,minDigits){if(void 0===minDigits){minDigits=1}var e_1,_a,e_2,_b,result=[];try{for(var bignum_1=__values(bignum),bignum_1_1=bignum_1.next();!bignum_1_1.done;bignum_1_1=bignum_1.next()){for(var byte=bignum_1_1.value,carry=byte,j=0,x;j<result.length;++j){x=(base58Map[result[j]]<<8)+carry;result[j]=base58Chars.charCodeAt(x%58);carry=0|x/58}while(carry){result.push(base58Chars.charCodeAt(carry%58));carry=0|carry/58}}}catch(e_1_1){e_1={error:e_1_1}}finally{try{if(bignum_1_1&&!bignum_1_1.done&&(_a=bignum_1.return))_a.call(bignum_1)}finally{if(e_1)throw e_1.error}}try{for(var bignum_2=__values(bignum),bignum_2_1=bignum_2.next(),byte;!bignum_2_1.done;bignum_2_1=bignum_2.next()){byte=bignum_2_1.value;if(byte){break}else{result.push("1".charCodeAt(0))}}}catch(e_2_1){e_2={error:e_2_1}}finally{try{if(bignum_2_1&&!bignum_2_1.done&&(_b=bignum_2.return))_b.call(bignum_2)}finally{if(e_2)throw e_2.error}}result.reverse();return _StringfromCharCode.apply(String,__spread(result))}exports.binaryToBase58=binaryToBase58;exports.base64ToBinary=function(s){var len=s.length;if(1===(3&len)&&"="===s[len-1]){len-=1}if(0!==(3&len)){throw new Error("base-64 value is not padded correctly")}var groups=len>>2,bytes=3*groups;if(0<len&&"="===s[len-1]){if("="===s[len-2]){bytes-=2}else{bytes-=1}}for(var result=new Uint8Array(bytes),group=0;group<groups;++group){var digit0=base64Map[s.charCodeAt(4*group+0)],digit1=base64Map[s.charCodeAt(4*group+1)],digit2=base64Map[s.charCodeAt(4*group+2)],digit3=base64Map[s.charCodeAt(4*group+3)];result[3*group+0]=digit0<<2|digit1>>4;if(3*group+1<bytes){result[3*group+1]=(15&digit1)<<4|digit2>>2}if(3*group+2<bytes){result[3*group+2]=(3&digit2)<<6|digit3}}return result};exports.publicKeyDataSize=33;exports.privateKeyDataSize=32;exports.signatureDataSize=65;function digestSuffixRipemd160(data,suffix){for(var d=new Uint8Array(data.length+suffix.length),i=0;i<data.length;++i){d[i]=data[i]}for(var i=0;i<suffix.length;++i){d[data.length+i]=suffix.charCodeAt(i)}return ripemd160(d)}function stringToKey(s,type,size,suffix){var whole=base58ToBinary(size+4,s),result={type:type,data:new Uint8Array(whole.buffer,0,size)},digest=new Uint8Array(digestSuffixRipemd160(result.data,suffix));if(digest[0]!==whole[size+0]||digest[1]!==whole[size+1]||digest[2]!==whole[size+2]||digest[3]!==whole[size+3]){throw new Error("checksum doesn't match")}return result}function keyToString(key,suffix,prefix){for(var digest=new Uint8Array(digestSuffixRipemd160(key.data,suffix)),whole=new Uint8Array(key.data.length+4),i=0;i<key.data.length;++i){whole[i]=key.data[i]}for(var i=0;4>i;++i){whole[i+key.data.length]=digest[i]}return prefix+binaryToBase58(whole)}function stringToPublicKey(s){if("string"!==typeof s){throw new Error("expected string containing public key")}if("EOS"===s.substr(0,3)){for(var whole=base58ToBinary(exports.publicKeyDataSize+4,s.substr(3)),key={type:0,data:new Uint8Array(exports.publicKeyDataSize)},i=0;i<exports.publicKeyDataSize;++i){key.data[i]=whole[i]}var digest=new Uint8Array(ripemd160(key.data));if(digest[0]!==whole[exports.publicKeyDataSize]||digest[1]!==whole[34]||digest[2]!==whole[35]||digest[3]!==whole[36]){throw new Error("checksum doesn't match")}return key}else if("PUB_K1_"===s.substr(0,7)){return stringToKey(s.substr(7),0,exports.publicKeyDataSize,"K1")}else if("PUB_R1_"===s.substr(0,7)){return stringToKey(s.substr(7),1,exports.publicKeyDataSize,"R1")}else{throw new Error("unrecognized public key format")}}exports.stringToPublicKey=stringToPublicKey;function publicKeyToString(key){if(0===key.type&&key.data.length===exports.publicKeyDataSize){return keyToString(key,"K1","PUB_K1_")}else if(1===key.type&&key.data.length===exports.publicKeyDataSize){return keyToString(key,"R1","PUB_R1_")}else{throw new Error("unrecognized public key format")}}exports.publicKeyToString=publicKeyToString;function convertLegacyPublicKey(s){if("EOS"===s.substr(0,3)){return publicKeyToString(stringToPublicKey(s))}return s}exports.convertLegacyPublicKey=convertLegacyPublicKey;exports.convertLegacyPublicKeys=function(keys){return keys.map(convertLegacyPublicKey)};exports.stringToPrivateKey=function(s){if("string"!==typeof s){throw new Error("expected string containing private key")}if("PVT_R1_"===s.substr(0,7)){return stringToKey(s.substr(7),1,exports.privateKeyDataSize,"R1")}else{throw new Error("unrecognized private key format")}};exports.privateKeyToString=function(key){if(1===key.type){return keyToString(key,"R1","PVT_R1_")}else{throw new Error("unrecognized private key format")}};exports.stringToSignature=function(s){if("string"!==typeof s){throw new Error("expected string containing signature")}if("SIG_K1_"===s.substr(0,7)){return stringToKey(s.substr(7),0,exports.signatureDataSize,"K1")}else if("SIG_R1_"===s.substr(0,7)){return stringToKey(s.substr(7),1,exports.signatureDataSize,"R1")}else{throw new Error("unrecognized signature format")}};exports.signatureToString=function(signature){if(0===signature.type){return keyToString(signature,"K1","SIG_K1_")}else if(1===signature.type){return keyToString(signature,"R1","SIG_R1_")}else{throw new Error("unrecognized signature format")}}},"./src/eosjs-rpcerror.ts":function(module,exports){"use strict";var __extends=this&&this.__extends||function(){var extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p]};return function(d,b){extendStatics(d,b);function __(){this.constructor=d}d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0});var RpcError=function(_super){__extends(RpcError,_super);function RpcError(json){var _this=this;if(json.error&&json.error.details&&json.error.details.length&&json.error.details[0].message){_this=_super.call(this,json.error.details[0].message)||this}else if(json.processed&&json.processed.except&&json.processed.except.message){_this=_super.call(this,json.processed.except.message)||this}else{_this=_super.call(this,json.message)||this}Object.setPrototypeOf(_this,RpcError.prototype);_this.json=json;return _this}return RpcError}(Error);exports.RpcError=RpcError},"./src/ripemd.js":function(module){"use strict";class RIPEMD160{constructor(){}static get_n_pad_bytes(message_size){return 64-(63&message_size+8)}static pad(message){const message_size=message.byteLength,n_pad=RIPEMD160.get_n_pad_bytes(message_size),[msg_bit_size_most,msg_bit_size_least]=((dividend,divisor)=>[Math.floor(dividend/divisor),dividend%divisor])(message_size,536870912).map((x,index)=>index?8*x:x),padded=new Uint8Array(message_size+n_pad+8);padded.set(new Uint8Array(message),0);const data_view=new DataView(padded.buffer);data_view.setUint8(message_size,128);data_view.setUint32(message_size+n_pad,msg_bit_size_least,!0);data_view.setUint32(message_size+n_pad+4,msg_bit_size_most,!0);return padded.buffer}static f(j,x,y,z){if(0<=j&&15>=j){return x^y^z}if(16<=j&&31>=j){return x&y|~x&z}if(32<=j&&47>=j){return(x|~y)^z}if(48<=j&&63>=j){return x&z|y&~z}if(64<=j&&79>=j){return x^(y|~z)}}static K(j){if(0<=j&&15>=j){return 0}if(16<=j&&31>=j){return 1518500249}if(32<=j&&47>=j){return 1859775393}if(48<=j&&63>=j){return 2400959708}if(64<=j&&79>=j){return 2840853838}}static KP(j){if(0<=j&&15>=j){return 1352829926}if(16<=j&&31>=j){return 1548603684}if(32<=j&&47>=j){return 1836072691}if(48<=j&&63>=j){return 2053994217}if(64<=j&&79>=j){return 0}}static add_modulo32(){return 0|Array.from(arguments).reduce((a,b)=>a+b,0)}static rol32(value,count){return value<<count|value>>>32-count}static hash(message){const padded=RIPEMD160.pad(message),r=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],rP=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],s=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],sP=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11],block_size=64,t=padded.byteLength/block_size,X=Array(t).fill(void 0).map((_,i)=>new Proxy(new DataView(padded,i*block_size,block_size),{get(block_view,j){return block_view.getUint32(j*4,!0)}}));let h=[1732584193,4023233417,2562383102,271733878,3285377520];for(let i=0;i<t;++i){let A=h[0],B=h[1],C=h[2],D=h[3],E=h[4],AP=A,BP=B,CP=C,DP=D,EP=E;for(let j=0,T;80>j;++j){T=RIPEMD160.add_modulo32(RIPEMD160.rol32(RIPEMD160.add_modulo32(A,RIPEMD160.f(j,B,C,D),X[i][r[j]],RIPEMD160.K(j)),s[j]),E);A=E;E=D;D=RIPEMD160.rol32(C,10);C=B;B=T;T=RIPEMD160.add_modulo32(RIPEMD160.rol32(RIPEMD160.add_modulo32(AP,RIPEMD160.f(79-j,BP,CP,DP),X[i][rP[j]],RIPEMD160.KP(j)),sP[j]),EP);AP=EP;EP=DP;DP=RIPEMD160.rol32(CP,10);CP=BP;BP=T}let T=RIPEMD160.add_modulo32(h[1],C,DP);h[1]=RIPEMD160.add_modulo32(h[2],D,EP);h[2]=RIPEMD160.add_modulo32(h[3],E,AP);h[3]=RIPEMD160.add_modulo32(h[4],A,BP);h[4]=RIPEMD160.add_modulo32(h[0],B,CP);h[0]=T}const result=new ArrayBuffer(20),data_view=new DataView(result);h.forEach((h_i,i)=>data_view.setUint32(4*i,h_i,!0));return result}}module.exports={RIPEMD160}}}),eosjsJsonrpc={jsonrpc_connect:jsonrpc_connect};class WorbliRpc extends PolymerElement{static get template(){return html``}static get properties(){return{connect:{type:Boolean,value:!1,observer:"_connect"},connected:{type:Boolean,value:!1},endpoint:{type:String},jsonrpc:{type:Object,notify:!0,reflectToAttribute:!0}}}_connect(){if(this.endpoint){const eosrpc=jsonrpc_connect();this.jsonrpc=new eosrpc.JsonRpc(this.endpoint)}}}window.customElements.define("worbli-rpc",WorbliRpc);class MainRoute extends PolymerElement{static get template(){return html`
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
        }
        .main {
          flex-grow: 1;
          padding-left: 30px;
        }
  
      </style>
      <worbli-rpc connect endpoint="http://18.191.86.34:8888" jsonrpc="{{jsonrpc}}"></worbli-rpc>
      <!-- <worbli-rpc connect endpoint="https://api.eosnewyork.io" jsonrpc="{{jsonrpc}}"></worbli-rpc> -->


      
      <div class="split">
        <block-info class="side" jsonrpc="[[jsonrpc]]" producer="{{producer}}" interval="500"></block-info>
        <block-producers class="main" jsonrpc="[[jsonrpc]]" producer="[[producer]]" interval="500"></block-producers>
      </div>
      <worbli-footer name="footer"></worbli-footer>
    `}}window.customElements.define("main-route",MainRoute);export{eosjsJsonrpc as $eosjsJsonrpc,jsonrpc_connect};