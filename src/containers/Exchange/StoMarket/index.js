import React, { Component, Fragment } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Icon, Popup } from 'semantic-ui-react'

import {
	AdxStoMarket
} from '../../../components/AdxExchange/AdxStoMarket';
import { 
	Scrollable,
	View, 
	HorizontalTrack, 
	HorizontalThumb, 
	VerticalTrack, 
	VerticalThumb
} from '../../../components/Base/Scrollable';

const assets = require.context('../../../assets')

class StoMarket extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	tableRows = () => {
		return Array.apply(null, Array(1)).map((item, i) => (
			<tr key={i}>
				{/* <td><div className="img"><img src={assets('./tower.jpg')} /></div></td> */}
				<td><strong>List Your STO With ADAX</strong></td>
				<td>ADX</td>
				<td>RE</td>
				<td>3,210,023</td>
				<td>$21.32</td>
				<td>2000</td>
				<td>Not Eligible</td>
				<td><div className="apply-btn">Apply</div></td>
			</tr>
		))
	}

	render() {
		const { visible } = this.props;

		const stoMarket = (
			<table>
				<thead>
					<tr>
						{/* <th></th> */}
						<th>Name</th>
						<th>Symbol</th>
						<th>Asset Type</th>
						<th>
							TAR
							<Popup
								trigger={<Icon name='info' color='#fff' size='small' bordered circular />}
								content='TAR represents the Total Amount Raised to date'
								position='bottom center'
								size='mini'
								wide
								style={{background: '#262626', border: 'none'}} />
						</th>
						<th>Current Price</th>
						<th>24hr Vol</th>
						<th>Eligibility</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{this.tableRows()}
				</tbody>
			</table>
		)

		return (
			<AdxStoMarket visible={visible}>
				<Scrollable
					autoHide={true}
					hideTracksWhenNotNeeded={true}
					autoHeightMax={'100%'}
					universal={true}
					renderView={props => <View {...props} />}
					renderTrackHorizontal={props => <HorizontalTrack {...props} />}
					renderThumbHorizontal={props => <HorizontalThumb {...props} />}
					renderTrackVertical={props => <VerticalTrack {...props} />}
					renderThumbVertical={props => <VerticalThumb {...props} />} >
					{stoMarket}
				</Scrollable>
			</AdxStoMarket>
		);
	}
}

export default StoMarket;