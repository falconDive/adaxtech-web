// // import React from "react";
// // import PropTypes from "prop-types";

// // import { format } from "d3-format";
// // import { timeFormat } from "d3-time-format";

// // import { ChartCanvas, Chart } from "react-stockcharts";
// // import {
// //     BarSeries,
// //     OHLCSeries,
// //     LineSeries,
// //     MACDSeries,

// //     AreaSeries,
// // } from "react-stockcharts/lib/series";
// // import { XAxis, YAxis } from "react-stockcharts/lib/axes";
// // import {
// //     CrossHairCursor,
// //     EdgeIndicator,
// //     MouseCoordinateX,
// //     MouseCoordinateY,
// // } from "react-stockcharts/lib/coordinates";

// // import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
// // import {
// //     OHLCTooltip,
// //     MovingAverageTooltip,
// //     MACDTooltip,
// // } from "react-stockcharts/lib/tooltip";
// // import { ema, macd, change, elderImpulse } from "react-stockcharts/lib/indicator";
// // import { fitWidth } from "react-stockcharts/lib/helper";
// // import { last } from "react-stockcharts/lib/utils";

// // const macdAppearance = {
// //     stroke: {
// //         macd: "#FF0000",
// //         signal: "#00F300",
// //     },
// //     fill: {
// //         divergence: "#4682B4"
// //     },
// // };

// // class OHLCChartWithElderImpulseIndicator extends React.Component {
// //     render() {

// //         const changeCalculator = change();

// //         const ema12 = ema()
// //             .id(1)
// //             .options({ windowSize: 12 })
// //             .merge((d, c) => { d.ema12 = c; })
// //             .accessor(d => d.ema12);

// //         const macdCalculator = macd()
// //             .options({
// //                 fast: 12,
// //                 slow: 26,
// //                 signal: 9,
// //             })
// //             .merge((d, c) => { d.macd = c; })
// //             .accessor(d => d.macd);

// //         const elderImpulseCalculator = elderImpulse()
// //             .macdSource(macdCalculator.accessor())
// //             .emaSource(ema12.accessor());

// //         const { type, data: initialData, width, ratio } = this.props;

// //         const calculatedData = elderImpulseCalculator(macdCalculator(ema12(changeCalculator(initialData))));
// //         const xScaleProvider = discontinuousTimeScaleProvider
// //             .inputDateAccessor(d => d.date);
// //         const {
// //             data,
// //             xScale,
// //             xAccessor,
// //             displayXAccessor,
// //         } = xScaleProvider(calculatedData);

// //         const start = xAccessor(last(data));
// //         const end = xAccessor(data[Math.max(0, data.length - 150)]);
// //         const xExtents = [start, end];

// //         return (
// //             <ChartCanvas height={500}
// //                 width={width}
// //                 ratio={ratio}
// //                 margin={{ left: 70, right: 70, top: 20, bottom: 30 }}
// //                 type={type}
// //                 seriesName="MSFT"
// //                 data={data}
// //                 xScale={xScale}
// //                 xAccessor={xAccessor}
// //                 displayXAccessor={displayXAccessor}
// //                 xExtents={xExtents}
// //             >
// //                 <Chart id={1} height={300}
// //                     yExtents={d => [d.high, d.low]}
// //                     padding={{ top: 10, bottom: 10 }}
// //                 >
// //                     <XAxis axisAt="bottom" orient="bottom" showTicks={false} outerTickSize={0} />
// //                     <YAxis axisAt="right" orient="right" ticks={2} />

// //                     <MouseCoordinateY
// //                         at="right"
// //                         orient="right"
// //                         displayFormat={format(".2f")} />

// //                     <LineSeries yAccessor={ema12.accessor()} stroke={ema12.stroke()} />

// //                     <OHLCSeries stroke={d => elderImpulseCalculator.stroke()[d.elderImpulse]} />

// //                     <EdgeIndicator itemType="last" orient="right" edgeAt="right"
// //                         yAccessor={d => d.close} fill={d => d.close > d.open ? "#6BA583" : "#FF0000"} />

// //                     <OHLCTooltip origin={[-40, -10]} />
// //                     <MovingAverageTooltip
// //                         onClick={e => console.log(e)}
// //                         origin={[-38, 5]}
// //                         options={[
// //                             {
// //                                 yAccessor: ema12.accessor(),
// //                                 type: "EMA",
// //                                 stroke: ema12.stroke(),
// //                                 windowSize: ema12.options().windowSize,
// //                             },
// //                         ]}
// //                     />

// //                 </Chart>
// //                 <Chart id={2} height={150}
// //                     yExtents={d => d.volume}
// //                     origin={(w, h) => [0, h - 300]}
// //                 >
// //                     <YAxis axisAt="left" orient="left" ticks={5} tickFormat={format(".2s")} />

