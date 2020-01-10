import React, { Component } from 'react';
import FreshChat from 'react-freshchat';
import { HBFooter } from './../../../components/Base';
import { Link } from 'react-router-dom';

class Footer extends Component {
	render() {
		return (
			<HBFooter>
				{/* <FreshChat token={`0eed27ee-3191-422d-901c-c7adb64a8db7`} onInit={
                    widget => {
                        widget.user.setProperties({
                                email: 'john.doe@gmail.com',
                                first_name: 'ADAX',
                                last_name: 'Web',
                                phone: '0999999999'
                            }
                        )
                    }} /> */}
				<div>
					<Link to="/">{'Home'}</Link>
					<Link target="_blank" to="/terms-and-conditions">
						{'Terms and Conditions'}
					</Link>
					<Link target="_blank" to="/privacy-policy">
						{'Privacy Policy'}
					</Link>
					<Link target="_blank" to="/Fees">
						{'Fees'}
					</Link>
					<Link target="_blank" to="/Faqs"> 
					{'Faq'}
					</Link>
					{/*<a href="https://feedback.adaxtech.com/forums/adax-customer-feedback" target="_blank">Submit Feedback</a>*/}
				</div>
				<span>&copy; AdaxTech</span>
			</HBFooter>
		);
	}
}

export default Footer;
