import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

import { 
    Scrollable,
    View, 
    HorizontalTrack, 
    HorizontalThumb, 
    VerticalTrack, 
    VerticalThumb
} from '../../../components/Base/Scrollable';
import { ColumnHeader } from './../../../components/HBAssets/';
import { AdxSecurityToken, ScrollWrap } from './../../../components/HBAssets/AdxSecurityToken';

const assets = require.context('../../../assets')

class SecurityToken extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tokenList: []
		};
	}

	fullDetails = () => {
		window.location = '/account/trade/preview';
	};

	componentDidMount() {
		this.setState({ ListsSecurity: this.items('') });
	}

	componentWillUnmount() {
	}

	filterList(event) {
		let q = event.target.value.toLowerCase();
		this.setState({ ListsSecurity: this.items(q) });
	}

	searchStringInArray = (str, strArray) => {
		for (let j = 0; j < strArray.length; j++) {
			if (strArray[j].match(str)) return j;
		}
		return -1;
	};

	items = (f) => {
		let ls = null;
		// let idx1 = ["Generation Tower", "H20", "0xc4a8aef057b19fd5bd3018438b567178835b94c0", "ERC20", "Ethereum", "859.00345958"]
		// let filtered = idx1.filter(function(value) {
		//     return value.toLowerCase().indexOf(f) >= 0;
		// });

		// if (filtered.length > 0) {
		//     let item = [1];
		//     ls = item.map((item, key) =>
		//         <tr key={key} onClick={this.fullDetails} style={{cursor: `pointer`}}>
		//             <td>{idx1[0]}</td>
		//             <td>{idx1[1]}</td>
		//             <td>{idx1[2]}</td>
		//             <td>{idx1[3]}</td>
		//             <td>{idx1[4]}</td>
		//             <td>{idx1[5]}</td>
		//         </tr>
		//     );
		// }
		return ls;
	};

	render() {
		const { match, history } = this.props

		const tokenListItem = (
			<tr>
				<td>
					<div className="img"><img src={assets('./tower.jpg')} /></div>
				</td>
				<td>Generation Tower</td>
				<td>H20</td>
				<td>Lorem</td>
				<td>65.3245712</td>
				<td>859.00345958</td>
				<td>Lorem</td>
				<td>859.00345958</td>
			</tr>
		);

		const tokenList = Array(1).fill('').map((v, i) => {
			return <tr key={i}  onClick={() => history.push(`${match.url}/sto/${i}`)}>
				<td>
					<div className="img"><img src={assets('./tower.jpg')} /></div>
				</td>
				<td><strong>List Your STO With ADAX</strong></td>
				<td>ARCM</td>
				<td>Arcam Tech Ltd</td>
				<td>$2.00</td>
				<td>859.00345958</td>
				<td>+1.89</td>
				<td>859.00345958</td>
			</tr>
		})

		return (
			<AdxSecurityToken>
                <ColumnHeader>Security Tokens</ColumnHeader>
				{/*<input
					type="text"
					placeholder="Search"
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
						<table className={`security-token`}>
							<thead>
								<tr>
									<th></th>
									<th>Project Name</th>
									<th>Symbol</th>
									<th>Issuer</th>
									<th>Purchase Price</th>
									<th>Tokens Held</th>
									<th>Profit & Loss</th>
									<th>Available Balance</th>
								</tr>
							</thead>
							<tbody>{tokenList}</tbody>
						</table>
					</Scrollable>
				</ScrollWrap>
			</AdxSecurityToken>
		);
	}
}

export default withRouter(SecurityToken);