import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Input, Dimmer, Loader, Modal } from 'semantic-ui-react';
import ReCAPTCHA from 'react-google-recaptcha';
import { ToastContainer, toast } from 'react-toastify';
import * as yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';
import queryString from 'query-string';
import { propTypes, defaultProps } from './WithdrawConfirmation.props';
import 'react-toastify/dist/ReactToastify.css';
import { HBModal } from './../../components/HBModal';

import { User, UserContainer, UserTab, UserLogo, UserForm } from './../../components/User';
import Logo from './../../assets/stc/logo.svg';
import sendEmail from './../../assets/send-email.png';

import {
	HBForm,
	HBFormGroup,
	HBFormNote,
	ForgotPassword,
	HBFormCaptcha,
	PwShow,
	TermsLabel,
	ErrorMessage
} from './../../components/HBForm';
import { HBButton, HBLink } from './../../components/HBButton';
// import { HideElement } from './../../components/Animation'

// import HBLoader from './../../assets/loader.gif'

class ForgotPasswordComponent extends Component {
	static propTypes = propTypes;
	static defaultProps = defaultProps;

	constructor(props) {
		super(props);
		this.state = {
			show_error_msg: false,
			showResponse: false,
			responseMessage: '',
			showPassword: true,
			UserId: 0,
			d1: '',
			resetPass: '',
			verifycode: ''
		};
	}

	componentDidMount() {
		let params = queryString.parse(this.props.location.search);
		console.log(params);
		if (params) {
			try {
				const resetUrl = atob(params.d1);
				let data = {
					VerifyEmailCode: params.verifycode,
					UserId: +params.UserId
				};

				axios({
					url: resetUrl + 'confirmwithdraw',
					method: 'post',
					crossOrigin: true,
					data: JSON.stringify({ VerifyCode: params.verifycode, UserId: +params.UserId })
				})
					.then((resp) => {
						if (resp.data.result) {
							this.setState({
								showResponse: true,
								responseMessage: 'Withdrawal successfully confirmed'
							});
						} else {
							this.setState({
								showResponse: true,
								responseMessage: resp.data.errormsg
							});
						}
					})
					.catch((err) => {});
			} catch (error) {
				this.setState({
					showResponse: true,
					responseMessage: 'Error occured.'
				});
			}
		}
	}

	handleShowPassword() {
		this.setState({ showPassword: !this.state.showPassword });
	}

	goToLogin() {
		window.location = '/signin';
	}

	render() {
		const { ResetPassword } = this.props;
		const self = this;

		let open = false;

		if (ResetPassword.Response.Code === 1) {
			open = true;
		}
		return (
			<User>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnVisibilityChange
					draggable
					pauseOnHover
				/>
				<UserContainer>
					<UserLogo>
						<Link to="/">
							<img src={Logo} alt="Logo" />
						</Link>
					</UserLogo>
					{self.state.showResponse ? (
						<UserForm>
							<TermsLabel style={{ marginTop: '30px', textAlign: 'center' }}>
								{self.state.responseMessage}
							</TermsLabel>
							<div className="text-center">
								{/* <HBButton */}
									{/* bsstyle="center" */}
									{/* default="default" */}
									{/* style={{ width: '230px' }} */}
									{/* onClick={() => { */}
										{/* this.goToLogin(); */}
									{/* }} */}
								{/* >{`Log in`}</HBButton> */}
							</div>
						</UserForm>
					) : (
						<UserForm>
							<HBFormNote style={{ marginTop: '30px', textAlign: 'center' }}>
								Verifying your withdrawal...
							</HBFormNote>
						</UserForm>
					)}
				</UserContainer>
			</User>
		);
	}
}

export default ForgotPasswordComponent;