// //                     <MouseCoordinateY
// //                         at="left"
// //                         orient="left"
// //                         displayFormat={format(".4s")} />

// //                     <BarSeries yAccessor={d => d.volume}
// //                         fill={d => d.close > d.open ? "#6BA583" : "#FF0000"}
// //                         opacity={0.4} />
// //                 </Chart>
// //                 {/* <Chart id={3} height={150}
// //                     yExtents={macdCalculator.accessor()}
// //                     origin={(w, h) => [0, h - 150]} padding={{ top: 10, bottom: 10 }}
// //                 >
// //                     <XAxis axisAt="bottom" orient="bottom" />
// //                     <YAxis axisAt="right" orient="right" ticks={2} />

// //                     <MouseCoordinateX
// //                         at="bottom"
// //                         orient="bottom"
// //                         displayFormat={timeFormat("%Y-%m-%d")} />
// //                     <MouseCoordinateY
// //                         at="right"
// //                         orient="right"
// //                         displayFormat={format(".2f")} />

// //                     <MACDSeries yAccessor={d => d.macd}
// //                         {...macdAppearance} />
// //                     <MACDTooltip
// //                         origin={[-38, 15]}
// //                         yAccessor={d => d.macd}
// //                         options={macdCalculator.options()}
// //                         appearance={macdAppearance}
// //                     />

// //                     <YAxis axisAt="left" orient="left" ticks={5} tickFormat={format(".2s")} />
// //                 </Chart> */}
// //                 <CrossHairCursor />
// //             </ChartCanvas>
// //         );
// //     }
// // }

// // OHLCChartWithElderImpulseIndicator.propTypes = {
// //     data: PropTypes.array.isRequired,
// //     width: PropTypes.number.isRequired,
// //     ratio: PropTypes.number.isRequired,
// //     type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
// // };

// // OHLCChartWithElderImpulseIndicator.defaultProps = {
// //     type: "svg",
// // };
// // OHLCChartWithElderImpulseIndicator = fitWidth(OHLCChartWithElderImpulseIndicator);

// // export default OHLCChartWithElderImpulseIndicator;

// import React from "react";
// import PropTypes from "prop-types";

// import { format } from "d3-format";
// import { utcDay } from "d3-time";
// import { timeFormat } from "d3-time-format";

// import { ChartCanvas, Chart } from "react-stockcharts";
// import {
//     BarSeries,
//     OHLCSeries,
//     LineSeries,
//     MACDSeries,
//     CandlestickSeries
// } from "react-stockcharts/lib/series";
// import { XAxis, YAxis } from "react-stockcharts/lib/axes";
// import {
//     CrossHairCursor,
//     EdgeIndicator,
//     MouseCoordinateX,
//     MouseCoordinateY,
// } from "react-stockcharts/lib/coordinates";

// import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
// import {
//     OHLCTooltip,
//     MovingAverageTooltip,
//     MACDTooltip,
// } from "react-stockcharts/lib/tooltip";
// import { ema, macd, change, elderImpulse } from "react-stockcharts/lib/indicator";
// import { fitWidth } from "react-stockcharts/lib/helper";
// import { last, timeIntervalBarWidth } from "react-stockcharts/lib/utils";

// const macdAppearance = {
//     stroke: {
//         macd: "#FF0000",
//         signal: "#00F300",
//     },
//     fill: {
//         divergence: "#4682B4"
//     },
// };

// class OHLCChartWithElderImpulseIndicator extends React.Component {
//     render() {

//         const changeCalculator = change();

//         const ema12 = ema()
//             .id(1)
//             .options({ windowSize: 12 })
//             .merge((d, c) => { d.ema12 = c; })
//             .accessor(d => d.ema12);

//         const macdCalculator = macd()
//             .options({
//                 fast: 12,
//                 slow: 26,
//                 signal: 9,
//             })
//             .merge((d, c) => { d.macd = c; })
//             .accessor(d => d.macd);

//         const elderImpulseCalculator = elderImpulse()
//             .macdSource(macdCalculator.accessor())
//             .emaSource(ema12.accessor());

//         const { type, data: initialData, width, ratio } = this.props;

//         const calculatedData = elderImpulseCalculator(macdCalculator(ema12(changeCalculator(initialData))));
//         const xScaleProvider = discontinuousTimeScaleProvider
//             .inputDateAccessor(d => d.date);
//         const {
//             data,
//             xScale,
//             xAccessor,
//             displayXAccessor,
//         } = xScaleProvider(calculatedData);

