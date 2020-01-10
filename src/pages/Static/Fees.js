import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Grid, Accordion, Icon, Tab } from "semantic-ui-react";
import { connect } from "react-redux";

import logo from "./../../assets/adax/logo.svg";
// import { HYB_COUNT_DISABLE_FEE } from './../../config/basetrade-config';
// import { formatNumberToLocale } from './../../helpers/helpers';

export const Static = styled.div`
  color: #ffffff;
  padding: 50px 0;
  h2 {
    margin-bottom: 30px;
  }
  .adax-logo {
    width: 100%;
    max-width: 350px;
    padding: 50px 0;
  }
  hr {
    border-color: rgba(255, 255, 255, 0.06);
    margin: 20px 0;
  }
  table {
    line-height: 1.9;
  }
  table td {
    width: 250px;
  }
  .col-2nd {
    text-align: center;
  }
`;
class Fees extends Component {
  render() {
    return (
      <Static>
        <Grid style={{ maxWidth: "965px", margin: "0 auto" }}>
          <Grid.Column>
            <div className="text-center">
              <Link to="/">
                <img className="adax-logo" src={logo} alt="ADAX Logo" />
              </Link>
            </div>

            <h2 className="text-center">{"Trading Fees - Utility Tokens"}</h2>
            {/* <Tab menu={{ fluid: true, vertical: true }} panes={panes} /> */}
            <Grid>
              <Grid.Column>
                <Grid columns={2}>
                  <Grid.Column>
                    <h3>Regular Fees</h3>
                    <p>
                      Subject to the Trading Discount below, a trading fee of
                      0.30% (rounded to the nearest tradable unit) is payable by
                      a User to ADAX for each transaction by the User for
                      Utility tokens
                    </p>
                  </Grid.Column>
                  <Grid.Column className={"col-2nd"}>
                    <h3>0.30% </h3>
                  </Grid.Column>
                </Grid>

                <Grid columns={2}>
                  <Grid.Column>
                    <h3>Discounted Fees</h3>
                    <p>
                      If a User selects to settle the Trading Fee for utility
                      tokens using HYB tokens, the User will receive a 50%
                      discount on the Trading Fee (i.e. the Trading Fee will be
                      reduced to 0.15%). The conversion rate of HYB tokens in
                      respect of the relevant transaction shall be determined by
                      Hybrid Exchange as at the time of the transaction in good
                      faith.
                    </p>
                  </Grid.Column>
                  <Grid.Column className={"col-2nd"}>
                    <h3>0.15% </h3>
                  </Grid.Column>
                </Grid>

                <Grid columns={2}>
                  <Grid.Column>
                    <h3>Withdrawal Fees (Utility Tokens)</h3>
                    <table>
                      <tbody>
                        <tr>
                          <td>BTC Bitcoin</td>
                          <td>0.001</td>
                        </tr>
                        <tr>
                          <td>ETH Ethereum</td>
                          <td>0.01</td>
                        </tr>
                        <tr>
                          <td>HYB Hybrid Token</td>
                          <td>60</td>
                        </tr>
                        <tr>
                          <td>TUSD</td>
                          <td>3.6</td>
                        </tr>
                        <tr>
                          <td>XRP Ripple</td>
                          <td>0.25</td>
                        </tr>
                        <tr>
                          <td>LTC Litecoin</td>
                          <td>0.001</td>
                        </tr>
                      </tbody>
                    </table>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>
      </Static>
    );
  }
}

const mapStatToProps = state => {
  return {
    Translation: state.Translation
  };
};
export default connect(
  mapStatToProps,
  {}
)(Fees);
