import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import MAINIMG from './../../assets/adax/main-img.svg';

export default class MainContent extends Component {
	render() {
		return (
			<Grid stackable>
				<Grid.Row columns={2}>
					<Grid.Column>
						<img alt={'ADAX'} src={MAINIMG} />
					</Grid.Column>
					<Grid.Column verticalAlign={'middle'}>
						<h2>Easy onboarding</h2>
						<p style={{ maxWidth: '430px', lineHeight: '25px' }}>
							ADAX follows an easy onboarding and KYC process for investors looking to trade or invest.
							ADAX has a transparent process for Issuers looking to list their token on the platform.
						</p>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}