//         const start = xAccessor(last(data));
//         const end = xAccessor(data[Math.max(0, data.length - 150)]);
//         const xExtents = [start, end];

//         return (
//             <ChartCanvas height={500}
//                 width={width}
//                 ratio={ratio}
//                 margin={{ left: 70, right: 70, top: 20, bottom: 30 }}
//                 type={type}
//                 seriesName="MSFT"
//                 data={data}
//                 xScale={xScale}
//                 xAccessor={xAccessor}
//                 displayXAccessor={displayXAccessor}
//                 xExtents={xExtents}
//             >
//                 <Chart id={1} height={300}
//                     yExtents={d => [d.high, d.low]}
//                     padding={{ top: 10, bottom: 10 }}
//                 >
//                     {/* <XAxis axisAt="bottom" orient="bottom" showTicks={false} outerTickSize={0} />
//                     <YAxis axisAt="right" orient="right" ticks={2} /> */}

//                     <MouseCoordinateY
//                         at="right"
//                         orient="right"
//                         displayFormat={format(".2f")} />

//                     {/* <LineSeries yAccessor={ema12.accessor()} stroke={ema12.stroke()} /> */}

//                     {/* <OHLCSeries stroke={d => elderImpulseCalculator.stroke()[d.elderImpulse]} /> */}

//                     {/* <EdgeIndicator itemType="last" orient="right" edgeAt="right"
//                         yAccessor={d => d.close} fill={d => d.close > d.open ? "#6BA583" : "#FF0000"} /> */}

//                     <OHLCTooltip origin={[-40, -10]} />
//                     <MovingAverageTooltip
//                         onClick={e => console.log(e)}
//                         origin={[-38, 5]}
//                         options={[
//                             {
//                                 yAccessor: ema12.accessor(),
//                                 type: "EMA",
//                                 stroke: ema12.stroke(),
//                                 windowSize: ema12.options().windowSize,
//                             },
//                         ]}
//                     />

//                     {/* <XAxis axisAt="bottom" orient="bottom" ticks={6} />
//                     <YAxis axisAt="left" orient="left" ticks={5} /> */}
//                     <CandlestickSeries width={timeIntervalBarWidth(utcDay)} />
//                 </Chart>
//                 <Chart id={2} height={150}
//                     yExtents={d => d.volume}
//                     origin={(w, h) => [0, h - 300]}
//                 >
//                     <YAxis axisAt="left" orient="left" ticks={5} tickFormat={format(".2s")} />

//                     <MouseCoordinateY
//                         at="left"
//                         orient="left"
//                         displayFormat={format(".4s")} />

//                     <BarSeries yAccessor={d => d.volume}
//                         fill={d => d.close > d.open ? "#6BA583" : "#FF0000"}
//                         opacity={0.4} />
//                 </Chart>

//                 {/* <Chart id={1} yExtents={d => [d.high, d.low]}>
//                     <XAxis axisAt="bottom" orient="bottom" ticks={6} />
//                     <YAxis axisAt="left" orient="left" ticks={5} />
//                     <CandlestickSeries width={timeIntervalBarWidth(utcDay)} />
//                 </Chart> */}
//                 {/* <Chart id={3} height={150}
//                     yExtents={macdCalculator.accessor()}
//                     origin={(w, h) => [0, h - 150]} padding={{ top: 10, bottom: 10 }}
//                 >
//                     <XAxis axisAt="bottom" orient="bottom" />
//                     <YAxis axisAt="right" orient="right" ticks={2} />

//                     <MouseCoordinateX
//                         at="bottom"
//                         orient="bottom"
//                         displayFormat={timeFormat("%Y-%m-%d")} />
//                     <MouseCoordinateY
//                         at="right"
//                         orient="right"
//                         displayFormat={format(".2f")} />

//                     <MACDSeries yAccessor={d => d.macd}
//                         {...macdAppearance} />
//                     <MACDTooltip
//                         origin={[-38, 15]}
//                         yAccessor={d => d.macd}
//                         options={macdCalculator.options()}
//                         appearance={macdAppearance}
//                     />
//                 </Chart> */}
//                 <CrossHairCursor />
//             </ChartCanvas>
//         );
//     }
// }

// OHLCChartWithElderImpulseIndicator.propTypes = {
//     data: PropTypes.array.isRequired,
//     width: PropTypes.number.isRequired,
//     ratio: PropTypes.number.isRequired,
//     type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
// };

// OHLCChartWithElderImpulseIndicator.defaultProps = {
//     type: "svg",
// };
// OHLCChartWithElderImpulseIndicator = fitWidth(OHLCChartWithElderImpulseIndicator);

// export default OHLCChartWithElderImpulseIndicator;

/**
 * OK WITH THIS CHART
 */
