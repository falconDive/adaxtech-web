import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Grid } from 'semantic-ui-react';

import basetradeLogo from './../../assets/adax/logo.svg';

export const Static = styled.div`
	color: #ffffff;
	line-height: 2.1;
	padding: 50px 0;
	h2 {
		margin-bottom: 30px;
	}
	.basetradeLogo {
		width: 100%;
		max-width: 350px;
	}
`;

export default class CookiePolicy extends Component {
	render() {
		let language = localStorage.getItem('lang');
		let en = (
			<div>
				<h2> AML/KYC Policy </h2>
				<p>
					Unless otherwise stated, capitalized terms in this AML/KYC Policy have the same meaning as in the
					ADAX Exchange and Base Trade Terms of Business. Please note that this AML/KYC Policy may be updated
					by ADAX from time to time. “User” means a user of ADAX Exchange or Base Trade as appropriate.
				</p>
				<ol>
					<li>
						<p>
							<strong>Introduction</strong>
						</p>
						<p>
							The Anti-Money Laundering and Know Your Customer Policy (the "AML/KYC Policy") of ADAX Tech
							Limited, Basetrade Limited and their affiliates ("we", "our", "us" or "ADAX") is established
							to prevent and mitigate possible risks of ADAX being involved in illegal or illicit
							activities and to enable ADAX to meet its legal and regulatory obligations in this area.
							This AML/KYC Policy is subject to changes and updates by ADAX from time to time to ensure
							compliance with applicable legislation and global AML/KYC practices.
						</p>
					</li>
					<li>
						<p>
							<strong>Definitions</strong>
						</p>
						<p>
							All definitions given herein are based on and/or are consistent with the Financial Action
							Task Force (International Standards on Combatting Money Laundering and the Financing of
							Terrorism and Proliferation – The FAFT Recommendations).
						</p>
						<p>
							"<strong>Politically Exposed Person</strong>" means a natural person who is or has been
							entrusted with prominent public functions, other than middle ranking or more junior
							officials. For the purposes of this definition, the term "natural persons who are or have
							been entrusted with prominent public “functions" includes the following:
						</p>
						<ol class="alpha">
							<li>
								Heads of State, Heads of Government, Ministers, Deputy or Assistant Ministers, and
								Parliamentary Secretaries;
							</li>
							<li>Members of Parliament or similar legislative bodies;</li>
							<li>Members of the governing bodies of political parties;</li>
							<li>
								Members of superior, supreme, and constitutional courts or of other high-level judicial
								bodies whose decisions are not subject to further appeal, except in exceptional
								circumstances;
							</li>
							<li>Members of courts of auditors or of the boards of central banks;</li>
							<li>Ambassadors, charges d’affaires and high ranking officers in the armed forces;</li>
							<li>
								Members of the administrative, management or supervisory boards of State-owned
								enterprises;
							</li>
							<li>
								Anyone exercising a function equivalent to those set out in paragraphs (a) to (f) within
								an institution of the European Union or any other international body;
							</li>
						</ol>
						<p>
							Furthermore, Politically Exposed Person includes also family members or persons known to be
							close associates of any individual identified in (a) – (g) above.
						</p>
						<p>The term “family members” includes:</p>
						<ul>
							<li>the spouse, or a person considered to be equivalent to a spouse;</li>
							<li>
								the children and their spouses, or persons considered to be equivalent to a spouse; and
							</li>
							<li>the parents.</li>
						</ul>
						<p>"Persons known to be close associates" means:</p>
						<ul>
							<li>
								a natural person known to have joint beneficial ownership of a body corporate or any
								other form of legal arrangement, or any other close business relations, with that
								politically exposed person; or
							</li>
							<li>
								a natural person who has sole beneficial ownership of a body corporate or any other form
								of legal arrangement that is known to have been established for the benefit of that
								politically exposed person.
							</li>
						</ul>
						<p>
							"<strong>PRC</strong>" means the People’s Republic of China (excluding the special
							administrative regions of Hong Kong and Macau, and Taiwan).
						</p>
						<p>
							"<strong>Prohibited Jurisdiction</strong>" means the jurisdictions designated by Adax as a
							Prohibited Jurisdiction in respect of any Service from time to time.{' '}
						</p>
						<p>
							"<strong>Sanctioned Jurisdiction</strong>" means any country or territory to the extent that
							such country or territory is the subject of any sanction issued by the United Nations,
							United States and/or the European Union.{' '}
						</p>
						<p>
							"<strong>Sanctioned Person</strong>" means any individual or entity (a) identified on a
							sanctions list issued by the United Nations, United States and/or the European Union; (b)
							organized, domiciled or resident in a Sanctioned Jurisdiction; or (c) otherwise the subject
							or target of any sanctions, including by reason of ownership or control by one or more
							individuals or entities described in clauses (a) or (b).{' '}
						</p>
						<p>
							"<strong>Service</strong>" means the (i) sale or issuance of digital tokens to a person by
							Adax; (ii) advisory, brokerage, trading and exchange services in respect of digital tokens
							provided by Adax; and (iii) other services provided by Adax from time to time.{' '}
						</p>
						<p>
							"<strong>User</strong>" means a person using Adax’s services, with or without prior
							registration and authorization of Adax, including for the purchase of tokens from Adax.
						</p>
					</li>
					<li>
						<p>
							<strong>Initial and ongoing screening</strong>
						</p>
						<p>
							Adax will screen a User prior to providing any Service to such User, and will continue to
							screen such User on an ongoing basis, to ensure that such User is not a Sanctioned Person,
							from a Sanctioned Jurisdiction and/or a person from a Prohibited Jurisdiction. If a User is
							a Sanctioned Person, from a Sanctioned Jurisdiction and/or a person from a Prohibited
							Jurisdiction, Adax will refuse to provide Services to such User or discontinue provision of
							Services. In carrying out this screening Adax shall ensure to adopt software to enable
							comprehensive screening to be carried out and which captures all sanctions that Adax is
							bound to follow.{' '}
						</p>
					</li>
					<li>
						<p>
							<strong>KYC/AML identification procedures</strong>
						</p>
						<p>
							Adax, in line with international requirements, adopts a risk-based approach to combating
							money laundering and terrorist financing. By adopting a risk-based approach, Adax is able to
							ensure that measures to prevent or mitigate money laundering and terrorist financing are
							commensurate to the identified risks.
						</p>
					</li>
					<li>
						<p>
							<strong>Prior to providing any Service to a User, Adax will: </strong>
						</p>
						<ol class="alpha">
							<li>
								identify the User and verify the User’s identity on the basis of documents, data or
								information based on a reliable and independent source;{' '}
							</li>
							<li>
								if there is a beneficial owner in relation to the User, identify the beneficial owner
								and take reasonable measures to verify the beneficial owner’s identity;{' '}
							</li>
							<li>
								obtain information on the purpose and intended nature of the business relationship with
								the User, unless the purpose and intended nature are clearly stipulated in the relevant
								documentation between Adax and the User; and
							</li>
							<li>
								if a person purports to act on behalf of the User, (i) identify the person and take
								reasonable measures to verify the person’s identity on the basis of documents, data or
								information based on a reliable and independent source; and (ii) verify the person’s
								authority to act on behalf of the User.{' '}
							</li>
						</ol>
						<p>
							To identify a User who is an individual, Adax will collect information from the User such as
							his full name, date of birth, nationality, place of residence, email address, and/or the
							identity document type. Adax will, depending on the level of risk, verify the identity of
							the User with documents such as his national ID, passport and/or driver’s licence and
							utility bill.
						</p>
						<p>
							To identify a User who is a legal entity, Adax will collect information from the User such
							as its full legal name, registration number, establishment date, jurisdiction of
							establishment and lists of directors (as applicable to the entity). Adax will, depending on
							the level of risk, verify the User with documents such as Memorandum and Articles of
							Association (or equivalent), additional beneficial ownership information and documents, and
							a detailed corporate chart (as applicable to the entity).
						</p>
						<p>
							If the User is not physically present for identification purposes, Adax may adopt more
							stringent standards to verify the identity of the User.
						</p>
					</li>
					<li>
						<p>
							<strong>Ongoing monitoring</strong>
						</p>
						<p>Adax will continuously monitor the business relationship with a User by:</p>
						<ol class="alpha">
							<li>
								reviewing from time to time documents, data and information relating to the User that
								have been obtained by Adax;{' '}
							</li>
							<li>
								conducting appropriate scrutiny of transactions carried out for the User to ensure that
								they are consistent with HybirdBlock’s knowledge of the User and the User’s business and
								risk profile, and with Adax’s knowledge of the source of the customer’s funds; and
							</li>
							<li>
								identifying transactions that are complex, unusually large in amount or of an unusual
								pattern and have no apparent economic or lawful purpose.{' '}
							</li>
						</ol>
						<p>
							To continuously monitor the business relationship with a User, Adax shall on a periodic
							basis according to the risk rating of the User, carry out a file review to ensure that
							information held about the User is up-to-date and that identification documents held are
							still valid. In addition, on more frequent basis, Adax shall monitor transactional activity
							to identify any red-flags or ‘out of the norm’ activity.
						</p>
						<p>
							{' '}
							As part of the second line of defense, the Money Laundering Reporting Officer will carry out
							checks to ensure that regular and effective on-going monitoring is being effected and ensure
							that irregular or suspicious transactions are effectively escalated.
						</p>
					</li>
					<li>
						<p>
							<strong>High risk situations</strong>
						</p>
						<p>
							In certain circumstances, the risk may be higher and Adax will need to take additional
							checks. These include, for example, situations where the User is from a non-reputable
							jurisdiction (for example on the Financial Action Task Force’s recommendations), the User is
							a politically exposed person or the User’s behavior and activities raises other red flags.
						</p>
						<p>In a high risk situation, Adax will: </p>
						<ol class="alpha">
							<li>
								where a business relationship has not yet been established, obtain approval from senior
								management to establish the business relationship and take reasonable measures to
								establish the User’s or beneficial owner’s source of wealth and source of funds that
								will be involved in the business relationship; and
							</li>
							<li>
								where a business relationship has been established, obtain approval from senior
								management to continue the business relationship, take reasonable measures to verify the
								beneficial owner’s identity, and take reasonable measures to establish the User’s or
								beneficial owner’s source of wealth and source of funds that will be involved in the
								business relationship.
							</li>
						</ol>
					</li>
					<li>
						<p>
							<strong>Record-keeping</strong>
						</p>
						<p>
							Adax will keep (a) transaction records, for a period of ten (10) years beginning on the date
							on which a transaction is completed; and (b) other information collected by Adax for AML/KYC
							purposes, throughout the continuance of the business relationship with the User and for a
							period of ten (10) years beginning on the date on which the business relationship with the
							User ends.
						</p>
					</li>
					<li>
						<p>
							<strong>Training</strong>
						</p>
						<p>
							All of our employees and officers receive ongoing AML/KYC training that is refreshed at
							least once every year to ensure they are familiar with our AML/LYC policy and all applicable
							laws and regulations. New employees receive training within thirty (30) days of their start
							date. All documentation related to compliance training including materials, tests, results,
							attendance and date are maintained. In addition, our compliance training program is updated
							as necessary to reflect current laws and regulations.
						</p>
					</li>
					<li>
						<p>
							<strong>Money Laundering Reporting Officer</strong>
						</p>
						<p>
							The Money Laundering Reporting Officer is the person, duly authorized by Adax, whose duty is
							to ensure the effective implementation and enforcement of the AML/KYC Policy. It is the
							Money Laundering Reporting Officer’s responsibility to supervise all aspects of Adax’s
							anti-money laundering and counter-terrorist financing. All our employees will report any
							suspicious behavior or activities to the Money Laundering Reporting Officer.
						</p>
					</li>
					<li>
						<p>
							<strong>Reporting</strong>
						</p>
						<p>
							Where Adax suspects that the User is involved in any money laundering, terrorist financing
							or other illegal activities, it will report any relevant knowledge or suspicion to
							governmental and regulatory authorities. Adax has no obligation to notify a User of any such
							suspicious transaction report which, on the other hand, Adax and its employees can be held
							liable for tipping off. This is criminal offence under punishable by a fine and/or
							imprisonment.
						</p>
					</li>
				</ol>
			</div>
		);
		let ch = '';
		return (
			<Static>
				<Grid style={{ maxWidth: '965px', margin: '0 auto' }}>
					<Grid.Column>
						<div className="text-center">
							<Link to="/account/markets">
								<img className="basetradeLogo" src={basetradeLogo} alt="Basetrade Logo" />
							</Link>
						</div>
						{language === 'ch' ? ch : en}
					</Grid.Column>
				</Grid>
			</Static>
		);
	}
}
