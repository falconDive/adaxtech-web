import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Grid } from 'semantic-ui-react';
import * as Yup from 'yup';
import { ADAXBtn, BannerLeftContainer, BannerLeftInner, ADAXInput, ErrorLabel } from './components';
import TRADINGVIEWIMG from './../../assets/adax/DesktopAdax@4x.svg';

class Banner extends Component {
	state = {
		email: '',
		validEmail: false,
		emailTouched: false
	};

	handleEmailChange = async (e) => {
		const email = e.target.value;

		if (!email) {
			this.setState({ validEmail: false, emailTouched: true });
			return;
		}

		let schema = Yup.object().shape({
			email: Yup.string().email()
		});

		const validEmail = await schema.isValid({
			email
		});

		this.setState({ email, validEmail, emailTouched: true });
	};

	handleSignUpClick = () => {
		// localStorage.setItem('register_email', this.state.email);
		// this.props.history.push('/signup');
	};

	render() {
		console.log(this.props, 'props');
		return (
			<Grid stackable>
				<Grid.Row columns={2}>
					<Grid.Column width={5} verticalAlign={'middle'}>
						<BannerLeftContainer>
							<BannerLeftInner>
								<h2>
									Welcome to ADAX, a fully regulated asset backed token issuance and exchange platform
								</h2>
								<br />
								<br />
								Through this emerging class of asset backed tokens, investors and corporations will see
								more liquidity, global transferability, fair pricing and greater transparency through
								blockchain technology!
								{/* <ADAXInput fluid placeholder="Email" name="email" onChange={this.handleEmailChange} /> */}
								<br />
								{!this.state.validEmail &&
								this.state.emailTouched && <ErrorLabel>Invalid email address</ErrorLabel>}
								<div style={{ float: 'right', minWidth: '120px', marginTop: '15px' }}>
									{/* <ADAXBtn
										block
										type="submit"
										bsstyle="center"
										color={'default'}
										disabled={!this.state.validEmail}
										onClick={this.handleSignUpClick}
									>
										Register
									</ADAXBtn> */}
								</div>
							</BannerLeftInner>
						</BannerLeftContainer>
					</Grid.Column>
					<Grid.Column width={11}>
						<img alt={'ADAX'} src={TRADINGVIEWIMG} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default withRouter(Banner);
