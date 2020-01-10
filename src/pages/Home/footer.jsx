import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { FooterItems } from './components';

import ADAXLOGO from './../../assets/adax/adax-logo.svg';

export default class Footer extends Component {
	render() {
		return (
			<div style={{ padding: '80px 10%' }}>
				<div>
					<Image src={ADAXLOGO} />
					<p style={{ padding: '20px 0 80px 0', color: '#CACACA' }}>
						ADAX has a provisional license* from CEZA and provides a regulated platform for secondary
						trading of eligible security tokens <br />
						<br />
						Get full information on the tokens listed on the platform
					</p>
				</div>
				<Grid stackable>
					<Grid.Row columns={2}>
						<Grid.Column floated="left" width={8}>
							<Grid stackable>
								<Grid.Row columns={3}>
									<Grid.Column>
										<FooterItems>
											<a href={'/terms-and-conditions'}>Terms and conditions</a>
										</FooterItems>
									</Grid.Column>
									<Grid.Column>
										<FooterItems>
											<a href={'/privacy-policy'}>Privacy Policy</a>
										</FooterItems>
									</Grid.Column>
									<Grid.Column>
										<FooterItems>
											<a href={'/cookie-policy'}>Cookie Policy</a>
										</FooterItems>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}