// import React from "react";
// import PropTypes from "prop-types";

// import { format } from "d3-format";
// import { timeFormat } from "d3-time-format";

// import { ChartCanvas, Chart } from "react-stockcharts";
// import {
//     BarSeries,
//     AreaSeries,
//     CandlestickSeries,
//     LineSeries,
// } from "react-stockcharts/lib/series";
// import { XAxis, YAxis } from "react-stockcharts/lib/axes";
// import {
//     CrossHairCursor,
//     EdgeIndicator,
//     CurrentCoordinate,
//     MouseCoordinateX,
//     MouseCoordinateY,
// } from "react-stockcharts/lib/coordinates";

// import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
// import {
//     OHLCTooltip,
//     MovingAverageTooltip,
// } from "react-stockcharts/lib/tooltip";
// import { ema, sma } from "react-stockcharts/lib/indicator";
// import { fitWidth } from "react-stockcharts/lib/helper";
// import { last } from "react-stockcharts/lib/utils";

// class CandleStickChartWithEdge extends React.Component {
//     render() {
//         const ema20 = ema()
//             .id(0)
//             .options({ windowSize: 20 })
//             .merge((d, c) => { d.ema20 = c; })
//             .accessor(d => d.ema20);

//         const ema50 = ema()
//             .id(2)
//             .options({ windowSize: 50 })
//             .merge((d, c) => { d.ema50 = c; })
//             .accessor(d => d.ema50);

//         const smaVolume70 = sma()
//             .id(3)
//             .options({ windowSize: 70, sourcePath: "volume" })
//             .merge((d, c) => { d.smaVolume70 = c; })
//             .accessor(d => d.smaVolume70);
//         const { type, data: initialData, width, ratio } = this.props;

//         const calculatedData = ema20(ema50(smaVolume70(initialData)));
//         const xScaleProvider = discontinuousTimeScaleProvider
//             .inputDateAccessor(d => d.date);
//         const {
//             data,
//             xScale,
//             xAccessor,
//             displayXAccessor,
//         } = xScaleProvider(calculatedData);

//         const start = xAccessor(last(data));
//         const end = xAccessor(data[Math.max(0, data.length - 150)]);
//         const xExtents = [start, end];

//         return (
//             <ChartCanvas height={400}
//                 ratio={ratio}
//                 width={width}
//                 margin={{ left: 90, right: 90, top: 70, bottom: 30 }}
//                 type={type}
//                 seriesName="MSFT"
//                 data={data}
//                 xScale={xScale}
//                 xAccessor={xAccessor}
//                 displayXAccessor={displayXAccessor}
//                 xExtents={xExtents}
//             >
//                 <Chart id={2}
//                     yExtents={[d => d.volume, smaVolume70.accessor()]}
//                     height={150} origin={(w, h) => [0, h - 150]}
//                 >
//                     <YAxis axisAt="left" orient="left" ticks={5} tickFormat={format(".2s")} />

//                     <BarSeries yAccessor={d => d.volume} fill={d => d.close > d.open ? "#6BA583" : "#FF0000"} />
//                     <AreaSeries yAccessor={smaVolume70.accessor()} stroke={smaVolume70.stroke()} fill={smaVolume70.fill()} />

//                     <CurrentCoordinate yAccessor={smaVolume70.accessor()} fill={smaVolume70.stroke()} />
//                     <CurrentCoordinate yAccessor={d => d.volume} fill="#9B0A47" />

//                     <EdgeIndicator itemType="first" orient="left" edgeAt="left"
//                         yAccessor={d => d.volume} displayFormat={format(".4s")} fill="#0F0F0F" />
//                     <EdgeIndicator itemType="last" orient="right" edgeAt="right"
//                         yAccessor={d => d.volume} displayFormat={format(".4s")} fill="#0F0F0F" />
//                     <EdgeIndicator itemType="first" orient="left" edgeAt="left"
//                         yAccessor={smaVolume70.accessor()} displayFormat={format(".4s")} fill={smaVolume70.fill()} />
//                     <EdgeIndicator itemType="last" orient="right" edgeAt="right"
//                         yAccessor={smaVolume70.accessor()} displayFormat={format(".4s")} fill={smaVolume70.fill()} />
//                 </Chart>
//                 <Chart id={1}
//                     yPan yExtents={[d => [d.high, d.low], ema20.accessor(), ema50.accessor()]}
//                     padding={{ top: 10, bottom: 20 }}
//                 >

//                     <XAxis axisAt="bottom" orient="bottom" />
//                     <XAxis axisAt="top" orient="top" flexTicks />
//                     <YAxis axisAt="right" orient="right" ticks={5} />

//                     <CandlestickSeries />

