import React, { Component } from 'react';
import { Grid, Segment, Image } from 'semantic-ui-react';

import PORTALIMG from './../../assets/adax/portal.svg';
import TRANSACTIONHISTORYIMG from './../../assets/adax/transaction-history.svg';
import COINIMG from './../../assets/adax/coin.svg';

export default class SubContent extends Component {
	render() {
		return (
			<div style={{ marginTop: '100px' }}>
				<Grid stackable>
					<Grid.Row>
						<Grid.Column textAlign={'center'}>
							<h1 style={{ marginBottom: '100px' }}>All Your Needs in One Place</h1>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row columns={3}>
						<Grid.Column textAlign={'center'}>
							<SubContentCard
								size={'small'}
								img={PORTALIMG}
								title={'Investor Diligence Portal'}
								content={'Get full information on the tokens listed on the platform.'}
							/>
						</Grid.Column>
						<Grid.Column textAlign={'center'}>
							<SubContentCard
								size={'small'}
								img={TRANSACTIONHISTORYIMG}
								title={'Transaction history'}
								content={'Review full transaction history in your account.'}
							/>
						</Grid.Column>
						<Grid.Column textAlign={'center'}>
							<SubContentCard
								size={'small'}
								img={COINIMG}
								title={'Invest with Fiat or Digital assets'}
								content={'Get flexibility to invest with Fiat or Digital assets'}
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

const SubContentCard = ({ img, title, content, size }) => {
	return (
		<div>
			<Image src={img} centered />
			<h3>{title}</h3>
			<p style={{ padding: '2% 20%' }}>{content}</p>
		</div>
	);
};
