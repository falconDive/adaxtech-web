import React, { Component } from 'react';
import { TypeChooser } from 'react-stockcharts/lib/helper';
import { clone } from 'lodash';
import { HBChart } from './../../../components/HBExchange/HBChart';

import {CandleStickChartWithDarkTheme} from './../../../libs/chart/charts';
import { getData } from './../../../libs/chart/utils';

class PriceChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}
	componentDidMount() {
		// getData().then((data) => {
		// 	// console.log(data, 'datadata')
		// 	this.setState({ data });
		// });
	}

	render() {
		const { SubscribeTickerData } = this.props;
		let chartDisplay = null;
		if (SubscribeTickerData.Data.length) {
			// if (this.state.data.length) {
			// data = { SubscribeTickerData.Data }
			// const dd = [ ...SubscribeTickerData.Data ];
			const chartData = clone(SubscribeTickerData.Data);

			// const dd = this.state.data;
			// console.log(this.state.data)
			chartDisplay = <TypeChooser>{(type) => <CandleStickChartWithDarkTheme data={chartData} type={`svg`} />}</TypeChooser>;
		}
		return (
			<HBChart>
				<h3>Price Chart</h3>
				{chartDisplay}
			</HBChart>
		);
	}
}

export default PriceChart;