//                     <LineSeries yAccessor={ema20.accessor()} stroke={ema20.stroke()} highlightOnHover />
//                     <LineSeries yAccessor={ema50.accessor()} stroke={ema50.stroke()} highlightOnHover />

//                     <CurrentCoordinate yAccessor={ema20.accessor()} fill={ema20.stroke()} />
//                     <CurrentCoordinate yAccessor={ema50.accessor()} fill={ema50.stroke()} />

//                     <EdgeIndicator itemType="last" orient="right" edgeAt="right"
//                         yAccessor={ema20.accessor()} fill={ema20.fill()} />
//                     <EdgeIndicator itemType="last" orient="right" edgeAt="right"
//                         yAccessor={ema50.accessor()} fill={ema50.fill()} />
//                     <EdgeIndicator itemType="last" orient="right" edgeAt="right"
//                         yAccessor={d => d.close} fill={d => d.close > d.open ? "#6BA583" : "#FF0000"} />
//                     <EdgeIndicator itemType="first" orient="left" edgeAt="left"
//                         yAccessor={ema20.accessor()} fill={ema20.fill()} />
//                     <EdgeIndicator itemType="first" orient="left" edgeAt="left"
//                         yAccessor={ema50.accessor()} fill={ema50.fill()} />
//                     <EdgeIndicator itemType="first" orient="left" edgeAt="left"
//                         yAccessor={d => d.close} fill={d => d.close > d.open ? "#6BA583" : "#FF0000"} />

//                     <MouseCoordinateX
//                         at="top"
//                         orient="top"
//                         displayFormat={timeFormat("%Y-%m-%d")} />
//                     <MouseCoordinateX
//                         at="bottom"
//                         orient="bottom"
//                         displayFormat={timeFormat("%Y-%m-%d")} />
//                     <MouseCoordinateY
//                         at="right"
//                         orient="right"
//                         displayFormat={format(".2f")} />
//                     <MouseCoordinateY
//                         at="left"
//                         orient="left"
//                         displayFormat={format(".2f")} />

//                     <OHLCTooltip origin={[-40, -65]} />
//                     <MovingAverageTooltip
//                         onClick={e => console.log(e)}
//                         origin={[-38, 15]}
//                         options={[
//                             {
//                                 yAccessor: ema20.accessor(),
//                                 type: ema20.type(),
//                                 stroke: ema20.stroke(),
//                                 windowSize: ema20.options().windowSize,
//                             },
//                             {
//                                 yAccessor: ema50.accessor(),
//                                 type: ema50.type(),
//                                 stroke: ema50.stroke(),
//                                 windowSize: ema50.options().windowSize,
//                             },
//                         ]}
//                     />
//                 </Chart>
//                 <CrossHairCursor />
//             </ChartCanvas>
//         );
//     }
// }

// /*

// */

// CandleStickChartWithEdge.propTypes = {
//     data: PropTypes.array.isRequired,
//     width: PropTypes.number.isRequired,
//     ratio: PropTypes.number.isRequired,
//     type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
// };

// CandleStickChartWithEdge.defaultProps = {
//     type: "svg",
// };
// CandleStickChartWithEdge = fitWidth(CandleStickChartWithEdge);

// export default CandleStickChartWithEdge;
/**
 * OK WITH THIS CHART END
 */

import React from 'react';
import PropTypes from 'prop-types';

import { format } from 'd3-format';
import { timeFormat } from 'd3-time-format';

import { ChartCanvas, Chart } from 'react-stockcharts';
import {
	BarSeries,
	BollingerSeries,
	CandlestickSeries,
	LineSeries,
	StochasticSeries,
	ElderRaySeries,
	AreaSeries,
} from 'react-stockcharts/lib/series';
import { XAxis, YAxis } from 'react-stockcharts/lib/axes';
import {
	CrossHairCursor,
	EdgeIndicator,
	CurrentCoordinate,
	MouseCoordinateX,
	MouseCoordinateY
} from 'react-stockcharts/lib/coordinates';

import { discontinuousTimeScaleProvider } from 'react-stockcharts/lib/scale';
import {
	OHLCTooltip,
	MovingAverageTooltip,
	BollingerBandTooltip,
	StochasticTooltip,
	GroupTooltip,
	SingleValueTooltip
} from 'react-stockcharts/lib/tooltip';
import { ema, stochasticOscillator, bollingerBand, elderRay, change } from 'react-stockcharts/lib/indicator';
import { fitWidth } from 'react-stockcharts/lib/helper';
import { last } from 'react-stockcharts/lib/utils';

