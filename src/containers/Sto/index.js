import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { AdxSto } from '../../components/AdxSto';
import Loadable from './../../HOC/Loadable'

// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

const SecurityToken = Loadable({
    loader: () => import(`./../../containers/Assets/SecurityToken`)
})

const UtilityToken = Loadable({
    loader: () => import(`./../../containers/Assets/UtilityToken`)
})

const OpenOrdersComponent = Loadable({
    loader: () => import(`./../../containers/Assets/OpenOrders`)
})

export class Assets extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { } = this.state
        const { } = this.props;

        return (
        	<AdxSto>
				<div className="header">&nbsp;</div>
				<div className="content">
					<div className="sub-col"></div>
					<div className="sub-col"></div>
					<div className="sub-col"></div>
				</div>	
        	</AdxSto>
        );
    }
}

const mapStateToProps = (state) => ({
});

const AssetConatainer = connect(mapStateToProps, {
})(withRouter(Assets));

export default AssetConatainer