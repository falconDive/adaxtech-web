'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import _ from 'lodash'
import moment from 'moment'
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';

import { Level1DataSelector } from '../../../selectors/entities/level1-data-selector'
import { SelectedInstrumentDataSelector } from '../../../selectors/entities/instruments-data-selector'

export class LineChart extends Component {
	constructor(props) {
		super(props);

		const { height } = this.props

		const axisProps = {
			title: {
				enabled: false
			},
			labels: {
				style: {
					fontSize: '9px',
					color: '#fff'
				}
			},
			tickLength: 0,
			lineWidth: 1,
			lineColor: '#383838',
			gridLineWidth: 0
		}

		this.state = {
			chartOptions: {
				credits: {
					enabled: false
				},
				chart: {
					height: props.height,
					zoomType: 'x',
					resetZoomButton: {
						position: {
							x: 0,
							y: 0
						}
					},
					margin: [10, 0, 15, 3],
					backgroundColor: 'transparent'
				},
				title: {
					text: ''
				},
				xAxis: {
					...axisProps,
					type: 'datetime',
					labels: {
						...axisProps.labels,
						formatter: () => {
							return moment(this.value).format('hh:mm A')
						},
						y: 12
					}
				},
				yAxis: {
					...axisProps,
					min: 0,
					labels: {
						...axisProps.labels,
						align: 'left',
						x: 3,
						y: -3
					}
				},
				legend: {
					enabled: false
				},
				plotOptions: {
					area: {
					fillColor: {
						linearGradient: {
							x1: 0,
							y1: 0,
							x2: 0,
							y2: 1
						},
						stops: [
							[0, '#FFB600'],
							[1, Highcharts.Color('#FFB600').setOpacity(0).get('rgba')]
						]
					},
					marker: {
						radius: 2,
							enabled: false
						},
						lineWidth: 1,
						states: {
							hover: {
								lineWidth: 1
							}
						},
						threshold: null
					}
				},
				series: [{
					type: 'area',
					name: 'Last-traded Price',
					color: '#FFB600',
					data:  []
				}]
			}
		};
	}

	componentWillUnmount () {
		if (this.dataUpdateInterval) {
			clearInterval(this.dataUpdateInterval)
		}
	}

	componentDidMount () {
		this.loadChartData()
		this.dataUpdateInterval = setInterval(this.loadChartData, 10000)
	}

	componentDidUpdate (prevProps) {
		const { SelectedInstrument: { InstrumentId : prevInstrumentId } } = prevProps
		const { SelectedInstrument: { InstrumentId }} = this.props

		if (InstrumentId !== prevInstrumentId) {
			this.loadChartData()
		}
	}

	loadChartData = () => {
		const { Level1Data: { History }, SelectedInstrument: { InstrumentId } } = this.props
		const uniqueTradeTime = [];
		let seriesData = [];

		if (InstrumentId && Array.isArray(History[InstrumentId]) && History[InstrumentId].length) {
			let history = History[InstrumentId];
			history.sort((a, b) => b.LastTradeTime - a.LastTradeTime);
			
			history.forEach(info => {
				const { LastTradeTime, LastTradedPx } = info;

				if (! uniqueTradeTime.includes(LastTradeTime) && LastTradeTime > 0) {
					seriesData.push([
						LastTradeTime, 
						LastTradedPx
					]);

					uniqueTradeTime.push(LastTradeTime);
				}
			})

			if (seriesData.length > 0) {
				let [LastTradeTime, LastTradedPx] = seriesData[0];

				seriesData.unshift([
					(LastTradeTime - 500), 
					LastTradedPx
				]);
			}
		}

		this.setState(({ chartOptions }) => {
			return {
				chartOptions: {
					...chartOptions,
					series: [{
						...chartOptions.series[0],
						data: seriesData
					}]
				}
			}
		})
	}

	render() {
		let { chartOptions } = this.state;

		return (
			<HighchartsReact
				highcharts={Highcharts}
				options={chartOptions} />
		)
	}
}

const mapStateToProps = (state) => ({
	Level1Data: Level1DataSelector(state),
	SelectedInstrument: SelectedInstrumentDataSelector(state)
})

export default connect(mapStateToProps)(LineChart);