const bbAppearance = {
	stroke: {
		top: '#964B00',
		middle: '#FF6600',
		bottom: '#964B00'
	},
	fill: '#4682B4'
};
const stoAppearance = {
	stroke: Object.assign({}, StochasticSeries.defaultProps.stroke, {
		top: '#37a600',
		middle: '#b8ab00',
		bottom: '#37a600'
	})
};

class CandleStickChartWithDarkTheme_ extends React.Component {
	render() {
		const height = 750;
		const { type, data: initialData, width, ratio } = this.props;

		const margin = { left: 70, right: 70, top: 20, bottom: 30 };

		const gridHeight = height - margin.top - margin.bottom;
		const gridWidth = width - margin.left - margin.right;

		const showGrid = true;
		const yGrid = showGrid ? { innerTickSize: -1 * gridWidth, tickStrokeOpacity: 0.2 } : {};
		const xGrid = showGrid ? { innerTickSize: -1 * gridHeight, tickStrokeOpacity: 0.2 } : {};

		const ema20 = ema()
			.id(0)
			.options({ windowSize: 20 })
			.merge((d, c) => {
				d.ema20 = c;
			})
			.accessor((d) => d.ema20);

		const ema50 = ema()
			.id(2)
			.options({ windowSize: 50 })
			.merge((d, c) => {
				d.ema50 = c;
			})
			.accessor((d) => d.ema50);

		const slowSTO = stochasticOscillator()
			.options({ windowSize: 14, kWindowSize: 3 })
			.merge((d, c) => {
				d.slowSTO = c;
			})
			.accessor((d) => d.slowSTO);
		const fastSTO = stochasticOscillator()
			.options({ windowSize: 14, kWindowSize: 1 })
			.merge((d, c) => {
				d.fastSTO = c;
			})
			.accessor((d) => d.fastSTO);
		const fullSTO = stochasticOscillator()
			.options({ windowSize: 14, kWindowSize: 3, dWindowSize: 4 })
			.merge((d, c) => {
				d.fullSTO = c;
			})
			.accessor((d) => d.fullSTO);

		const bb = bollingerBand()
			.merge((d, c) => {
				d.bb = c;
			})
			.accessor((d) => d.bb);

		/**
         * Elder Ray starts here
         */

		const elder = elderRay();
		const changeCalculator = change();

		/**
         * Elder Ray Ends here
         */

		// const calculatedData = bb(ema20(ema50(slowSTO(fastSTO(fullSTO(initialData))))));
		const calculatedData = bb(ema20(ema50(slowSTO(fastSTO(fullSTO(changeCalculator(elder(initialData))))))));
		const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor((d) => d.date);
		const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(calculatedData);

		const start = xAccessor(last(data));
		const end = xAccessor(data[Math.max(0, data.length - 150)]);
		const xExtents = [ start, end ];

		return (
			<ChartCanvas
				height={350}
				width={width}
				ratio={ratio}
				margin={margin}
				type={type}
				seriesName="ETHBTC"
				data={data}
				xScale={xScale}
				xAccessor={xAccessor}
				displayXAccessor={displayXAccessor}
				xExtents={xExtents}
			>
				<Chart
					id={1}
					height={350}
					yExtents={[ (d) => [ d.high, d.low ], bb.accessor(), ema20.accessor(), ema50.accessor() ]}
					padding={{ top: 10, bottom: 20 }}
				>
					<YAxis axisAt="right" orient="right" ticks={5} {...yGrid} inverted={true} tickStroke="#FFFFFF" />
					<XAxis
						axisAt="bottom"
						orient="bottom"
						showTicks={false}
						outerTickSize={0}
						stroke="#FFFFFF"
						opacity={0.5}
					/>

					<MouseCoordinateY at="right" orient="right" displayFormat={format('.2f')} />

					<CandlestickSeries
						stroke={(d) => (d.close > d.open ? '#6BA583' : '#DB0000')}
						wickStroke={(d) => (d.close > d.open ? '#6BA583' : '#DB0000')}
						fill={(d) => (d.close > d.open ? '#6BA583' : '#DB0000')}
					/>

					<LineSeries yAccessor={ema20.accessor()} stroke={ema20.stroke()} />
					<LineSeries yAccessor={ema50.accessor()} stroke={ema50.stroke()} />

					<BollingerSeries yAccessor={(d) => d.bb} {...bbAppearance} />
					<CurrentCoordinate yAccessor={ema20.accessor()} fill={ema20.stroke()} />
					<CurrentCoordinate yAccessor={ema50.accessor()} fill={ema50.stroke()} />

					<EdgeIndicator
						itemType="last"
						orient="right"
						edgeAt="right"
						yAccessor={(d) => d.close}
						fill={(d) => (d.close > d.open ? '#6BA583' : '#DB0000')}
					/>

					<OHLCTooltip textFill={`#fff`} labelFill={`#FFF`} origin={[ -40, -10 ]} />
					{/* <MovingAverageTooltip
						onClick={e => console.log(e)}
						origin={[-38, 15]}
						options={[
							{
								yAccessor: ema20.accessor(),
								type: ema20.type(),
								stroke: ema20.stroke(),
								windowSize: ema20.options().windowSize,
							},
							{
								yAccessor: ema50.accessor(),
								type: ema50.type(),
								stroke: ema50.stroke(),
								windowSize: ema50.options().windowSize,
							},
						]}
					/> */}
					{/* <GroupTooltip
                        layout="vertical"
                        origin={[-38, 15]}
                        verticalSize={20}
                        onClick={e => console.log(e)}
                        options={[
                            {
                                yAccessor: ema20.accessor(),
                                yLabel: `${ema20.type()}(${ema20.options().windowSize})`,
                                valueFill: ema20.stroke(),
                                withShape: true,
                            },
                            {
                                yAccessor: ema50.accessor(),
                                yLabel: `${ema50.type()}(${ema50.options().windowSize})`,
                                valueFill: ema50.stroke(),
                                withShape: true,
                            },
                        ]}
                    /> */}
					{/* <BollingerBandTooltip
                        origin={[-38, 60]}
                        yAccessor={d => d.bb}
                        options={bb.options()}
                    /> */}
				</Chart>
				<Chart id={2} yExtents={(d) => d.volume} height={95} origin={(w, h) => [ 0, h - 70 ]}>
					<YAxis axisAt="left" orient="left" ticks={5} tickFormat={format('.2s')} tickStroke="#FFFFFF" />
					<BarSeries yAccessor={(d) => d.volume} fill={(d) => (d.close > d.open ? '#6BA583' : '#DB0000')} />
				</Chart>
				{/* <Chart
					id={3}
					height={100}
					yExtents={[ 0, elder.accessor() ]}
					origin={(w, h) => [ 0, h - 100 ]}
					padding={{ top: 10, bottom: 10 }}
				>
					<XAxis axisAt="bottom" orient="bottom" showTicks={false} outerTickSize={0} tickStroke="#FFFFFF" />
					<YAxis axisAt="right" orient="right" ticks={4} tickFormat={format('.2f')} tickStroke="#FFFFFF" />

					<MouseCoordinateY at="right" orient="right" displayFormat={format('.2f')} />

					<ElderRaySeries yAccessor={elder.accessor()} /> */}
				{/* <SingleValueTooltip
                        yAccessor={elder.accessor()}
                        yLabel="Elder Ray"
                        textFill={`#fff`}
                        yDisplayFormat={d => `${format(".2f")(d.bullPower)}, ${format(".2f")(d.bearPower)}`}
                        origin={[-40, 15]} /> */}
				{/* </Chart> */}
				{/* <Chart id={3}
                    yExtents={[0, 100]}
                    height={125} origin={(w, h) => [0, h - 375]} padding={{ top: 10, bottom: 10 }}
                >
                    <XAxis axisAt="bottom" orient="bottom"
                        showTicks={false}
                        outerTickSize={0}
                        stroke="#FFFFFF" opacity={0.5} />
                    <YAxis axisAt="right" orient="right"
                        tickValues={[20, 50, 80]}
                        tickStroke="#FFFFFF" />
                    <MouseCoordinateY
                        at="right"
                        orient="right"
                        displayFormat={format(".2f")} />

                    <StochasticSeries
                        yAccessor={d => d.slowSTO}
                        {...stoAppearance} />
                    <StochasticTooltip
                        origin={[-38, 15]}
                        yAccessor={d => d.slowSTO}
                        options={slowSTO.options()}
                        appearance={stoAppearance}
                        label="Slow STO" />
                </Chart> */}
				{/* <Chart id={4}
                    yExtents={[0, 100]}
                    height={125} origin={(w, h) => [0, h - 250]} padding={{ top: 10, bottom: 10 }}
                >
                    <XAxis axisAt="bottom" orient="bottom"
                        showTicks={false}
                        outerTickSize={0}
                        stroke="#FFFFFF"
                        opacity={0.5} />
                    <YAxis axisAt="right" orient="right"
                        tickValues={[20, 50, 80]}
                        tickStroke="#FFFFFF" />

                    <MouseCoordinateY
                        at="right"
                        orient="right"
                        displayFormat={format(".2f")} />

                    <StochasticSeries
                        yAccessor={d => d.fastSTO}
                        {...stoAppearance} />
                    <StochasticTooltip
                        origin={[-38, 15]}
                        yAccessor={d => d.fastSTO}
                        options={fastSTO.options()}
                        appearance={stoAppearance}
                        label="Fast STO" />
                </Chart> */}
				{/* <Chart id={5}
                    yExtents={[0, 100]}
                    height={125}
                    origin={(w, h) => [0, h - 125]}
                    padding={{ top: 10, bottom: 10 }}
                >
                    <XAxis axisAt="bottom" orient="bottom"
                        {...xGrid}
                        tickStroke="#FFFFFF"
                        stroke="#FFFFFF" />
                    <YAxis axisAt="right" orient="right"
                        tickValues={[20, 50, 80]}
                        tickStroke="#FFFFFF" />

                    <MouseCoordinateX
                        at="bottom"
                        orient="bottom"
                        displayFormat={timeFormat("%Y-%m-%d")} />
                    <MouseCoordinateY
                        at="right"
                        orient="right"
                        displayFormat={format(".2f")} />

                    <StochasticSeries
                        yAccessor={d => d.fullSTO}
                        {...stoAppearance} />
                    <StochasticTooltip
                        origin={[-38, 15]}
                        yAccessor={d => d.fullSTO}
                        options={fullSTO.options()}
                        appearance={stoAppearance}
                        label="Full STO" />
                </Chart> */}
				<CrossHairCursor stroke="#FFFFFF" />
			</ChartCanvas>
		);
	}
}
CandleStickChartWithDarkTheme_.propTypes = {
	data: PropTypes.array.isRequired,
	width: PropTypes.number.isRequired,
	ratio: PropTypes.number.isRequired,
	type: PropTypes.oneOf([ 'svg', 'hybrid' ]).isRequired
};

