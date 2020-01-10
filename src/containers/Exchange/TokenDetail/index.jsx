import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';

import { HBTokenDetail, HBTokenDetailRow, HBTokenDetailColumn, Preview, PreviewItem } from './../../../components/HBExchange/HBTokenDetail'

import sampleCard from './../../../assets/stc/sample-card.png';
class TokenDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowHeight: 100
        }
    }

    handleResize = () => {
        this.setState({ windowHeight: window.innerHeight - 80 });
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    render() {
        return (
            <HBTokenDetail>
                <h3>Generation Tower (H2O)</h3>
                <HBTokenDetailRow>
                    <HBTokenDetailColumn grid={`main`}>
                        <img src={sampleCard} alt="sampleCard"/>
                    </HBTokenDetailColumn>
                    <HBTokenDetailColumn grid={`main`}>
                        <Scrollbars
                            onScroll={this.handleScroll}
                            onScrollFrame={this.handleScrollFrame}
                            onScrollStart={this.handleScrollStart}
                            onScrollStop={this.handleScrollStop}
                            onUpdate={this.handleUpdate}
                            renderView={this.renderView}
                            renderTrackHorizontal={this.renderTrackHorizontal}
                            renderThumbHorizontal={this.renderThumbHorizontal}
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                            autoHeight
                            autoHeightMin={210}
                            autoHeightMax={210}
                            thumbMinSize={30}
                            universal={true}>
                            <p>Generation Tower is designed to be Philippines best commercial address, a financial centre designed to ensure Philippines place as the financial centre of South-East Asia and a key hub in the world financial system.</p>
                            <HBTokenDetailRow>
                                <HBTokenDetailColumn grid={`details`}>Structure</HBTokenDetailColumn>
                                <HBTokenDetailColumn grid={`details`}>Equity</HBTokenDetailColumn>
                            </HBTokenDetailRow>
                            <HBTokenDetailRow>
                                <HBTokenDetailColumn grid={`details`}>Total size</HBTokenDetailColumn>
                                <HBTokenDetailColumn grid={`details`}>$33,200,000</HBTokenDetailColumn>
                            </HBTokenDetailRow>
                            <HBTokenDetailRow>
                                <HBTokenDetailColumn grid={`details`}>Offering price</HBTokenDetailColumn>
                                <HBTokenDetailColumn grid={`details`}>$10</HBTokenDetailColumn>
                            </HBTokenDetailRow>
                            <HBTokenDetailRow>
                                <HBTokenDetailColumn grid={`details`}>Change 24H</HBTokenDetailColumn>
                                <HBTokenDetailColumn grid={`details`}>N/A</HBTokenDetailColumn>
                            </HBTokenDetailRow>
                            <HBTokenDetailRow>
                                <HBTokenDetailColumn grid={`details`}>Tokens Outstanding</HBTokenDetailColumn>
                                <HBTokenDetailColumn grid={`details`}>3,320,000</HBTokenDetailColumn>
                            </HBTokenDetailRow>
                            <Link to="/account/trade/preview">View Full Details</Link>
                        </Scrollbars>
                    </HBTokenDetailColumn>
                </HBTokenDetailRow>
            </HBTokenDetail>
        )
    }
}

export default TokenDetail;