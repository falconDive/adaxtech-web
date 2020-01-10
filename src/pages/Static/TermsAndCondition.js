import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid, List, Header } from 'semantic-ui-react';

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
		padding: 50px 0;
	}
`;

export default class TermsAndCondition extends Component {
	render() {
		let language = localStorage.getItem('lang');
		const en = (
			<div>
				<h2 className="text-center">ADAX Terms of Business</h2>
				These terms of business cover the services provided by each of:
				<br />
				<br />
				<p>
					These Terms of Business (Terms) cover the services provided by ADAX TECH LIMITED (ADAX), a private
					limited company incorporated in Cyprus, with company number HE395636, and registered office address
					at Kyriakou Matsi 16, EAGLE HOUSE, 3rd Floor, 1082, Nicosia, Cyprus.{' '}
				</p>
				<p>
					These Terms govern the legal relationship between the client (the "<b>Client</b>") and ADAX
					(together the "<b>Parties</b>") in respect of the services offered by ADAX.
				</p>
				<p>
					By signing up to use an account with ADAX, the Client agrees that he has read and understood, and
					accepts all of the terms and conditions contained in this document, as well as the Privacy Policy of
					ADAX.
				</p>
				<br />
				By signing up to use an account with ADAX, the Client agrees that he has read and understood, and
				accepts all of the terms and conditions contained in this document, as well as the Privacy Policy of ADAX.
				<br />
				<br />
				<p>
					These terms and conditions incorporate within them, as though they were fully set out herein, the
					provisions of the following terms and policies, which themselves also apply to the Client’s use of
					the Services:
				</p>
				<ol className="alpha" style={{ paddingLeft: '15px' }}>
					<li>
						the{' '}
						<a className="a-theme" href="/privacy-policy" target="_blank">
							Privacy Policy
						</a>; and
					</li>
					<li>
						the{' '}
						<a className="a-theme" href="/cookie-policy" target="_blank">
							Cookies Policy
						</a>;
					</li>
					<li>
						the{' '}
						<a className="a-theme" href="/kyc-aml" target="_blank">
							AML/KYC Policy
						</a>
					</li>
				</ol>
				(together, the "<strong>Terms</strong>").
				<br />
				<br />
				<ADAXListWrapper>
					<List as="ol">
						<List.Item as="li">
							<strong>GENERAL</strong>

							<List.List as="ol">
								<List.Item as="li">
									The Client should read these Terms, and any document referred to in them very
									carefully. If there is anything that the Client does not understand the Client
									should discuss this matter with ADAX and seek the necessary clarification.
								</List.Item>
								<List.Item as="li">
									Any formal communication with the Client by ADAX will be undertaken through
									electronic mail unless otherwise instructed by the Client. Documents will be sent to
									the Client by electronic mail and the Client should seek to send any documents to
									ADAX by the same means. The Client will also be able to contact ADAX telephonically
									or through secure messaging systems made available by ADAX.
								</List.Item>
								<List.Item as="li">
									Communication between Clients and ADAX will, unless otherwise agreed between the
									Client and ADAX, be made in the English language. In the event of any discrepancy
									between the English language version of these Terms and any translation of the Terms
									in a foreign language, the English version of these Terms shall prevail.
								</List.Item>
								<List.Item as="li">
									The Client is required to meet strict eligibility requirements in order to access
									the services offered by ADAX. The Client is required to be at least 18 years old. If
									a Client is resident in or located in certain countries and / or states he will not
									be able to access some or all services offered by ADAX. The list of services offered
									by ADAX accessible by country can be found at Jurisdiction Schedule.
								</List.Item>
								<List.Item as="li">
									Any Service availed of from ADAX shall be collectively referred to in these Terms of
									Business as the Services. By availing of any such service, Clients will be bound by
									these Terms of Business and the particular provisions governing the particular
									service.{' '}
								</List.Item>
								<List.Item as="li">
									Trading Virtual Financial Assets (VFAs) through the Services may be risky. A Client should not seek these
									services if he does not understand these risks.
								</List.Item>
								<List.Item as="li">
									These Terms shall remain in force for the duration of the relationship between the
									Client and ADAX.
								</List.Item>
								<List.Item as="li">
									There are important legal terms provided below in these Terms, including the
									Client’s indemnification and our limitation of liability. Please read these Terms
									carefully.
								</List.Item>
							</List.List>
						</List.Item>

						<List.Item as="li">
							<strong>INTERPRETATION</strong> In these Terms unless the context requires otherwise:
							<List.List as="ol">
								<List.Item as="li">
									headings are inserted for convenience only and will not affect the construction or
									interpretation of these Terms;
								</List.Item>
								<List.Item as="li">
									words importing the singular include the plural and vice-versa;
								</List.Item>
								<List.Item as="li">
									any reference to a statute, statutory instrument, or other regulations includes all
									provisions, rules and regulations made under them and will be interpreted as
									reference to such statute, statutory instrument, or regulations as amended,
									consolidated, re-enacted or replaced from time to time; and
								</List.Item>
								<List.Item as="li">
									a reference to any party shall include that party’s permitted assignees and
									successors in title.
								</List.Item>
							</List.List>
						</List.Item>

						<List.Item as="li">
							<strong>REPRESENTATIONS AND WARRANTIES</strong>
							<List.List as="ol">
								<List.Item as="li">
									Client represents and warrants to ADAX that:
									<List.List as="ol">
										<List.Item as="li">
											the Client is not under any legal disability with respect to, and is not
											subject to any law or regulation which prevents his performance according to
											these Terms or any transaction contemplated in them and that as a result he
											has authority to enter into and accept these Terms;
										</List.Item>
										<List.Item as="li">
											any information which the Client has provided or may provide to ADAX is
											complete, up-to date and correct in all respects;
										</List.Item>
										<List.Item as="li">
											in the event that any of the information supplied by the Client ceases to
											remain complete, up-to date and correct in any respect, the Client shall
											provide ADAX with such revised and updated information without delay;
										</List.Item>
										<List.Item as="li">
											the Client is in compliance with all laws to which it is subject, including,
											without limitation, all tax laws and regulations, exchange control
											requirements, and registration requirements;
										</List.Item>
										<List.Item as="li">
											the Client is the beneficial owner (or if the Client is a trustee, the legal
											owner) of any VFA and / or cash subject to these Terms and will indemnify
											ADAX against all claims or demands made by any person in relation thereto;
											and
										</List.Item>
										<List.Item as="li">
											the legal tender the Client uses in the ADAX system through any ADAX product
											are not the proceeds of any criminal, unlawful or illegal activity or money
											laundering or terrorist financing activity, each as interpreted in the
											broadest terms.
										</List.Item>
									</List.List>
								</List.Item>

								<List.Item as="li">
									The Client undertakes and agrees not to:
									<List.List as="ol">
										<List.Item as="li">
											{' '}
											violate or assist any party in violating any law, statute, ordinance,
											regulation or any rule of any self-regulatory or similar organization;
										</List.Item>
										<List.Item as="li">
											{' '}
											provide false, inaccurate, incomplete or misleading information to the
											Parties;
										</List.Item>
										<List.Item as="li">
											{' '}
											take or attempt to take any action or claim ownership of any property that
											infringes or would infringe upon: (a) ADAX’s intellectual property interests
											in and to Services as set forth in Section [13], or (b) any third party’s
											copyright, patent, trademark, or other intellectual property rights;
										</List.Item>
										<List.Item as="li">
											{' '}
											distribute unsolicited or unauthorized advertising, promotional or marketing
											material or any junk mail, spam, or chain letters;
										</List.Item>
										<List.Item as="li">
											{' '}
											reverse engineer or disassemble any aspect of the Services for any purpose,
											including but not limited to, in an effort to access any source code, object
											code, underlying ideas and concepts, and algorithms;
										</List.Item>
										<List.Item as="li">
											{' '}
											take any action that imposes an unreasonable or disproportionately large
											burden or load on the Parties’ infrastructure (including, but not limited
											to, servers, networks, data centers and related or like equipment), or
											detrimentally interfere with, intercept, or expropriate any system, data, or
											information of the Parties;
										</List.Item>
										<List.Item as="li">
											{' '}
											transmit or upload any material to the Services that contains viruses,
											Trojan horses, worms, or any other harmful or deleterious programs; and / or
										</List.Item>
										<List.Item as="li">
											{' '}
											attempt to gain unauthorized access to the systems of the Parties, computer
											systems or networks connected to the Services, including through password
											mining or any other means.
										</List.Item>
									</List.List>
								</List.Item>

								<List.Item as="li">
									For the avoidance of doubt, it is the Client’s responsibility to determine what, if
									any, taxes apply to the transactions the Client undertakes with or through the
									Services. It is the Client’s responsibility to report and remit the correct tax to
									the appropriate tax authority. ADAX is not in any way responsible for
									determining whether taxes apply to the Client’s trades or for collecting, reporting,
									withholding or remitting any taxes arising from such trades.
								</List.Item>

								<List.Item as="li">
									Notwithstanding the above, by agreeing to these Terms, the Client authorises ADAX to
									deduct or withhold any sum, which ADAX is required or liable to deduct or withhold
									under the law or practice of any revenue authority in any relevant jurisdiction.
									ADAX will strive to provide the respective Services in accordance with applicable
									laws, regulations, by-laws, licence conditions, guidelines, exchange requirements,
									customs, usages and other provisions or market practices (the “Rules”) to which ADAX
									may be subject from time to time.
								</List.Item>
							</List.List>
						</List.Item>

						<List.Item as="li">
							<strong>INTERPRETATION</strong>
							<List.List as="ol">
								<List.Item as="li">
									headings are inserted for convenience only and will not affect the construction or
									interpretation of these Terms;
								</List.Item>

								<List.Item as="li">
									{' '}
									ADAX may not make the Services available in all markets and jurisdictions, and may
									restrict or prohibit use of the Services from certain jurisdictions from time to
									time ("Restricted Locations").
								</List.Item>
								<List.Item as="li">
									{' '}
									If the Client is a legal entity registering to use the Services through a
									representative, the representative of the Client represents and warrants that: (a)
									such legal entity is duly organized and validly existing under the applicable laws
									of the jurisdiction of its organization; and (b) the representative of the Client is
									duly authorized by the Client to act on its behalf.
								</List.Item>
								<List.Item as="li">
									{' '}
									The Client further represents and warrants that he: (a) is of legal age to form a
									binding contract in his home country); (b) has not previously been suspended or
									removed from using our Services; (c) has full power and authority to enter into this
									agreement and in doing so will not violate any other agreement to which the Client
									is a party; (d) is not located in, under the control of, or a national or resident
									of: (i) Cyprus; (ii) the Philippines; (iii) any Restricted Locations; or (iv) any
									country to which Cyprus, the European Union, the United Nations or the United States
									has embargoed goods or services or otherwise subject to any form of sanction or
									embargo; (e) is not subject to any freezing order or other interdiction or
									restriction of any kind under applicable law entering into transactions or owning
									and disposing of assets; and (f) will not use our Services if any applicable laws in
									the Client’s country prohibit the Client from doing so in accordance with these
									Terms.
								</List.Item>
							</List.List>
						</List.Item>

						<List.Item as="li">
							<strong>KNOW YOUR CLIENT REQUIREMENTS.</strong> The Client shall provide ADAX with the
							necessary documents relevant to the opening and the establishment of the Account. The Client
							further agrees to promptly deliver true and complete copies of all amendments or supplements
							to such documents. The Client shall indemnify and hold ADAX harmless against any and
							all Losses that ADAX may suffer or incur arising out of any failure by the Client to provide
							ADAX with the documents required by it.
						</List.Item>

						<List.Item as="li">
							<strong>LIMITATION OF LIABILITY</strong>
							<List.List as="ol">
								<List.Item as="li">
									ADAX shall not be liable for:
									<List.List as="ol">
										<List.Item as="li">
											{' '}
											any damages of whatever kind or nature, including indirect, moral
											consequential, special or exemplary damages, whether in contract, tort
											(including negligence), breach of statutory duty, or otherwise, including,
											without limitation, damages to the Client’s device or the device’s software,
											or any damages sustained to the Client’s computer equipment, damages for loss of
											income or earning that the Client may suffer arising out of or relating to
											the use, inability to use or non-use of the Services (any “Loss”) suffered
											or incurred by the Client unless and to the extent that such Loss is
											suffered or incurred as a result of: (i) ADAX’s (as applicable) gross
											negligence, wilful default or fraud; or (ii) breach of ADAX’s obligations
											under these Terms; and
										</List.Item>
										<List.Item as="li">
											any Loss due to actions taken by ADAX according to their rights under the
											Terms. Provided that in any case, to the extent that such liability cannot
											be excluded in terms of Applicable Law as defined in these Terms, and to the
											extent permitted in terms of Applicable Law as defined in these Terms, the
											maximum liability of ADAX or that of their officers, directors, employees,
											sub-contractors or agents with respect to the Client shall be limited (where
											applicable) to the lesser of the repair of any damage or the replacement of
											any damaged device, computer software or other equipment and / or to a
											refund of fees paid by the Client for the provision of the Services.
										</List.Item>
									</List.List>
								</List.Item>
								<List.Item as="li">
									ADAX shall not be liable for any Loss incurred by the Client with respect to any
									transaction in relation to any VFA, any delays in the receipt or processing of the
									Client’s instructions or if ADAX cannot perform any of its obligations by reason of
									any cause beyond its reasonable control (including, without limitation to the
									generality of the aforesaid, acts of God, government restriction, wars, act of
									terrorism, strikes, fire, exchange or market disruption, suspension of trading,
									periods of abnormal or unusual market activity, unanticipated dealing volumes,
									inability to communicate with market makers, failure of any telecommunication,
									energy failure, cyber-attacks, viruses or hacking, or any other event beyond the
									reasonable control of ADAX) except if occurring through ADAX’s gross negligence,
									fraud, wilful default or the breach of these Terms.
								</List.Item>
								<List.Item as="li">
									{' '}
									Clients using ADAX’s online platform acknowledge and accept that in the event that
									the same becomes inaccessible for any period as a result of communication failure,
									breakdown or other malfunction, including inadequacy of or defect in any underlying
									communications services provided by third parties in respect of the online trading
									platform or failure of the internet, which occurs through no act or omission of
									ADAX and is outside of their reasonable control, ADAX shall not be liable
									to the Client for any such inaccessibility and / or failure.
								</List.Item>
								<List.Item as="li">
									{' '}
									ADAX may, from time to time, need to interrupt the online platform service in order
									to carry out maintenance and updates or to protect the interest of the users of the
									said platform. ADAX shall not be liable for any Loss that may be suffered by the
									Client as a result of such interruption.
								</List.Item>
								<List.Item as="li">
									{' '}
									Clients making use of the online platform further acknowledge and accept that the
									internet and telecommunication systems may be subject to interruption or failure
									through no fault of ADAX. The Client is responsible for providing and maintaining
									the communications equipment (including personal computer or device and modem or
									other internet connection equipment) that the Client may use to access the online
									trading platform.
								</List.Item>
								<List.Item as="li">
									{' '}
									For the avoidance of doubt, this limitation of liability provision shall survive the
									termination of these Terms and shall apply, with full force and effect, in
									perpetuity for the benefit of the Parties, and any other entity that is or becomes
									the owner of the Services, whether such ownership occurs through a sale, merger,
									other transaction or by the operation of Applicable Law.
								</List.Item>
								<List.Item as="li">
									{' '}
									If Applicable Law as defined in these Terms does not permit all or any part of the
									above limitation of liability in contracts to apply to the Client, the limitations,
									exclusions and disclaimers will apply to the Client only to the extent permitted by
									such Applicable Law.
								</List.Item>
							</List.List>
						</List.Item>

						<List.Item as="li">
							<strong>ACCOUNT CREATION.</strong> In using any ADAX Service that requires the creation of
							an online account, the Client shall abide by controls and requirements imposed by ADAX. In
							these cases:
							<List.List as="ol">
								<List.Item as="li">
									The Client must provide such information that ADAX may require.
								</List.Item>
								<List.Item as="li">
									The account may be accessible through ADAX’s website using the same user name and
									password.
								</List.Item>
								<List.Item as="li">
									In respect of the Account, the Client undertakes and agrees to:
									<List.List as="ol">
										<List.Item as="li">
											create a strong password that the Client does not use for any other website
											or online service;
										</List.Item>
										<List.Item as="li">
											maintain and promptly update the Client’s Account information;
										</List.Item>
										<List.Item as="li">
											maintain the security of the Client’s Account by protecting the Client’s
											password and restricting access to the Client’s Account;
										</List.Item>
										<List.Item as="li">
											promptly notify ADAX if the Client discovers or otherwise suspects any
											security breaches related to his Account; and
										</List.Item>
										<List.Item as="li">
											take responsibility for all activities that occur under the Client’s Account
											and accept all risks of any authorized or unauthorized access to the
											Client’s Account, to the maximum extent permitted by law.
										</List.Item>
									</List.List>
								</List.Item>
							</List.List>
						</List.Item>

						<List.Item as="li">
							<strong>ONLINE ACCESS TO THE ACCOUNT</strong>
							<List.List as="ol">
								<List.Item as="li">
									The Client agrees to keep his username and password details secure to prevent any
									unauthorized use of them. The Client must contact ADAX immediately if the Client
									suspects that his username or password details may have been disclosed to, or
									obtained by, a third party and that the security of those details may be in
									jeopardy.
								</List.Item>
								<List.Item as="li">
									ADAX shall not be liable under any circumstances for any direct, indirect, or
									consequential loss which results or may result from the Client’s use of the online
									platform or the Services (including but not limited to system errors, deletion or
									loss of files, defects or delays in transmission of instructions or other
									information, any failure of ADAX’s server or the internet, loss of data, or any
									other event beyond ADAX’s reasonable control) or the Client’s access to the internet
									or Services or use thereof for any purpose whatsoever or for any reliance on or use
									of information received on or through the online platform, the Services or the
									internet.
								</List.Item>
							</List.List>
						</List.Item>

						<List.Item as="li">
							<strong>INDEMNITY</strong> The Client shall indemnify and hold ADAX free and harmless
							against any and all claims, losses, damages and expenses (including reasonable attorneys’
							fees, legal expenses and court costs) asserted against them by any third party or otherwise
							suffered or incurred by ADAX as a result of or in connection with: (a) the Client’s breach
							of the Terms; (b) ADAX entering into any transaction with a Client under services like
							BaseTrade; (c) any negligent or fraudulent act or omission or any wilful misconduct on the
							Client’s part; and (d) any third party claim due to the acts or omissions of the Client.
						</List.Item>

						<List.Item as="li">
							<strong>PRIVACY POLICY</strong> The Client should refer to ADAX’s Privacy Policy for
							information about how ADAX collects, uses and share the Client’s information. The Client
							explicitly consents to the Privacy Policy and the Cookie Policy and commits to keep updated
							on amendments made to the same.
						</List.Item>

						<List.Item as="li">
							<strong>RISK DISCLOSURE</strong>
							<List.List as="ol">
								<List.Item as="li">
									The Services relate to VFAs whose price volatility is outside ADAX’s control. Any
									profit or loss arising as a result of a fluctuation in the value of the respective
									VFAs will be entirely for the Client’s account and risk.
								</List.Item>
								<List.Item as="li">
									The Client acknowledges that past performance is not necessarily a guide to future
									performance.
								</List.Item>
								<List.Item as="li">
									ADAX does not provide investment advice in respect of VFAs. As a result ADAX shall
									not be responsible for any losses incurred by the Client as a consequence of the
									Client’s own trading decisions in respect of VFAs.
								</List.Item>
								<List.Item as="li">
									The Client accepts that the value of VFAs, may fall as well as rise and that there
									can be no guarantee that the Client will not make a loss or that profits will be
									made by the Client as a result of his transactions in respect of VFAs.
								</List.Item>
							</List.List>
						</List.Item>

						<List.Item as="li">
							<strong>FEES AND CHARGES.</strong> The Client accepts to be bound by and pay the fees and
							charges as may be from time to time determined by ADAX for the provision of the Services.
							The current list of applicable fees and charges and related details on payment of same can
							be accessed at <a href="https://adaxtech.com/trading-fee">https://adaxtech.com/trading-fee</a>.
						</List.Item>

						<List.Item as="li">
							<strong>COPYRIGHT AND OTHER INTELLECTUAL PROPERTY RIGHTS</strong>
							<List.List as="ol">
								<List.Item as="li">
									Unless otherwise indicated by ADAX, all copyright and other intellectual property
									rights in all content and other materials contained on their website or provided in
									connection with the Services, including, without limitation, logos and all designs,
									text, graphics, pictures, information, data, software, sound files, other files and
									the selection and arrangement thereof (collectively, "Our Materials") are the
									proprietary property of ADAX or their licensors or suppliers and are protected by
									copyright laws and other intellectual property rights laws.
								</List.Item>
								<List.Item as="li">
									ADAX hereby grants the Client a limited, revocable, non-exclusive and
									non-sub-licensable license to access and use Our Materials for his personal or
									internal business use limitedly to use the Services. Such license is subject to
									these Terms and does not permit: (a) any resale of Our Materials; (b) the
									distribution, public performance or public display of any of Our Materials; (c)
									modifying or otherwise making any derivative uses of Our Materials, or any portion
									thereof; or (d) any use of Our Materials other than for their intended purposes. The
									license granted under this Section will automatically terminate if ADAX suspends or
									terminates the Client’s Account or access to the Services.
								</List.Item>
							</List.List>
						</List.Item>

						<List.Item as="li">
							<strong>TRADEMARKS.</strong> Trademarks and any other product or service names, logos or
							slogans that may appear on our Services belong to and are owned by ADAX and may not be
							copied, imitated or used, in whole or in part, without our prior written permission. The
							Client may not use any trademark, product or service name of ADAX without our prior
							written permission, including without limitation any metatags or other "hidden text"
							utilizing any trademark, product or service name of ADAX. In addition, the look and feel of
							ADAX’s Services, including all page headers, custom graphics, button icons and scripts, is
							the service mark, trademark and / or trade dress of ADAX and may not be copied, imitated or
							used, in whole or in part, without our prior written permission. All other trademarks,
							registered trademarks, product names and company names or logos mentioned through our
							Services are the property of their respective owners. Reference to any products, services,
							processes or other information, by name, trademark, manufacturer, supplier or otherwise does
							not constitute or imply endorsement, sponsorship or recommendation by ADAX.
						</List.Item>

						<List.Item as="li">
							<strong>THIRD PARTY CONTENT.</strong> In using the Services, the Client may view content
							provided by third parties, including links to web pages of such parties, including but not
							limited to Facebook and Twitter links ("Third-Party Content"). ADAX does not control,
							endorse or adopt any Third-Party Content and shall have no responsibility for Third-Party
							Content, including without limitation material that may be misleading, incomplete,
							erroneous, offensive, indecent or otherwise objectionable. In addition, the Client’s
							business dealings or correspondence with such third parties are solely between the Client
							and the third parties. ADAX is not responsible or liable for any loss or damage of any sort
							incurred as the result of any such dealings, and the Client understands that the Client’s
							use of Third-Party Content, and interactions with third parties, is at the Client’s own
							risk.
						</List.Item>

						<List.Item as="li">
							<strong>AMENDMENT AND TERMINATION</strong>
							<List.List as="ol">
								<List.Item as="li">
									ADAX shall be entitled to amend the Terms in favor of the Client or strictly in
									order to comply with applicable law and regulation without notice. Changes in these
									Terms which are not in the Client’s favor may take place at any time, by giving
									notice to the Client at least thirty (30) days in advance.
								</List.Item>
								<List.Item as="li">
									The Client is deemed to have accepted such changes before the proposed date of their
									entry into force. In the event that the Client does not accept such changes, such
									Client must without delay and in any case prior to entry into force of any such
									changes notify ADAX that he does not accept them by following the procedure set out
									in these Terms.
								</List.Item>
								<List.Item as="li">
									The relationship between the Client and ADAX shall remain in force until it is
									terminated.
								</List.Item>
								<List.Item as="li">
									The Client is entitled to terminate the relationship with ADAX by giving written notice to ADAX.
								</List.Item>
								<List.Item as="li">
									ADAX is entitled to terminate the Client relationship with one months’ notice.
								</List.Item>
								<List.Item as="li">
									The termination of this agreement shall be without prejudice to any other rights or
									remedies ADAX may be entitled to under these Terms or at law and shall not affect
									the coming into or the continuance in force of any provision of this agreement which
									is expressly or by implication to come into effect or to continue in effect after
									such termination.
								</List.Item>
								<List.Item as="li">
									Termination provisions relative to each Service shall apply in such cases. In case
									of conflict between such provisions and this Section, the particular provisions
									shall govern, and this Section shall apply suppletorily.
								</List.Item>
							</List.List>
						</List.Item>

						<List.Item as="li">
							<strong>ASSIGNMENT</strong>
							<List.List as="ol">
								<List.Item as="li">
									These Terms are only enforceable by the Client and ADAX and no other person shall
									have any rights under these Terms to enforce any provision of these Terms.
								</List.Item>
								<List.Item as="li">
									The Client agrees not to assign, transfer, dispose of or grant security over any of
									his rights and obligations under these Terms without ADAX’s prior consent.
								</List.Item>
								<List.Item as="li">
									ADAX may assign or transfer any of its rights or obligations under these Terms or
									delegate all or any of its functions under these Terms to a third party without the
									Client’s prior consent provided that the Client is given notice of any such
									assignment.
								</List.Item>
							</List.List>
						</List.Item>

						<List.Item as="li">
							<strong>NO INVESTMENT ADVICE. </strong> The website of ADAX and any content thereon should
							not be considered investment advice in respect of VFAs made available to the Client through
							any ADAX product or service and should not be construed as a substitute for tailored
							investment advice. The contents of the websites of ADAX should not be used as a basis for
							making investment decisions and is not intended, as an attempt to market or promote any type
							of VFA. Neither should any such website content be construed to constitute an invitation to
							invest in any VFA or constitute or form a part of any offer for the sale or subscription of,
							or any invitation to offer to buy or subscribe for, any VFA.
						</List.Item>

						<List.Item as="li">
							<strong>COMPLAINTS. </strong> Any complaint or other communication to be given in connection
							with these Terms shall be made in writing and sent by electronic mail to:
							compliance@adaxtech.com, indicating the product or service name in the subject line.
						</List.Item>

						<List.Item as="li">
							<strong>ENTIRE AGREEMENT. </strong> Save as otherwise expressly provided herein, these Terms
							constitute the entire agreement between ADAX and the Client and ADAX shall not be liable to
							the Client for loss arising from or in connection with any agreement, representation,
							statement or undertaking made prior to the coming into effect of this agreement other than
							those agreements, representations, statements or undertakings which are expressly
							incorporated or referred to in these Terms.
						</List.Item>

						<List.Item as="li">
							<strong>MISCELLANEOUS</strong>
							<List.List as="ol">
								<List.Item as="li">
									ADAX’s failure or delay in exercising any right, power or privilege under these
									Terms shall not operate as a waiver thereof.
								</List.Item>
								<List.Item as="li">
									The invalidity or unenforceability of any of these Terms shall not affect the
									validity or enforceability of any other of these Terms, all of which shall remain in
									full force and effect.
								</List.Item>
								<List.Item as="li">
									Headings of sections are for convenience only and shall not be used to limit or
									construe such sections.
								</List.Item>
								<List.Item as="li">
									Sections 3, 6, 10, 13, 15, 19, 20, 21 and 27 to 29 and Clause 5.12 shall to the
									extent applicable survive the termination or expiration of these Terms.
								</List.Item>
								<List.Item as="li">
									ADAX strictly follows anti-money laundering (AML), “know your customer” (KYC) and
									other regulations in respective jurisdictions. The Client fully agrees to assist
									ADAX in fulfilling the Applicable Law and provide any necessary information if such
									is required from the Client.
								</List.Item>
								<List.Item as="li">
									The Client shall cooperate with and assist ADAX in connection with any
									investigation, examination or enquiry by any government entity. The Client shall
									promptly provide ADAX with any documents, certification, record or other materials
									they may request in connection with such investigation, examination or enquiry.
								</List.Item>
							</List.List>
						</List.Item>

						<List.Item as="li">
							<strong>APPLICABLE LAW. </strong> These Terms are governed by the regulations of the Cagayan
							Economic Zone Authority (CEZA) and the law of Cyprus, in a suppletory manner (“Applicable
							Law”). Any disputes between the Parties relating to the Services or these Terms will be
							submitted to Arbitration in accordance with these Terms.
						</List.Item>

						<List.Item as="li">
							<strong>ARBITRATION. </strong> Any dispute, controversy or claim, whether contractual or
							non-contractual, arising out of or relating to these Terms, or the breach, termination or
							invalidity thereof, or any other issue which may arise in virtue of these Terms, shall be
							referred to and finally settled by arbitration under applicable arbitration procedures under
							the regulations of the CEZA. In the absence thereof, arbitration shall proceed in the manner
							provided under the arbitration law of the Philippines. Arbitration shall take place in the
							Philippines and shall be conducted in the English language.
						</List.Item>
					</List>

					<Header textAlign={'center'} as="h1">
						ADAX EXCHANGE SERVICES
					</Header>
					<Header textAlign={'center'} size="small" as="p">
						IMPORTANT NOTICE TO EXCHANGE CUSTOMERS
					</Header>
					<Header textAlign={'center'} size="small" as="p">
						By using ADAX Exchange and Wallet Services, the Client agrees to the following terms in addition
						to the Terms of Business for ADAX Services. In case of conflict, these provisions shall govern,
						and the Terms of Business shall apply in a suppletory manner.
					</Header>

					<List as="ol">
						<List.Item as="li">
							<strong>THE EXCHANGE SERVICES</strong>
							<List.List as="ol">
								<List.Item as="li">
									The Exchange Service provides the Client with an order matching platform that
									automatically and according to pre-established criteria matches the Client’s trades
									with open orders from other clients in accordance in respect of VFAs.{' '}
								</List.Item>
								<List.Item as="li">
									The Exchange Service only permits clients to trade one type of VFA for another type
									of VFA.
								</List.Item>
								<List.Item as="li">
									The Client will not be able to predetermine or undertake a trade with a
									predetermined Client.
								</List.Item>
								<List.Item as="li">
									An order may be partially filled or may be filled by multiple matching orders
									arising from different Clients.
								</List.Item>
								<List.Item as="li">
									The Exchange Services do not permit the trading of legal tender (such as Euros or US
									Dollars) for VFAs and vice versa.
								</List.Item>
							</List.List>
						</List.Item>

						<List.Item as="li">
							<strong>THE WALLET SERVICES</strong>
							<List.List as="ol">
								<List.Item as="li">
									ADAX also offers Clients a digital wallet through its Wallet Services, enabling each
									client to store their VFAs that are traded using the Exchange Services.
								</List.Item>
								<List.Item as="li">
									The Wallet of every Client will be maintained in the Client’s own name.
								</List.Item>
								<List.Item as="li">
									The Wallet is a centralized Wallet that can be used by Clients of the Exchange
									Services or BaseTrade or both.
								</List.Item>
								<List.Item as="li">
									ADAX shall recognize the Client as the beneficial owner of VFAs held in a Wallet.
									ADAX will not deal with such VFAs, use the same as security or in any way make use
									of such VFAs, other than as lawfully directed and with prior written authorization
									of the Client.
								</List.Item>
								<List.Item as="li">
									VFAs held by ADAX on behalf of its Clients may be pooled with those of other
									Clients. By accepting these terms, the Client expressly agrees to the pooling of his
									VFAs with the VFAs of other Clients. Individual Client entitlements may not be
									identifiable by separate physical documents of title or other electronic record.
								</List.Item>
							</List.List>
						</List.Item>

						<List.Item as="li">
							<strong>OPERATION OF THE CLIENT’S ACCOUNT</strong>
							<List.List as="ol">
								<List.Item as="li">
									In order to access the Exchange, the Client must transfer VFAS in his account with
									ADAX.{' '}
								</List.Item>
								<List.Item as="li">
									Under the Exchange Service, ADAX does not hold clients’ money and a Client may only
									hold VFAs in his account for this Service.
								</List.Item>
							</List.List>
						</List.Item>

						<List.Item as="li">
							<strong>TRADE INSTRUCTIONS</strong>
							<List.List as="ol">
								<List.Item as="li">
									ADAX may, at any time and in its sole discretion, refuse any trade submitted to it,
									impose limits on the trade amount or impose such other conditions or restrictions on
									the placement of orders without prior notice.
								</List.Item>
								<List.Item as="li">
									The Client may only cancel an order if such cancellation occurs before ADAX executes
									the transaction. Once the Client order has been executed by ADAX the Client may not
									change, withdraw or cancel the authorization to complete such transaction.
								</List.Item>
								<List.Item as="li">
									If an order has been partially filled, the Client may cancel the unfilled part of
									the order unless the order relates to a market trade. ADAX reserves the right to
									refuse any cancellation request associated with a market order once the Client has
									submitted such order. All market orders are irreversible once initiated.
								</List.Item>
								<List.Item as="li">
									The Client will be able to place an order to the extent that he has sufficient funds
									in the Account to complete an order.
								</List.Item>
							</List.List>
						</List.Item>

						<List.Item as="li">
							<strong>SUSPENSION OR TERMINATION OF PROVISION OF SERVICES</strong>
							<List.List as="ol">
								<List.Item as="li">
									ADAX may: (a) refuse to complete or block, cancel or reverse a transaction the
									Client may have authorized; (b) suspend, restrict, or terminate the Client’s access
									to any or all of the Services; and /or (c) deactivate or cancel the Account with
									immediate effect for any reason, including but not limited to where:
									<List.List as="ol">
										<List.Item as="li">
											It is, in its reasonable opinion, required to do so by applicable law or any
											court or other authority to which it is subject in any jurisdiction;
										</List.Item>
										<List.Item as="li">
											it reasonably suspects that the Client acted in breach of these Terms;
										</List.Item>
										<List.Item as="li">it has concerns that a transaction is erroneous;</List.Item>
										<List.Item as="li">
											it has concerns about the security of the Client’s Account or it suspects
											the Services are being used in a fraudulent or unauthorized manner;
										</List.Item>
										<List.Item as="li">
											it suspects money laundering, terrorist financing, fraud, or any other
											financial crime;
										</List.Item>
										<List.Item as="li">
											use of the Account is subject to any pending litigation, investigation, or
											government proceeding and / or it perceives a heightened risk of legal or
											regulatory non-compliance associated with Client’s Account activity; and /
											or
										</List.Item>
										<List.Item as="li">
											the Client takes any action that may circumvent ADAX’s controls such as
											opening multiple Accounts or abusing promotions which ADAX may offer from
											time to time.
										</List.Item>
									</List.List>
								</List.Item>

								<List.Item as="li">
									ADAX may also refuse to complete a transaction where there is insufficient VFA in
									the Client’s Account to cover the transaction and (where applicable) associated fees
									at the time that ADAX receives notification of the transaction.
								</List.Item>
								<List.Item as="li">
									If ADAX refuses to complete a transaction and / or suspend or close the Account, or
									terminate the Client’s use of Services in this way, ADAX will (unless it would be
									unlawful for them to do so) provide the Client with notice of its actions and the
									reasons for refusal, suspension or closure and where appropriate, with the procedure
									for correcting any factual errors that led to the refusal, suspension or closure.
									ADAX will lift the suspension as soon as reasonably practicable once the reasons for
									refusal and / or suspension no longer exist. However, ADAX is under no obligation to
									allow the Client to reinstate a transaction at the same price or on the same terms
									as the suspended, reversed or cancelled transaction.
								</List.Item>
								<List.Item as="li">
									ADAX may suspend, restrict, or terminate the Client’s access to any or all of the
									Services and / or deactivate or cancel the Account, without reason by giving the
									Client 5 days’ notice. The Client acknowledges that ADAX’s decision to take certain
									actions, including limiting access to, suspending, or closing the Account, may be
									based on confidential criteria that are essential to ADAX’s risk management and
									security protocols. The Client agrees that ADAX is under no obligation to disclose
									the details of its risk management and security procedures to the Client.
								</List.Item>
								<List.Item as="li">
									If ADAX suspends or closes the Client’s account, or terminates the Client’s use of
									Services for any reason, ADAX reserves the right to require the Client to complete
									the relevant identity verification and prevention of money laundering procedures
									before permitting the Client to transfer or withdraw any VFA.
								</List.Item>
								<List.Item as="li">
									The Client may cancel the Account at any time by withdrawing all balances and
									visiting https://adaxtech.com. The Client will not be charged for cancelling its Account, although
									the Client will be required to pay any outstanding amounts owed to ADAX. The Client
									authorises ADAX to cancel or suspend any pending transactions associated with the
									relevant Account at the time of cancellation.
								</List.Item>
								<List.Item as="li">
									If ADAX identifies a Client’s Account to be inactive for a period exceeding
									24 months, ADAX may elect to charge a maintenance fee to such Client to continue to
									service and maintain the relevant Client’s Account.
								</List.Item>
							</List.List>
						</List.Item>
					</List>
				</ADAXListWrapper>
			</div>
		);
		const ch = <div />;
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

const ADAXListWrapper = styled.div`
	li::before {
		color: ${(props) => props.theme.listColor} !important;
		font-weight: 500;
		position: inherit !important;
	}
	li {
		line-height: 1.40em !important;
		text-align: justify;
	}

	.header {
		color: ${(props) => props.theme.listColor} !important;
	}
`;
