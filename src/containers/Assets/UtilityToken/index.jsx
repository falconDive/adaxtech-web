import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { 
    Scrollable,
    View, 
    HorizontalTrack, 
    HorizontalThumb, 
    VerticalTrack, 
    VerticalThumb
} from '../../../components/Base/Scrollable';
import { formatNumberToLocale, convertToTUSD } from './../../../helpers';
import { ColumnHeader } from './../../../components/HBAssets/';
import { AdxUtilityToken, ScrollWrap } from './../../../components/HBAssets/AdxUtilityToken';

class UtilityToken extends Component {
	constructor(props) {
		super(props);
		this.state = {
			windowHeight: 100,
			ListsUtility: [],
			UpdatedList: []
		};
	}

	handleResize = () => {
		this.setState({ windowHeight: window.innerHeight - 80 });
	};

	componentDidMount() {
		this.handleResize();
		window.addEventListener('resize', this.handleResize);
		let ListsUtility = [];
		const { UtilityTokens } = this.props;

		UtilityTokens.Data.map((item, key) =>
			ListsUtility.push({
				icon: item.CryptoIcon,
				symbol: item.ProductSymbol,
				avail_balance: formatNumberToLocale(item.Amount - item.Hold),
				usd_balance: formatNumberToLocale(
					item.ProductSymbol === 'TUSD' ? item.Amount - item.Hold : item.BalanceToTUSD,
					2
				)
			})
		);
		this.setState({ ListsUtility: ListsUtility });
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
	}

	filterList(event) {
		// const { UtilityTokens } = this.props;
		// let ListsUtility = [];
		// var filtered = UtilityTokens.Data.filter(function(el) {
		// 	return el.ProductSymbol.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
		// });
		// filtered.map((item, key) =>
		// 	ListsUtility.push({
		// 		icon: item.CryptoIcon,
		// 		symbol: item.ProductSymbol,
		// 		avail_balance: formatNumberToLocale(item.Amount - item.Hold),
		// 		usd_balance: formatNumberToLocale(
		// 			item.ProductSymbol === 'TUSD' ? item.Amount - item.Hold : item.BalanceToTUSD,
		// 			2
		// 		)
		// 	})
		// );
		// this.setState({ ListsUtility: ListsUtility });
	}

	render() {
		const { UtilityTokens, ConversionTable } = this.props;
		let utilityList = [];

		if (UtilityTokens.Completed) {
			utilityList = UtilityTokens.Data.map((item) => {
				const balance = item.Amount - item.Hold
				const conversionData = {
					conversionTable: ConversionTable, 
					unit: item.ProductSymbol, 
					value: balance
				}

				return (
					<tr key={item.ProductId}>
						<td>
							<img src={item.CryptoIcon} alt="" height="40" />
							<span>{item.ProductSymbol}</span>
						</td>
						<td>{formatNumberToLocale(balance, item.DecimalPlaces)}</td>
						<td>${formatNumberToLocale(convertToTUSD(conversionData), 2)}</td>
					</tr>
				);
			});
		}

		return (
			<AdxUtilityToken>
				<ColumnHeader>Utility Tokens</ColumnHeader>
				{/*<input
					type="text"
					className="form-control form-control-xs"
					placeholder="Search"
					style={{ textIndent: '10px' }}
					onChange={this.filterList.bind(this)}
				/>*/}
				<ScrollWrap>
					<Scrollable
	                    autoHide={true}
	                    hideTracksWhenNotNeeded={true}
	                    autoHeightMax={'100%'}
	                    universal={true}
	                    renderView={props => <View {...props} />}
	                    renderTrackHorizontal={props => <HorizontalTrack {...props} />}
	                    renderThumbHorizontal={props => <HorizontalThumb {...props} />}
	                    renderTrackVertical={props => <VerticalTrack {...props} />}
	                    renderThumbVertical={props => <VerticalThumb {...props} />}>
	                    <table>
							<thead>
								<tr>
									<th>Name</th>
									<th>Available Balance</th>
									<th>Balance in USD</th>
								</tr>
							</thead>
							<tbody>
								{utilityList}
							</tbody>
						</table>
	                </Scrollable>
				</ScrollWrap>
			</AdxUtilityToken>
		);
	}
}

export default UtilityToken;
