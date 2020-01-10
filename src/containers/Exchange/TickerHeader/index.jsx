import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars'

import { propTypes, defaultProps } from './index.props';
import { HBTickerHeader, HBTickerHeaderColumn } from './../../../components/HBExchange/HBTickerHeader';
import {
	View, 
	HorizontalTrack, 
	HorizontalThumb, 
	VerticalTrack, 
	VerticalThumb
} from '../../../components/Base/Scrollable';

import { formatNumberToLocale } from './../../../helpers';
class TickerHeader extends Component {
	static propTypes = propTypes;
	static defaultProps = defaultProps;

	render() {
		const { TickerDataBasic } = this.props;
		if (!TickerDataBasic.Completed) {
			return (
				<HBTickerHeader>
					<HBTickerHeaderColumn>Loading...</HBTickerHeaderColumn>
				</HBTickerHeader>
			);
		}
		return (
			<Scrollbars
				autoHide={true}
				autoHeight={true}
				hideTracksWhenNotNeeded={true}
				universal={true}
				renderTrackHorizontal={props => <HorizontalTrack {...props} />}
				renderThumbHorizontal={props => <HorizontalThumb {...props} />}
				renderTrackVertical={props => <VerticalTrack {...props} />}
				renderThumbVertical={props => <VerticalThumb {...props} />} 
			>
				<HBTickerHeader>
					<HBTickerHeaderColumn>
						<span>Last Price</span>
						<span>
							{formatNumberToLocale(
								TickerDataBasic.Data.LastTradedPx,
								TickerDataBasic.Data.Product2DecimalPlaces
							)}
						</span>
					</HBTickerHeaderColumn>
					<HBTickerHeaderColumn>
						<span>24h Change</span>
						<span>{formatNumberToLocale(TickerDataBasic.Data.Rolling24HrPxChange, 2)}%</span>
					</HBTickerHeaderColumn>
					<HBTickerHeaderColumn>
						<span>Bid</span>
						<span className="buy">
							{formatNumberToLocale(TickerDataBasic.Data.BestBid, TickerDataBasic.Data.Product2DecimalPlaces)}
						</span>
					</HBTickerHeaderColumn>
					<HBTickerHeaderColumn>
						<span>Ask</span>
						<span className="sell">
							{formatNumberToLocale(
								TickerDataBasic.Data.BestOffer,
								TickerDataBasic.Data.Product2DecimalPlaces
							)}
						</span>
					</HBTickerHeaderColumn>
					<HBTickerHeaderColumn>
						<span>24h Volume</span>
						<span>{formatNumberToLocale(TickerDataBasic.Data.Rolling24HrVolume, 5)}</span>
					</HBTickerHeaderColumn>
					<HBTickerHeaderColumn>
						<span>24h High</span>
						<span>{formatNumberToLocale(TickerDataBasic.Data.SessionHigh, 5)}</span>
					</HBTickerHeaderColumn>
					<HBTickerHeaderColumn>
						<span>24h Low</span>
						<span>{formatNumberToLocale(TickerDataBasic.Data.SessionLow, 5)}</span>
					</HBTickerHeaderColumn>
				</HBTickerHeader>
			</Scrollbars>
		);
	}
}

export default TickerHeader;
