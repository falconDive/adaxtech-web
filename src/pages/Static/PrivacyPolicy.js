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
		padding: 50px 0;
	}
`;

export default class PrivacyPolicy extends Component {
	render() {
		let language = localStorage.getItem('lang');
		const en = (
			<div>
				<h2 className="text-center">Privacy Policy</h2>
				{/* <p>
					<strong>What information do we collect about you?</strong>
				</p>
				<p>
					We collect information when you set up your account for the Services, including your name, address
					and email address. As part of our KYC/AML obligations, we also collect your birth certificate,
					passport, and/or drivers licence.{' '}
					<a className="a-theme" href="/kyc-aml" target="_blank">
						[More Information]
					</a>
				</p>
				<p>
					<strong>How will we use the information about you?</strong>
				</p>
				<p>
					We use your information to provide the Services to you. We use your information for account creation
					and verification, password retrieval, to complete AML and KYC, and to support and improve the
					Services.{' '}
					<a className="a-theme" href="/kyc-aml" target="_blank">
						[More Information]
					</a>
				</p>
				<p>
					<strong>Who do we share your information with?</strong>
				</p>
				<p>
					We use third parties for support services, such as cloud service providers to store and back-up
					data. We also use third parties to carry out KYC/AML checks as required by law. We use these third
					parties services solely to process your information for the purposes described in this policy. We
					also share your information with our related group companies and as required by law.{' '}
					<a className="a-theme" href="/kyc-aml" target="_blank">
						[More Information]
					</a>
				</p>
				<p>
					<strong>Where do we process your information?</strong>
				</p>
				<p>
					Our servers are located in the US and the Philippines. Third parties that provide support services
					may not be located in your country, including the United States.{' '}
					<a className="a-theme" role="button" id="sec_6">
						{' '}
						[More Information]{' '}
					</a>
				</p>
				<p>
					<strong>How long do we keep hold of your information?</strong>
				</p>
				<p>
					We retain your information for the period for which you hold your account and, if required, for a
					longer period if we are required by law (for example, for AML/KYC information). If you have legal
					rights to delete data and we do not have a legal basis for which to retain the data, we delete your
					information within 30 days of a lawful, valid request from your to exercise such rights.{' '}
					<a className="a-theme" role="button" id="sec_10">
						[More Information]
					</a>
				</p>
				<p>
					<strong>How can I exercise my rights over my information?</strong>
				</p>
				<p>
					You may have rights to access, receive copy of, or delete, your data or restrict or object to our
					processing of, your data.{' '}
					<a className="a-theme" role="button" id="sec_9">
						[More Information]
					</a>
				</p>
				<p>
					<strong>Dispute Resolution</strong>
				</p>
				<p>If you have any concerns or complaints, please contact us at privacy@adaxtech.com.</p>
				<p>
					<strong>How will we notify you of changes?</strong>
				</p>
				<p>
					If there are any changes to this privacy policy, we will update this page.{' '}
					<a className="a-theme" role="button" id="sec_12">
						[More Information]
					</a>
				</p>
				<p>
					<strong>Contact Information</strong>
				</p>
				<p>
					<i>
						Data Controller: The following entities are joint controllers of personal data processed as part
						of the Services:
					</i>
				</p>
				<ul>
					<li>
						Hybrid Trade Limited is a company incorporated in under the laws of Malta, with registration
						number C 86407 its registered office at 93, Mill Street, Qormi QRM3102, Malta (“Hybrid Trade”).
						Email:{' '}
						<a className="a-theme" href="mailto:privacy@adaxtech.com">
							privacy@adaxtech.com.
						</a>
					</li>
					<li>
						Basetrade Limited is a company incorporated in under the laws of Malta, with registration number
						C 86411 its registered office at 93, Mill Street, Qormi QRM3102, Malta (“Base Trade”). Email:{' '}
						<a className="a-theme" href="mailto:privacy@adaxtech.com">
							privacy@adaxtech.com.
						</a>
					</li>
				</ul>
				<p>
					<i>
						Data Protection Officer:{' '}
						<a className="a-theme" href="mailto:privacy@adaxtech.com">
							privacy@adaxtech.com
						</a>
					</i>
				</p> */}
				<div>
					<h3>About this Privacy Policy</h3>
					<p>
						At ADAX TECH LIMITED (ADAX) we are committed to keeping your information safe and secure. Please
						read this privacy policy (“Privacy Policy”) so that you understand your rights in relation to
						this information, including how your information will be collected, used and processed.
					</p>
					<p>
						ADAX is a company incorporated under the laws of Cyprus, with registration number HE395636. Its
						registered office is located at Kyriakou Matsi, 16 Eagle house 3rd Floor, 1082 Nicosia Cyprus.
					</p>
					<p>
						For the purposes of the data protection laws of the European Economic Area ("EEA"), the data
						controller is ADAX.
					</p>
					<p>
						This Privacy Policy applies whenever you use the exchange platform located at
						https://adaxtech.com ("Exchange") or any ADAX API ("API") or the BaseTrade platform downloadable
						via the Apple App Store, Google Play Store or via https://basetrade.io/ (each one the “Service”,
						together the "Services").
					</p>
					<p>
						Please read the following information carefully to understand our practices regarding your
						personal data and how we will use it.
					</p>
					<p>
						By using and continuing to use our Services you acknowledge that you have read, understood and
						accepted the information described in this Privacy Policy. If you do not agree with this Privacy
						Policy in general or any part of it, you should not access the Services.
					</p>
				</div>
				<br />
				<div>
					<h3>This Privacy Policy is divided into the following sections:</h3>
					<p>(1) Your Consent</p>
					<p>(2) What Information Do We Collect About You</p>
					<p>(3) How Will We Use Your Personal Information</p>
					<p>(4) A Word About Cookies</p>
					<p>(5) How We Store and Share Your Personal Information</p>
					<p>(6) Your Rights as a Data Subject</p>
					<p>(7) How Long Do We Keep Your Information</p>
					<p>(8) Dispute Resolution</p>
					<p>(9) Our Contact Information</p>
					<p>(10) Policy on Links to Other Sites</p>
					<p>(11) Security</p>
					<p>(12) Marketing </p>
					<p>(13) Change to This Policy</p>
					<p>(14) Provisions Specific to BaseTrade Users</p>
				</div>
				<br />
				<div>
					<h3>YOUR CONSENT PLEASE READ CAREFULLY</h3>
					<p>
						By entering, connecting to, accessing or using the Service (or any part thereof), you agree to
						the terms and conditions set forth in this Privacy Policy, including to the collection and
						processing of your personal information (as defined below). If you disagree to any term provided
						herein, you may not access and/or use the Service in any manner whatsoever. We encourage and
						expect you to read the full contents of this Privacy Policy.
					</p>
				</div>
				<br />
				<div>
					<h3>What Information Do We Collect About You?</h3>
					<p>
						We collect information during the life cycle of our relationship with you - when you set up your
						account for the Services, when you contact us for support, and when we maintain your account to
						ensure that information is current and accurate. For corporate entities, we collect this
						information with respect to officers, directors, or natural persons who are stockholders holding
						such amount of shares as applicable regulations deem sufficient to require the collection of
						personal data. Kindly note that the Personal Information we collect is required in order for us
						to contractually provide the Services, as well as for us to meet our regulatory requirements
						(such as Anti-Money Laundering [AML] and Know-Your-Customer [KYC] regulations), and to safeguard
						our legitimate interests. In the event that you will not provide such information, we will not
						be able to provide our Services. <a href="/kyc-aml">[More Information]</a>
					</p>
					<h5>Types and Manner of Collection of Personal Information</h5>
					<ul>
						<li>
							<strong>Information you give us.</strong> This is information about you that you give us by
							creating an account on the Exchange or with BaseTrade or by corresponding with us. The
							information you give us would include your name, date of birth, place of birth,
							physical/present address, email address, permanent residential address, proof of billing,
							your birth certificate, passport, national identity card, and/or driver’s license. We will
							also collect information that is intended to ascertain the source and legitimacy of your
							funds, which may include employment information, bank balance information, or other relevant
							information in this regard. In some instances, we may require you to provide us with
							pictures of yourself (or “selfies”) to enable us to provide the Services or support you may
							need. In applicable cases we also collect your shareholdings in a corporate entity signing
							up for our Services, as previously explained in this Privacy Policy. We may also collect
							accreditation or similar information to establish your status as an investor in your home
							jurisdiction. We may collect some or all of these information, depending on the
							circumstances.
						</li>
						<li>
							<strong>Information we collect about you.</strong> With regard to your use of the website
							(even if you have not registered for the Exchange) or Services you have registered for, we
							may automatically collect some or all of the following information at any given time when
							you use the Services and undertake transactions using the Services:
							<ul>
								<li>
									technical information: including the Internet protocol (IP) address used to connect
									your device to the Internet, your login information, browser type and version, time
									zone setting, browser plug-in types and versions, operating system and platform;
								</li>
								<li>
									session information: including transaction record data, full Uniform Resource
									Locators (URL), clickstream to, through and from our server (including date and
									time), items you viewed or searched, page response times, download errors, length of
									visits to certain pages, page interaction information (such as scrolling, clicks,
									and mouse-overs), methods used to browse away from the page;
								</li>
								<li>
									location information: when you use a location-enabled device to access the Services,
									we may collect geographical location data or use various means to determine the
									location, such as sensor data from your device that may, for instance, provide data
									on nearby cell towers and wi-fi access spots;
								</li>
								<li>
									trade history: when you make a trade we may record that in the account log. We
									retain this information to validate trades, monitor trade history for fraud or
									illegal activity, and to ensure the integrity and security of the services.
								</li>
							</ul>
						</li>

						<li>
							Information required to comply with governmental rules, anti-money laundering ("AML") or
							"know-your-customer" ("KYC") policies. We will require you to provide information including
							scanned or depicted documents from you, such as a photo of your passport, driver’s license,
							birth certificate or other identity card to show proof of identity as well as documentation
							that evidences your proof of address or documents or online database information to confirm
							your identity. We also will collect information about your device for fraud prevention, KYC
							or AML purposes and other information as may be required by applicable law. Such information
							will only be necessary if requested and may be required prior to activation of your account.
						</li>
					</ul>
				</div>
				<div>
					<h3>How Will We Use Your Personal Information?</h3>
					<p>
						We use your information to provide the Services to you. In particular, we use your information
						for account creation and verification, account administration, for compliance purposes in
						relation to legal requirements under AML and Anti-Terrorist Financing laws, to facilitate the
						processing of your transactions, and to provide support to you as our customer. If you have
						indicated consent to the use of your information for marketing purposes, then your information
						will be used for these purposes as well. <a href="/kyc-aml">[More Information]</a>
					</p>
					<table align="center" width="100%">
						<tr>
							<th>Personal Information</th>
							<th>We use this information to</th>
							<th>Legal Basis for Processing </th>
						</tr>
						<tbody>
							<tr>
								<td>Full Name and Address</td>
								<td>
									<ul>
										<li>provide communications</li>
									</ul>
								</td>
								<td>
									Pursuant to our obligations under applicable law to comply with AML/KYC
									requirements.
								</td>
							</tr>
							<tr>
								<td />
								<td>
									<ul>
										<li>to you about your account and service inform</li>
										<li>to you about your account and service inform</li>
									</ul>
								</td>
								<td>
									Pursuant to our obligations under applicable law to comply with AML/KYC
									requirements.
								</td>
							</tr>
							<tr>
								<td>Passport, Driver’s License and Nationality/Citizenship ID card</td>
								<ul>
									<li>verify your identity</li>
								</ul>
								<td>
									verify your identity Pursuant to our obligations under applicable law to comply with
									AML/KYC requirements.
								</td>
							</tr>
							<tr>
								<td>Email Address, Phone Number</td>
								<td>
									<ul>
										<li>
											provide communications to you about your account and service information
										</li>
										<li>mediate and resolve disputes</li>
										<li>provide customer support if you request support</li>
									</ul>
								</td>
								<td>Pursuant to our contract to provide the Services.</td>
							</tr>
							<tr>
								<td />
								<td>
									<ul>
										<li>verify your identity</li>
										<li>control banned geo-locations</li>
										<li>security measure for account login location</li>
									</ul>
								</td>
								<td />
							</tr>
							<tr>
								<td>Trading History</td>

								<td>
									<ul>
										<li>monitor and improve our Services;</li>
										<li>
											investigate prohibited or illegal activities, violations of this policy and
											our agreement with you, and prevent the same
										</li>
									</ul>
								</td>
								<td>
									Pursuant to our obligations under applicable law to comply with AML/KYC
									requirements.
								</td>
							</tr>
							<tr>
								<td>Cryptocurrency Wallet Addresses</td>

								<td>
									<ul>
										<li>process fees</li>
										<li>process transactions and send information about your transactions</li>
										<li>provide customer support if you request support</li>
										<li>mediate and resolve disputes</li>
									</ul>
								</td>
								<td />
							</tr>
							<tr>
								<td>Bank Account Information</td>

								<td>
									<ul>
										<li>process fees</li>
										<li>process transactions and send information about your transactions</li>
										<li>mediate and resolve disputes</li>
									</ul>
								</td>
								<td>Pursuant to our contract to provide the Services.</td>
							</tr>
							<tr>
								<td>
									Source of Funds Information (this could be employment information, bank balances,
									etc.)
								</td>

								<td>
									<ul>
										<li>validate the source and legitimacy of your funds</li>
									</ul>
								</td>
								<td>
									Pursuant to our obligations under applicable law to comply with AML/KYC
									requirements.
								</td>
							</tr>
							<tr>
								<td>
									Investor Accreditation or similar documentation to establish your investor status
								</td>

								<td>
									<ul>
										<li>
											to establish your eligibility for the Services in your home jurisdiction
										</li>
									</ul>
								</td>
								<td>Pursuant to our contract to provide the Services.</td>
							</tr>
							<tr>
								<td>
									Transaction Data (please note that payments are processed by a third party and ADAX
									does not process your credit card information)
								</td>

								<td>
									<ul>
										<li>process fees</li>
										<li>process transactions and send information about your transactions</li>
									</ul>
								</td>
								<td>Pursuant to our contract to provide the Services.</td>
							</tr>
							<tr>
								<td>Session Information and Session Technical Information</td>

								<td>
									<ul>
										<li>provide customer support if you request support;</li>
										<li>mediate and resolve disputes</li>
										<li>monitor and improve our Services</li>
										<li>
											investigate prohibited or illegal activities, violations of this policy and
											our agreement with you, and prevent the same
										</li>
										<li>carry out bug-fix, remediation of technical issues and troubleshooting</li>
									</ul>
								</td>
								<td>To ensure the integrity and security of the Services and to protect our users.</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div>
					<h5>A Word About Cookies.</h5>
					<li>
						We use cookies and other similar technologies (e.g., web beacons, flash cookies, etc.,)
						(“Cookies”) to enhance your experience using the Services. Cookies may be either "persistent"
						cookies or "session" cookies. A persistent cookie consists of a text file sent by a web server
						to a web browser, which will be stored by the browser and will remain valid until its set expiry
						date (unless deleted by the user before the expiry date). A session cookie, on the other hand,
						will expire at the end of the user session, when the web browser is closed. More information
						regarding our use of Cookies is set out in our Cookie Policy <a href="/cookie-policy">[here]</a>.
					</li>
				</div>
				<div>
					<h3>How We Store and Share Your Personal Information</h3>
					<p>
						We use third parties for support services, such as cloud service providers to store and back-up
						data, KYC/AML processors to perform checks as required by law, and payment processors to
						facilitate your transactions. We use these third party services solely to process your
						information for the purposes described in this policy. We also share your information with our
						related group companies and as required by law. If you have indicated consent to the use of your
						information for marketing purposes, then your information shall be used for marketing as well.
					</p>
					<p>
						We store and process your information in the Philippines and Hong Kong. Your personal data is
						also processed by staff operating outside the EEA who work for us or for one of our suppliers.
						Such staff are engaged in, among other things, the fulfillment of order, the processing of your
						payment details and the provision of support services. We will take all steps reasonably
						necessary to ensure that your personal data is treated securely and in accordance with this
						policy. The personal data is transferred to staff in these countries by way of the European
						Commission’s model contracts for the transfer of personal data to third countries (i.e., the
						standard contractual clauses), pursuant to Decision 2004/915/EC (in the case of transfers to a
						controller) and Decision 2010/87/EU (in the case of transfers to a processor).
					</p>
					<p>
						Below we provide further details on how we share your information with selected third parties in
						and outside your country:
						<ul>
							<li>
								<strong>third party service providers</strong> and partners including infrastructure
								hosting providers (in order to store data), identity verification service and investor
								status verification services (in order to facilitate the set-up of your account in
								accordance with applicable law), payment services (in order to process payments), and
								accounting services (in order to verify, monitor and secure transactions);
							</li>
							<li>
								<strong>related group companies,</strong> We share information with these entities in
								order to:
								<ul>
									<li>
										help detect and prevent potentially illegal acts and violations of our policies;
									</li>
									<li>
										allow you to leverage information that you have provided to us to more
										efficiently set-up accounts with group companies and to allow you to use the
										products and services they provide that are supplied in connection with the
										Services; and
									</li>
									<li>guide decisions about our products, services and communications;</li>
								</ul>
							</li>
							<li>
								<strong>
									law enforcement agencies, public authorities or other judicial bodies and
									organisations. We disclose information if we are legally required to do so, or if we
									have a good faith belief that such use is reasonably necessary to:
								</strong>

								<ul>
									<li>comply with a legal obligation, process or request;</li>
									<li>
										enforce our terms of service and other agreements, policies, and standards,
										including investigation of any potential violation thereof;
									</li>
									<li>
										detect, prevent or otherwise address security, fraud or technical issues; or
									</li>
									<li>
										protect the rights, property or safety of us, our users, a third party or the
										public as required or permitted by law (including exchanging information with
										other companies and organisations for the purposes of fraud protection and
										credit risk reduction); and
									</li>
								</ul>
							</li>
							<li>
								<strong>
									a third party that acquires all or substantially all of us or our business.
								</strong> We will disclose information to a third party in the event that we sell or buy
								any business or undergo a merger, in which case we will disclose your data to the
								prospective buyer of such business. We will also disclose information to a third party
								if we sell, buy, merge or partner with other companies or businesses, or sell some or
								all of our assets. In such transactions, user information may be among the transferred
								assets.
							</li>
						</ul>
					</p>
				</div>
				<div>
					<h3>Your Rights as a Data Subject</h3>
					<h5>Rights of users located within the European Economic Area</h5>
					<p>
						You have certain rights in relation to the personal information we hold about you. Some of these
						only apply in certain circumstances as set out in more detail below. We also set out how to
						exercise those rights. Please note that we will require you to verify your identity before
						responding to any requests to exercise your rights. We must respond to a request by you to
						exercise those rights without undue delay and at least within one month (although this may be
						extended by a further two months in certain circumstances).
					</p>
					<h5>Access, Correction & Deletion</h5>
					<p>
						You have the right to know whether we process personal information about you, and if we do, to
						access personal information we hold about you and certain information about how we use it and
						who we share it with. You can access and correct your personal information by logging into your
						account on the Services at any time. Subject to certain exceptions, you also have the right to
						request that your personal information be deleted.{' '}
					</p>
					<h5>Portability</h5>
					<p>
						You have the right to receive a copy of certain personal information we collect from you in a
						structured, commonly used and machine-readable format. The relevant personal information is
						information you provided for the purposes of performing our contract with you (for example, your
						email address and transaction data). If you wish for us to transfer such personal information to
						a third party, please ensure you detail that party in your request. Note that we can only do so
						where it is technically feasible. Please note that we may not be able to provide you with
						personal information if providing it would interfere with another’s rights (e.g., where
						providing the personal information we hold about you would reveal information about another
						person or our trade secrets or intellectual property).
					</p>
					<h5>Restriction of Processing & Objection</h5>
					<p>
						You have a right to require us to stop processing the personal information we hold about you,
						other than for storage purposes, in certain circumstances. Please note, however, that if we stop
						processing the personal information, we may use it again if there are valid grounds under data
						protection laws for us to do so (e.g., for the defence of legal claims or for another’s
						protection). You may request we stop processing and just store the personal information we hold
						about you where:
						<ul>
							<li>
								you believe the personal information is not accurate for the period it takes for us to
								verify whether it is accurate; or
							</li>
							<li>
								we wish to erase the personal information as it is no longer necessary for our purposes
								but you require it to be stored for the establishment, exercise or defense of legal
								claims.
							</li>
						</ul>
						Separately, at any time you have the right to object to our processing of personal information
						about you in order to send you marketing and related communications, including where we build
						profiles for such purposes and we will stop processing the personal information for that
						purpose. If we have collected your information by obtaining your consent, you also have the
						right at any time to withdraw that consent by contacting us.
						<strong>
							Please email us at <a href="mailto:privacy@adaxtech.com">privacy@adaxtech.com</a>  if you
							have any questions or wish to exercise your rights
						</strong>
					</p>
				</div>
				<div>
					<h3>How Long Do We Keep Your Information</h3>
					<p>
						In general, we retain your information for the period for which you hold your account and for a
						longer period if we are required or allowed by law (for example, for AML/KYC information). If
						you have legal rights to delete data and we do not have a legal basis for which to retain the
						data, we can delete your information within 30 days of a lawful, valid request from you to
						exercise such rights. {' '}
					</p>
				</div>
				<div>
					<h3>Dispute Resolution</h3>
					<p>
						If you have any concerns or complaints, please contact us at <a href="mailto:privacy@adaxtech.com">privacy@adaxtech.com</a>.
					</p>
				</div>
				<div>
					<h3>Our Contact Information</h3>
					<p>
						If you have questions concerning this Privacy Policy, or you notice any bugs, errors or
						violations please feel free to send us an email through our Data Protection Officer at
						privacy@adaxtech.com. Or you may contact us at this correspondence address Kyriakou Matsi, 16
						Eagle house 3rd Floor, 1082 Nicosia Cyprus.
						<ul>
							<li>
								Our Services are <strong>NOT</strong> intended for children. Children must not use the
								Services for any purpose. We will not knowingly allow anyone under 18 to register for
								our Services or provide any personally identifying information.
							</li>
						</ul>
					</p>
				</div>
				<div>
					<h3>Policy on Links To Other Sites</h3>
					<p>
						We may provide links to other third party sites, applications and APIs as a convenience to you
						(collectively, the “Third Party Links”). Please exercise care when visiting or using any Third
						Party Links. The Third Party Links have separate and independent privacy policies, notices and
						terms of use which govern your use of such tools and their use of any information they collect.
						You should read these policies carefully. We disclaim all liability for personal information you
						provide to any Third Party Links.
					</p>
				</div>
				<div>
					<h3>Security</h3>
					<p>
						Unfortunately, the transmission of information via the internet is not completely secure.
						Although we will do our best to protect your personal information, we cannot guarantee the
						security of the information transmitted to our Services; any transmission of your information is
						at your own risk.
					</p>
				</div>
				<div>
					<h3>Marketing</h3>
					<p>
						We will only disclose your information to any third party for marketing with your consent. You
						can exercise your right to prevent such processing by checking certain boxes on the forms we use
						to collect your data when you sign up for the Services. You can also exercise the right to
						withdraw your consent to such marketing at any time by emailing us at privacy@adaxtech.com
					</p>
				</div>
				<div>
					<h3>Changes To This Policy</h3>
					<p>
						We may amend this policy from time to time by posting a revised version. The revised version
						will be effective at the time we post it. We encourage you to periodically check this page for
						the latest information on our Privacy Policy.
					</p>
				</div>
				<div>
					<h3>
						Provisions Specific to BaseTrade Customers. <br />Please note the following supplemental
						provisions to this Privacy Policy for BaseTrade customersusers.{' '}
					</h3>
					<p>
						<strong>In addition to all of the above:</strong>
						<ol>
							<li>
								We engage the services of additional Third Party Providers (apart from those mentioned
								in previous sections) to process your transactions. In this regard, it is necessary for
								us to share your Personal Information with them in order for them to perform their
								services to process your transactions.
							</li>
							<li>
								IMPORTANT: Our Third Party Providers may use your Personal Information for commercial
								purposes. Your continued use of the BaseTrade Service signifies your concurrence to the
								use of your Personal Information by our Third Party Providers for their own commercial
								purposes.
							</li>
							<li>
								Your use of the BaseTrade Service will signify your positive consent to the following
								provisions:
								<ol>
									<li>
										BaseTrade uses third party services and such third party’s affiliates services
										which enable you to place monetary deposits and perform transfer of payments
										within BaseTrade’s app or website by making use of your existing credit card (as
										and if available and applicable) (the “Service” and the “Third Party Service
										Provider”). The Services do not include any additional service, and such third
										party services do not include providing and/or depositing the applicable
										Cryptocurrency at your account.
									</li>
									<li>
										BaseTrade may share and transfer (including cross border transfer) Personal
										Information with the Third Party Service Provider for the purpose of rendering
										the Services which will be made to BaseTrade’s app or website via the use of
										your credit card. The Personal Information will be shared with the Third Party
										Service Provider after you elect to execute such monetary payments by using the
										Services of the Third Party Service Provider. For the purpose of this section
										Personal Information shall include information that identifies or may identify
										you, including the information submitted by you through the registration form
										when you subscribe to the BaseTrade app or website such as your E-mail address,
										country and city and/or information provided through social websites or any
										other identifying information provided by you while using the services of our
										website.
									</li>
									<li>
										In addition, BaseTrade may transfer any Non-Personal Information provided by you
										through your use of the services on our BaseTrade app or website to the Third
										Party Service Provider in order to allow the Third Party Service Provider to
										perform preliminary examinations of Non-personal Information for the purpose of
										determining if you are qualified to use the services of such Third Party Service
										Provider (including the history of your transactions on the website which will
										be provided without any identifying information and solely for the purpose of
										performing the preliminary examinations).
									</li>
									<li>
										By accepting these terms, you represent that any and all information you provide
										us is true and accurate. Any false or fraudulent information and/or use of the
										services rendered to you is prohibited.
									</li>
									<li>
										You are not obligated by law to provide BaseTrade and/or the Third Party Service
										Provider with any Personal Information. You hereby acknowledge and agree that
										you are providing BaseTrade and/or the Third Party Service Provider with
										Personal Information at your own free will, for the purposes of rendering the
										Services.
									</li>
								</ol>
							</li>
						</ol>
					</p>
				</div>
			</div>
		);
		const ch = '';
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
