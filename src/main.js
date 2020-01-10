import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
// import Home from './pages/Home'
import User from "./pages/User";
import Account from "./pages/Account";
import Loadable from "./HOC/Loadable";

import { getInstruments } from "./actions/instruments-actions";
import { getProducts } from "./actions/products-actions";
import { subscribeTicker } from "./actions/AP-subscriptions-actions";

import TermsAndCondition from "./pages/Static/TermsAndCondition";
import PrivacyPolicy from "./pages/Static/PrivacyPolicy";
import CookiePolicy from "./pages/Static/CookiePolicy";
import Fees from "./pages/Static/Fees";
import Faqs from "./pages/Static/Faqs";
import kycAML from "./pages/Static/kycAML";
import HomePage from "./pages/HomePage";
import APIPortal from "./pages/Static/APIPortal/APIPortal";

const SiginIn = Loadable({
  loader: () => import(`./pages/SignIn`)
});
const Home = Loadable({
  loader: () => import(`./pages/Home`)
});
const SignUp = Loadable({
  loader: () => import(`./pages/SignUp`)
});
const ForgotPassword = Loadable({
  loader: () => import(`./pages/ForgotPassword`)
});
const ResetPassword = Loadable({
  loader: () => import(`./pages/ResetPassword`)
});
const EmailVerify = Loadable({
  loader: () => import(`./pages/EmailVerify`)
});
const WithdrawConfirmation = Loadable({
  loader: () => import(`./pages/WithdrawConfirmation`)
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.props.getInstruments();
    this.props.getProducts();
    // this.props.subscribeTicker({ "InstrumentId": 1, "Interval": 900, "IncludeLastCount": 5000 })
  }
  render() {
    return (
      <div className="main">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/user" component={User} />
            <Route path="/signin" component={SiginIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/account" component={Account} />
            <Route exact path="/reset-password" component={ResetPassword} />
            <Route exact path="/email-verify" component={EmailVerify} />
            <Route exact path="/confirm-withdraw" component={WithdrawConfirmation} />
            <Route exact path="/terms-and-conditions" component={TermsAndCondition} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="/cookie-policy" component={CookiePolicy} />
            <Route exact path="/kyc-aml" component={kycAML} />
            <Route exact path="/fees" component={Fees} />
            <Route exact path="/faqs" component={Faqs} />
            <Route exact path="/api" component={APIPortal} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {
    getInstruments,
    getProducts,
    subscribeTicker
  }
)(Main);
