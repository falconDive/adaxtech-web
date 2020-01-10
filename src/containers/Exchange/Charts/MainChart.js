import React, {Component} from 'react'
import HighchartsReact from 'highcharts-react-official'
import highcharts from 'highcharts/highstock';
import moment from 'moment'
import _ from 'lodash'

import chartData from './chartData.json'

class MainChart extends Component {
	constructor(props) {
		super(props);

		const { height } = props;
		const fontStyle = {
			fontSize: '9px',
			color: '#fff'
		}
		const axisProps = {
			labels: {
				style: { ...fontStyle }
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
					height,
					backgroundColor: 'transparent'
				},
				navigator: {
					outlineColor: '#1AF1C0'
				},
				rangeSelector: {
					inputBoxBorderColor: '#fff',
					labelStyle: {color: '#fff'},
					inputStyle: {
						color: '#fff'
					},
					buttons: []
				},
				title: {
					text: ''
				},
				yAxis: [{
					...axisProps,
					opposite: false,
					labels: {
						...axisProps.labels,
						align: 'left',
						x: 3
					},
					title: {
						text: 'OHLC',
						style: { ...fontStyle }

					},
					height: '60%',
					resize: {
						enabled: true
					}
				}, {
					...axisProps,
					opposite: false,
					labels: {
						...axisProps.labels,
						align: 'left',
						x: 3
					},
					title: {
						text: 'Volume',
						style: { ...fontStyle }
					},
					top: '65%',
					height: '35%',
					offset: 0,
				}],
				xAxis: {
					...axisProps
				},
				tooltip: {
					dateTimeLabelFormats: {
						minute: '%A, %b %e, %I:%M %p'
					},
					split: true
				},
				scrollbar: {
			        enabled: false
			    },
				series: [{
					type: 'candlestick',
					name: 'OHLC',
					data: [],
					color: '#ff5858',
					upColor: '#14493d',
					lineColor: '#1AF1C0'
				}, {
					type: 'column',
					name: 'Volume',
					data: [],
					yAxis: 1,        
					color: '#2A2A2A'
				}]
			}
		}
	}

	componentDidUpdate (prevProps) {
		const { data } = this.state.chartOptions.series[0]
		const { seriesData: { ohlc, volume = []} } = this.props
		const lastData = _.get(this.props, 'seriesData.volume.0.0')
		const prevLastData = _.get(prevProps, 'seriesData.volume.0.0')

		if (lastData !== prevLastData || data.length !== volume.length) {
			this.setState(state => {
				const {chartOptions} = state
				return {
					chartOptions: {
					...chartOptions,
						series: [{
							...chartOptions.series[0],
							data: ohlc
						}, {
							...chartOptions.series[1],
							data: volume
						}]
					}
				}
			})
		}
	}

	_componentDidMount() {
		const ohlc = [], volume = [];
		const groupingUnits = [[
			'week',
			[1]
		], [
			'month',
			[1, 2, 3, 4, 6]
		]]

		chartData.forEach(item => {
			ohlc.push([
				item[0], // the date
				item[1], // open
				item[2], // high
				item[3], // low
				item[4] // close
			])

			volume.push([
				item[0], // the date
				item[5] // the volume
			]);
		})

		this.setState(state => {
			const {chartOptions} = state
			return {
				...chartOptions,
				chartOptions: {
					series: [{
						...chartOptions.series[0],
						data: ohlc
					}, {
						...chartOptions.series[1],
						data: volume
					}]
				}
			}
		})
	}
  
	render () {
		const {chartOptions} = this.state;
		
		highcharts.setOptions({
			lang: {
				rangeSelectorZoom: ''
			}
		})

		return (
			<HighchartsReact
				highcharts={highcharts}
				constructorType={'StockChart'}
				options={chartOptions} />
		);
	}
}

export default MainChart;