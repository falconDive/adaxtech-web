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

export default class CookiePolicy extends Component {
	render() {
		let language = localStorage.getItem('lang');
		const en = (
			<div>
				<h2 className="text-center">Cookie Policy</h2>
				<p>
					For the purposes of this Cookies Policy, "<strong>we</strong>", "<strong>us</strong>" and "<strong>our</strong>"
					means:
				</p>
				<ul>
					<li>
						Adax Limited a company incorporated in under the laws of Cyrpus, with registration number
						HE395636 and registered office at Kyriakou Matsi, 16 Eagle house 3rd Floor, 1082 Nicosia Cyprus
					</li>
				</ul>
				<p>
					We use cookies, log files, pixel tags, web beacons, clear GIFs, device IDs and similar files or
					technologies to collect and store the information we automatically collect about your device and use
					of the cryptocurrency exchange platform available at https://adaxtech.com and any Adaxtech API
					(“Services”). You can find out more about cookies and how to control them in the information below.
				</p>
				<p>
					If you do not accept the use of these cookies, please disable them using the instructions in this
					cookie policy, by following the 'opt-out' links provided below or by changing your browser settings
					so that cookies from the Services cannot be placed on your device.
				</p>

				<ol>
					<li>
						<p>
							<strong>What is a cookie?</strong>
						</p>
						<p>
							Cookies are text files containing small amounts of information which are downloaded to your
							device when you visit a certain web address. Cookies are then sent back to the originating
							web address on each subsequent visit, or to another web address that recognises that cookie.
							Cookies are widely used in order to make the Services work, or to work more efficiently, as
							well as to provide information to the Services team. Cookies do lots of different jobs, like
							letting you navigate between pages efficiently, remembering your preferences, and generally
							improving the user experience. Cookies may tell us, for example, whether you have used the
							Services before or whether you are a new user. They can also help to ensure that advertising
							you see online are more relevant to you and your interests.
						</p>
						<p>
							Cookies do lots of different jobs, like letting you navigate between pages efficiently,
							remembering your preferences, and generally improving the user experience. Cookies may tell
							us, for example, whether you have used the Services before or whether you are a new user.{' '}
						</p>
						<p>There are two broad categories of cookies:</p>
						<ul>
							<li>
								<strong>First party cookies</strong>, served directly by us to your device.
							</li>
							<li>
								<strong>Third party cookies</strong>, which are served by a third party on our behalf.{' '}
							</li>
						</ul>
						<p>
							Cookies can remain on your device for different periods of time. Some cookies are 'session
							cookies', meaning that they exist only while your browser or the application is open. These
							are deleted automatically once you close your browser or application. Other cookies are
							'permanent cookies', meaning that they survive after your browser or application is closed.
							They can be used by the Services to recognise your device when you open and use the Services
							again.
						</p>
					</li>
					<li>
						<p>
							<strong>How do we use cookies?</strong>
						</p>
						<p>We use cookies to:</p>
						<ul>
							<li>track traffic flow and patterns of travel in connection with the Services;</li>
							<li>
								understand the total number of visitors to the Services on an ongoing basis and the
								types of browsers and operating systems used by our visitors;
							</li>
							<li>monitor the performance of the Services and to continually improve it; and</li>
							<li>customise and enhance your online experience.</li>
						</ul>
					</li>
					<li>
						<p>
							<strong>What types of cookies do we use?</strong>
						</p>
						<p>
							The types of cookies used by us and our partners in connection with the Services can be
							classified 'essential cookies' and 'functionality cookies'. We have set out some further
							information about each category, and the purposes of the cookies we and third parties set in
							the following table.
						</p>
						<div class="table-responsive">
							<table class="table table-bordered">
								<thead>
									<tr>
										<th>Type of cookie</th>
										<th>What it does</th>
										<th>How to block</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Cookies necessary for essential services</td>
										<td>
											These cookies are essential to provide you with the Services and to use some
											of its features, such as to authenticate log-in, secure the Services and
											your information, and prevent fraudulent, criminal or other suspect
											activities. Without these cookies, services you have asked for, like
											transactional pages and secure login accounts, would not be possible.{' '}
										</td>
										<td>
											Please see the instructions set out in 'How to control or delete cookies'
											below.
										</td>
									</tr>
									<tr>
										<td>Functionality Cookies</td>
										<td>
											Functionality cookies record information about choices you have made and
											allow us to tailor the Services to you. These cookies mean that when you
											continue to use or come back to use the Services, we can provide you with
											our services as you have asked for them to be provided. We do not, however,
											store these options. They are stored in the cookie on your local machine,
											which we cannot access.
										</td>
										<td>
											Please see the instructions set out in 'How to control or delete cookies'
											below.
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</li>
					<li>
						<p>
							<strong>How to control or delete cookies</strong>
						</p>
						<p>
							You have the right to choose whether or not to accept cookies and we have explained how you
							can exercise this right below. However, please note that if you choose to refuse cookies you
							may not be able to use the full functionality of the Services.
						</p>
						<p>
							Most devices (in the case of mobile applications) and browsers (in the case of web apps and
							pages) allow you to change your cookie settings. These settings will typically be found in
							the “options” or “preferences” menu of your browser. In order to understand these settings,
							the following links may be helpful, otherwise you should use the “Help” option in your
							browser for more details.
						</p>
						<ul>
							<li>
								<a
									className="a-theme"
									href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&amp;hl=en"
									target="_blank"
								>
									Cookie settings in Chrome for web and
								</a>{' '}
								<a
									className="a-theme"
									href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DAndroid&amp;hl=en"
									target="_blank"
								>
									Android
								</a>
							</li>
							<li>
								<a className="a-theme" href="https://support.apple.com/kb/PH5042" target="_blank">
									Cookie settings in Safari web and
								</a>{' '}
								<a className="a-theme" href="https://support.apple.com/kb/HT1677" target="_blank">
									iOS.
								</a>
							</li>
							<li>
								<a
									className="a-theme"
									href="http://windows.microsoft.com/en-gb/windows7/how-to-manage-cookies-in-internet-explorer-9"
									target="_blank"
								>
									Cookie settings in Internet Explorer
								</a>
							</li>
							<li>
								<a
									className="a-theme"
									href="https://support.mozilla.org/en-US/kb/cookies"
									target="_blank"
								>
									Cookie settings in Firefox
								</a>
							</li>
						</ul>
					</li>
					<li>
						<p>
							<strong>Google Analytics</strong>
						</p>
						<p>
							We use Google Analytics, which is a web analytics tool that helps us understand how users
							engage with the Services. Like many services, Google Analytics uses first-party cookies to
							track user interactions, as in our case, where they are used to collect information about
							how users use our site. This information is used to compile reports and to help us improve
							our Services. The reports disclose website trends without identifying individual visitors.
							You can opt out of Google Analytics without affecting how you visit our site – for more
							information on opting out of being tracked by Google Analytics across all websites you use,
							visit this Google page:{' '}
							<a className="a-theme" href="https://tools.google.com/dlpage/gaoptout" target="_blank">
								https://tools.google.com/dlpage/gaoptout
							</a>
						</p>
					</li>
					<li>
						<p>
							<strong>Changes to this Cookie Policy</strong>
						</p>
						<p>
							We will occasionally update this Cookie Policy to reflect changes in our practices and
							services. When we post changes to this Cookie Policy, we will revise the "Last Updated" date
							at the top of this Cookie Policy. We recommend that you check this page from time to time to
							inform yourself of any changes in this Cookie Policy or any of our other policies.
						</p>
					</li>
					<li>
						<p>
							<strong>Need More Information?</strong>
						</p>
						<p>
							If you would like to find out more about cookies and their use on the Internet, you may find
							the following link useful:
						</p>
						<ul>
							<li>
								<a className="a-theme" href="http://www.allaboutcookies.org/" target="_blank">
									All About Cookies
								</a>
							</li>
						</ul>
					</li>
					<li>
						<p>
							<strong>Cookies that have been set in the past</strong>
						</p>
						<p>
							If you have disabled one or more Cookies, we may still use information collected from
							cookies prior to your disabled preference being set, however, we will stop using the
							disabled cookie to collect any further information.
						</p>
					</li>
					<li>
						<p>
							<strong>Contact us</strong>
						</p>
						<p>
							If you have any questions or comments about this cookies policy, or privacy matters
							generally, please contact us via email at <strong>support@adaxtech.com.</strong>
						</p>
					</li>
				</ol>
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