CandleStickChartWithDarkTheme_.defaultProps = {
	type: 'svg'
};
CandleStickChartWithDarkTheme_ = fitWidth(CandleStickChartWithDarkTheme_);

export const CandleStickChartWithDarkTheme = CandleStickChartWithDarkTheme_;


class LineAndScatterChartGrid_ extends React.Component {
	render() {
		const { type, data: initialData, width, ratio, interpolation, height = 400 } = this.props;
		const { gridProps, seriesType } = this.props;
		const margin = { left: 70, right: 70, top: 20, bottom: 30 };
		
		const gridHeight = height - margin.top - margin.bottom;
		const gridWidth = width - margin.left - margin.right;

		const showGrid = false;
		const yGrid = showGrid ? { innerTickSize: -1 * gridWidth } : {};
		const xGrid = showGrid ? { innerTickSize: -1 * gridHeight } : {};

		const xScaleProvider = discontinuousTimeScaleProvider
			.inputDateAccessor(d => d.date);
		const {
			data,
			xScale,
			xAccessor,
			displayXAccessor,
		} = xScaleProvider(initialData);

		const start = xAccessor(last(data));
		const end = xAccessor(data[Math.max(0, data.length - 150)]);
		const xExtents = [start, end];
		
		const Series = seriesType === "line"
			? LineSeries
			: AreaSeries;
		return (
			<ChartCanvas height={height}
				ratio={ratio}
				width={width}
				margin={{ left: 10, right: 20, top: 10, bottom: 20 }}
				type={type}
				seriesName="MSFT"
				data={data}
				xScale={xScale}
				xAccessor={xAccessor}
				displayXAccessor={displayXAccessor}
				xExtents={xExtents}
			>
				<Chart id={1}
					yExtents={d => [d.high, d.low]}
				>
					<XAxis
						axisAt="bottom"
						orient="bottom"
						{...gridProps}
						{...xGrid}
					/>
					<YAxis
						axisAt="right"
						orient="right"
						ticks={5}
						{...gridProps}
						{...yGrid}
					/>
					<Series
						yAccessor={d => d.close}
						interpolation={interpolation}
						stroke="#ff7f0e"
						fill="#ff7f0e"
					/>
					{/*
					<MouseCoordinateX
						at="bottom"
						orient="bottom"
						displayFormat={timeFormat("%Y-%m-%d")} />
					<MouseCoordinateY
						at="right"
						orient="right"
						displayFormat={format(".2f")} />

					<OHLCTooltip origin={[-40, 0]}/> 
					*/}
				</Chart>

				<CrossHairCursor />
			</ChartCanvas>

		);
	}
}

LineAndScatterChartGrid_.propTypes = {
	data: PropTypes.array.isRequired,
	width: PropTypes.number.isRequired,
	ratio: PropTypes.number.isRequired,
	type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

LineAndScatterChartGrid_.defaultProps = {
	type: "hybrid",
};
LineAndScatterChartGrid_ = fitWidth(LineAndScatterChartGrid_);

export const LineAndScatterChartGrid = LineAndScatterChartGrid_;
