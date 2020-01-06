import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';
import '../components/side-bar/worbli-telegram.js';
import '../components/side-bar/worbli-support.js';
import '../components/worbli-title.js';

class ArbitrationTermsRoute extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
        iframe {
          margin-top: 50px;
          margin-bottom: 50px;
          width: 100%;
          height: 4000px;
        }
        .split {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .side {
          width: 280px;
          padding-left: 30px;
        }
        .main {
          flex-grow: 1;
          max-width: 770px;
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
        h1 {
          color: var(--blue-text);
          font-weight: 200;
          margin-bottom: 12px;
        }
        h2 {
          color: var(--blue-text);
          font-size: 21px;
          font-weight: 600;
          margin-bottom: 12px;
          margin-top: 12px;
        }
        .c9 {
          display:none;
        }
        ol {
				  list-style-type: none;
				  counter-reset: item;
				  margin: 0;
				  padding: 0;
				}
				
				ol > li {
				  display: table;
				  counter-increment: item;
				  margin-bottom: 0.6em;
				}
				
				ol > li:before {
				  content: counters(item, ".") ". ";
				  display: table-cell;
				  padding-right: 0.6em;    
				}
				
				li ol > li {
				  margin: 0;
				}
				
				li ol > li:before {
				  content: counters(item, ".") " ";
				}
				strong {
          color: var(--blue-text);
					display: block;
					margin-bottom: 20px;
					margin-top: 20px;
        }
      </style>
      <worbli-title title="WORBLI Arbitration Rules"></worbli-title>  
      <div class="split">
        <div class="main">
						<ol>
							<li><strong>Aplication of these rules</strong>
							<ol>
								<li>Pursuant to the Platform Terms, Network Terms or BP Terms (as applicable), the Foundation and You have agreed to resolve any dispute by arbitration to be carried out in accordance with these WORBLI Arbitration Rules as amended, updated or replaced from time to time (the "Arbitration Rules", "Rules").</li>
								<li>The arbitrator has been appointed by the Foundation pursuant to an appointment of arbitrator agreement which incorporates these Arbitration Rules (the "Arbitrator") to resolve disputes (i) between the Foundation and a User/s or any other interested parties and (ii) between one or more Users or interested parties (each a "Party", together the "Parties") arising out of or relating to the User Terms, the Platform, the Network or Your relationship with WORBLI.  A copy of the appointment of arbitrator agreement can be provided upon request.</li>
							</ol>
							</li>
							
							<li><strong>Interpretation</strong>
							<ol>
								<li>Capitalised terms not defined in these Arbitration Rules will have the meaning set out in the Platform Terms or Network Terms.</li>
							</ol></li>
						
							<li><strong>Independence</strong>
							<ol>
								<li>The Arbitrator acknowledges that it has a duty to act independently and impartially in this matter regardless of how or by whom they were appointed.</li>
								<li>On and from the date of the Notice of Arbitration being serviced, the Arbitrator will have no communications with any of the Parties or their counsel regarding this arbitration except as set out in these Arbitration Rules.</li>
								<li>Prior to the commencement of any arbitration under these Arbitration Rules, the Arbitrator will disclose to all Parties any other circumstance that would call into question its ability to adjudicate this dispute in an independent and impartial manner.</li>
								<li>The Parties confirm that they do not object to and are not aware of any grounds upon which to object to the appointment of the Arbitrator to arbitrate their Dispute.</li>
								<li>The Parties waive any objection to the appointment of the Arbitrator on the ground of any conflict of interest, lack of independence or impartiality in respect of matters known to them.</li>
								<li>These Arbitration Rules apply to the arbitration to be carried out, subject to such modification as the Parties may agree upon.</li>
							</ol></li>
						
							<li><strong>Purpose</strong>
							<ol>
								<li>The over-riding duty of the Arbitrator is to obtain a fair resolution of a dispute without unnecessary delay or expense.</li>
							</ol></li>
						
							<li><strong>Arbitrator's fees</strong>
							<ol>
								<li>The Party making the claim will be required to deposit into the Worbli Arbitration Account a fee denominated in WBI according to the fee schedule outlined in 5.2.  The Arbitrator will advise the Parties of its hourly charge out rate (which shall not be more than USD [150] per hour) and the estimated time necessary to conduct the hearing.</li>
								<li>The Arbitrator filing fee is set according to the arbitration internal rules and is available upon request from the arbitrator.</li>
								<li>Following an initial review of the Parties' cases, the Arbitrator may request a further amount be deposited where it takes the view that the hearing will require further scrutiny.</li>
								<li>The Arbitrator, in making his determination, will decide how the Arbitration fees will be payable by the Parties including that it may waive some or all of the fees (at its discretion).</li>
							</ol></li>
						
							<li><strong>Notice of arbitration</strong>
							<ol>
								<li>The Party commencing arbitration (the “Claimant”) shall deliver a Notice of Arbitration to the opposing Party (the “Respondent”) and shall at the same time deliver a copy of the Notice of Arbitration to the Arbitrator. The Notice of Arbitration shall contain:
								<ol>
									<li>the names, addresses and detailed contact information of the Parties and any Representatives (where such information is known by the Claimant);</li>
									<li>a reference to the arbitration clause or agreement that is invoked;</li>
									<li>a reference to any contract out of or in relation to which the dispute arises;</li>
									<li>a statement of the nature of the dispute, the material facts being relied on and the issues being raised;</li>
									<li>the relief that is claimed.</li>
								</ol></li>
								<li>Arbitration proceedings shall be deemed to commence on the day on which the Arbitrator receives the Arbitration Notice.</li>
								<li>The Arbitrator shall communicate to the Parties a written acknowledgement of receipt of the Notice of Arbitration, indicating the date of receipt, and invite the Respondent to submit a short answer thereto.</li>
							</ol></li>
						
							<li><strong>Preliminary hearings</strong>
							<ol>
								<li>The Arbitrator may convene a preliminary hearing to resolve procedural issues and establish a timetable. A preliminary hearing agenda may include points for discussion leading to identification and clarification of the issues in dispute.</li>
								<li>A preliminary hearing may take place by conference telephone call or an other equally expeditious means of communication available to the parties.</li>
							</ol></li>
						
							<li><strong>Conduct of proceedings; evidence</strong>
							<ol>
								<li>Subject to these Arbitration Rules, the Arbitrator may conduct the arbitration in such manner as it considers appropriate, provided that the Parties are treated equally and fairly, and each Party is given an opportunity to present its case and to respond to the other Party’s case.</li>
								<li>Any Party may be represented by counsel or other authorized representative. A Party intending to be so represented shall notify the other Party and the Arbitrator of the name and address of the Representative prior to the date set for the hearing or other procedural occurrence at which that person is first to appear. When such a Representative initiates arbitration or responds for a Party, notice is deemed to have been given.</li>
								<li>The Arbitrator will convene an initial conference to consider any preliminary matters and to make directions for the conduct of the Arbitration. Thereafter conferences may be convened as required to expedite preparation and to ready the matter for hearing.</li>
								<li>Where possible conferences will be conducted by conference call or video conferencing ( Zoom technology or Skype).</li>
								<li>Unless otherwise agreed the scope of this Arbitration shall be determined by the Arbitrator following the exchange of points of claim and any response and/or counterclaim.</li>
								<li>Communications and notifications to the Arbitrator shall in the first instance be made in writing by email to arbitration@worbli.io.</li>
								<li>It is the responsibility of each Party to advise any change of address for service. Unless and until notice of a change to a new address has been lodged with the Arbitrator and advised to all other parties, documents and notices served at the address for service recorded on the Arbitrators file shall be valid service and effective notice.</li>
								<li>Email and documents in electronic form are preferred unless otherwise directed.</li>
								<li>The Arbitrator may dispense with an oral hearing if it determines, after hearing the submissions of the Parties, that oral evidence is not necessary given the issues in dispute or not warranted given the amount in dispute.</li>
								<li>In the event of an oral hearing, witnesses may be required to swear an oath or affirm oral evidence.</li>
								<li>The Arbitrator, in its discretion, may appoint one or more neutral experts whose testimony shall be subject to cross-examination and rebuttal.</li>
								<li>All documents or information supplied to the Arbitrator by one Party shall at the same time be communicated by that Party to the other Party, unless ordered otherwise by the Arbitrator.</li>
								<li>Each Party shall have the burden of proving the facts relied on to support his or her claim or defence. The Arbitrator shall determine the admissibility, relevance, materiality, and weight of the evidence offered.</li>
							</ol></li>
						
							<li><strong>Interim measures of protection</strong>
							<ol>
								<li>At the request of any Party or where the Arbitrator determines that such an action is appropriate in the circumstances and on notice to all the other Parties, the Arbitrator may order whatever interim measures it deems necessary, including injunctive relief, measures for the protection or conservation of property, and security for costs.</li>
								<li>Such interim measures may take the form of an interim award.</li>
								<li>The Arbitrator may in its discretion apportion costs associated with the applications for interim relief in any interim award or in the final award.</li>
							</ol></li>
						
							<li><strong>Failure to comply with rules</strong>
							<ol>
								<li>Where a party fails to comply with these Arbitration Rules, or any order of the Arbitrator pursuant to these Arbitration Rules, in a manner deemed material by the Arbitrator, the Arbitrator may fix a reasonable period of time for compliance and, if the party does not comply within said period, the Arbitrator may impose a remedy it deems just, including an award on default. Prior to entering an award on default, the Arbitrator shall require the non-defaulting party to produce evidence and legal argument in support of its contentions as the Arbitrator may deem appropriate. The Arbitrator may receive such evidence and argument without the defaulting party’s presence or participation.</li>
								<li>For the avoidance of doubt, any determination for the relevant period of compliance under Rule 9.1 shall take into consideration any time period applied in a previous arbitration where the relevant facts are of such similar nature as to make applying the same time period for compliance appropriate.</li>
							</ol></li>
						
							<li><strong>Privacy and confidentiality of arbitration</strong>
							<ol>
								<li>Subject to Rules 11.2 and 11.3, all arbitrations held under these Rules are meant to be transparent to the extent possible while ensuring the Parties' rights to privacy and confidentiality are protected.</li>
								<li>The Arbitrator will ordinarily publish a summary of the relevant points determined in the decision on each arbitration case to be reviewed by the public, avoiding setting out any extraneous particulars. Parties have the right to review details to be published before the fact to protect their own interest.</li>
								<li>No information concerning the existence of the arbitration or anything which occurs or is disclosed within the arbitration shall be disclosed or used outside of the arbitration proceedings or for any other purpose by a Party except:
								<ol>
									<li>for the purpose of conducting the arbitration itself including, where necessary and appropriate, interviewing and preparing witnesses, obtaining document and other support services, and the administration of the arbitration;</li>
									<li>in connection with an application to a court for interim relief or to set aside, recognize or enforce an award;</li>
									<li>where a Party is required to do so by law or by a court or competent regulatory body.</li>
								</ol></li>
								<li>Where a Party makes disclosure as permitted by Rule 11.3 it shall only do so:
								<ol>
									<li>in respect of disclosure pursuant to Rules 11.3.2 or 11.3.3, by disclosing no more than what is legally required;</li>
									<li>by obtaining, where possible, an undertaking or order of confidentiality consistent with the Rules; and</li>
									<li>by furnishing to the Arbitrator and to the other Party, if the disclosure takes place during the arbitration, or to the other Party alone, if the disclosure takes place after the termination of the arbitration, details of the disclosure and an explanation of the reason for it.</li>
								</ol></li>
							</ol></li>
						
							<li><strong>Award</strong>
							<ol>
								<li>The decision of the Arbitrator will involve the provision of an award to a Party (the "Award").</li>
								<li>The time required by the Arbitrator to prepare and publish an Award will vary depending on the nature and complexity of the dispute but normally the Arbitrator shall endeavour to notify the parties that the Award is available within 6 weeks of receipt by the Arbitrator of the last of the submissions of the parties or within such other time as the Arbitrator may advise.</li>
								<li>Unless the parties have agreed in writing to the contrary, every Award shall contain the reasons for the Award.</li>
								<li>If, during the proceedings, the parties settle the dispute they shall immediately notify the Arbitrator and, if either party requires an Award, advise the Arbitrator of the terms of settlement.  Fess incurred up to this juncture still apply unless waived by the arbitrator. The apportionment of any fees will form part of the settlement reached externally between the parties and form part of the notification to the Arbitrator.</li>
							</ol></li>
						
							<li><strong>Enforcement of award</strong>
							<ol>
								<li>Where an award is to be effected by way of an 'on-chain' action, the Parties hereby appoint the Foundation to take such actions on their behalf (including where the Foundation is a Party to the arbitration).  Any reasonable costs incurred by the Foundation in enforcing the Award will be borne by the Parties based on the decision of the Arbitrator.</li>
							</ol></li>
						
							<li><strong>Immunity</strong>
							<ol>
								<li>The Parties hereby fully release the Arbitrator from all claims and causes of action whatsoever relating to or arising from the arbitration, now or hereafter.</li>
								<li>The parties agree that they will not call upon the Arbitrator to give evidence in any court proceeding relating to the arbitration or to any decision or award rendered by the Arbitrator.</li>
							</ol></li>

              <li><strong>Document retention</strong>
							<ol>
								<li>The Arbitrator may dispose of all documents relating to this matter after 60 days following delivery of a final Award or other termination of the arbitration.</li>
							</ol></li>
						</ol>
        </div>
        <div class="side">
          <worbli-support></worbli-support>
          <worbli-telegram></worbli-telegram>
        </div>
      </div>
      <worbli-footer name="footer"></worbli-footer>
    `;
  }
} window.customElements.define('arbitrationterms-route', ArbitrationTermsRoute);
