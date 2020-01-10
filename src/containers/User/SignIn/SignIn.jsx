import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Dimmer } from 'semantic-ui-react';
import ReCAPTCHA from 'react-google-recaptcha';
// import { ToastContainer } from 'react-toastify';
import * as yup from 'yup';
import { Formik } from 'formik';
import { propTypes, defaultProps } from './Signin.props';
import 'react-toastify/dist/ReactToastify.css';

import { User, UserContainer, UserTab, UserLogo, UserForm } from './../../../components/User';
import Logo from './../../../assets/stc/logo.svg';
import LOADER from './../../../assets/stc/loader.gif';

import { HBForm, HBFormGroup, HBFormNote, ForgotPassword, HBFormCaptcha, PwShow } from './../../../components/HBForm';
import { HBButton } from './../../../components/HBButton';
// import { HideElement } from './../../../components/Animation'

// import HBLoader from './../../../assets/loader.gif'

class SignInComponent extends Component {
	static propTypes = propTypes;
	static defaultProps = defaultProps;

	constructor(props) {
		super(props);
		this.state = {
			show_error_msg: false,
			showPassword: true,
			loading: false
		};
	}

	async componentDidMount() {
		// const schema = yup.object().shape({
		//     email: yup
		//         .string()
		//         .min(3)
		//         .max(50)
		//         .email(),
		//     password: yup
		//         .string()
		//         .min(3)
		//         .max(50)
		// })
		// try {
		//     const validate = await schema.validate({ email: `fdsfacom`, password: `aa` }, { abortEarly: false })
		//     // console.log(validate, 'validate')
		// } catch (error) {
		//     // console.log(error, 'error')
		// }

		if (window.localStorage.getItem(`SessionToken`)) {
			this.props.autoAuthenticateUser({ SessionToken: window.localStorage.getItem(`SessionToken`) });
		}
	}

	handleShowPassword() {
		this.setState({ showPassword: !this.state.showPassword });
	}

	render() {
		const { authenticateUser, authenticate2FAUser, UserData } = this.props;
		const { loading } = this.state;
		const self = this;

		if (UserData.Authenticate.Data.Authenticated && UserData.Authenticate.Data.SessionToken) {
			return (window.location = '/account/trade');
		}
		return (
			<User>
				{/*loading ? (
					<Dimmer active>
						<img alt={''} src={LOADER} width="185" />
					</Dimmer>
				) : (
					''
				)*/}
				<UserContainer>
					<UserLogo>
						<Link to="/">
							<img src={Logo} alt="Logo" />
						</Link>
					</UserLogo>
					<UserForm>
						<UserTab>
							<Link to={`signin`} className={`active`}>
								Log In
							</Link>
							<Link to={`/signup`}>Sign Up</Link>
						</UserTab>
						{/* {this.state.show_error_msg ? <div style={{ color: 'red' }}>{this.state.ErrorMessage}</div>: null} */}
						<div>
							<Formik
								initialValues={{ email: ``, password: ``, recaptcha: ``, twoFACode: `` }}
								onSubmit={(values, actions) => {
									self.setState({ loading: true, show_error_msg: false });
									setTimeout(() => {
										actions.setSubmitting(false);
										// actions.setFieldError('email', '');
										// actions.setErrors({ email: { } });
										// actions.setErrors({ email: 'Error: aaa' })

										if (UserData.Authenticate.Data.Requires2FA) {
											authenticate2FAUser({ Code: values.twoFACode });
											self.setState({ loading: !self.state.loading });
										} else {
											// self.setState({ loading: !self.state.loading, show_error_msg: false });
											{/*setTimeout(function() {*/}
											authenticateUser({ UserName: values.email, Password: values.password });
											{/*}, 2500);*/}
										}
										if (UserData.Authenticate.Response.Code === -1) {
											console.log(UserData.Authenticate.Response.Code);
											this.setState({
												ErrorMessage: UserData.Authenticate.Response.Message,
												show_error_msg: true
											});
											self.setState({ loading: !self.state.loading });
										} else {
											// self.setState({ loading: !self.state.loading });
											setTimeout(function() {
												self.setState({ loading: false, show_error_msg: false });
											}, 2500);
										}
									}, 500);
								}}
								validationSchema={() => {
									if (UserData.Authenticate.Data.Requires2FA) {
										return yup.object().shape({
											email: yup.string().email().min(3).max(50).required('Email is required.'),
											password: yup.string().min(6).max(50).required('Password is required.'),
											twoFACode: yup
												.string()
												.min(6)
												.required('Two Factor Authentication is required.'),
											recaptcha: yup.string().required('Recaptcha is required.')
										});
									}
									return yup.object().shape({
										email: yup.string().email().min(3).max(50).required('Email is required.'),
										password: yup.string().min(6).max(50).required('Password is required.'),
										recaptcha: yup.string().required('Recaptcha is required.')
									});
								}}
							>
								{(props) => {
									const {
										values,
										touched,
										errors,
										isSubmitting,
										handleChange,
										handleBlur,
										handleSubmit,
										setFieldValue
									} = props;
									return (
										<form onSubmit={handleSubmit}>
											<HBForm>
												<HBFormNote>
													If you have an existing account in www.basetrade.io you can use it
													to log in
												</HBFormNote>

												{UserData.Authenticate.Response.Code < 0 &&
												touched.email && (
													<p
														style={{
															display: 'block',
															marginBottom: '10px',
															fontSize: '16px',
															color: '#a94442'
														}}
													>
														{UserData.Authenticate.Response.Message}
													</p>
												)}

												<HBFormGroup>
													<label>Email</label>
													<Input
														id="email"
														placeholder="Enter your email"
														value={values.email}
														onChange={handleChange}
														onBlur={handleBlur}
														className={
															errors.email && touched.email ? (
																'text-input error'
															) : (
																'text-input'
															)
														}
													/>
													{errors.email &&
													touched.email && (
														<p
															style={{
																display: 'block',
																marginTop: '5px',
																marginBottom: '0',
																fontSize: '12px',
																color: '#a94442'
															}}
														>
															{errors.email}
														</p>
													)}
												</HBFormGroup>
												<HBFormGroup>
													<label>Password</label>
													<Input
														id="password"
														placeholder="Enter your password"
														value={values.password}
														onChange={handleChange}
														onBlur={handleBlur}
														type={this.state.showPassword ? 'password' : 'text'}
														className={
															errors.password && touched.password ? (
																'text-input error'
															) : (
																'text-input'
															)
														}
													/>
													<PwShow
														onClick={() => {
															this.handleShowPassword();
														}}
													>
														{this.state.showPassword ? `SHOW` : `HIDE`}
													</PwShow>
													{errors.password &&
													touched.password && (
														<p
															style={{
																display: 'block',
																marginTop: '5px',
																marginBottom: '0',
																fontSize: '12px',
																color: '#a94442'
															}}
														>
															{errors.password}
														</p>
													)}
												</HBFormGroup>
												{UserData.Authenticate.Data.Requires2FA && (
													<HBFormGroup>
														<label>Two FA Code</label>
														<Input
															id="twoFACode"
															placeholder="Enter your 2FA code"
															value={values.twoFACode}
															onChange={handleChange}
															onBlur={handleBlur}
															className={
																errors.twoFACode && touched.twoFACode ? (
																	'text-input error'
																) : (
																	'text-input'
																)
															}
														/>
														{errors.twoFACode &&
														touched.twoFACode && (
															<p
																style={{
																	display: 'block',
																	marginTop: '5px',
																	marginBottom: '0',
																	fontSize: '12px',
																	color: '#a94442'
																}}
															>
																{errors.twoFACode}
															</p>
														)}
													</HBFormGroup>
												)}

												<ForgotPassword>
													<Link
														to="/forgot-password"
														style={{ color: '#74F9FC' }}
													>{`Forgot your Password?`}</Link>
												</ForgotPassword>
												{errors.recaptcha &&
												touched.recaptcha && (
													<p
														style={{
															display: 'block',
															marginTop: '5px',
															marginBottom: '0',
															fontSize: '12px',
															color: '#a94442'
														}}
													>
														{errors.recaptcha}
													</p>
												)}
												<HBFormCaptcha>
													<span>
														<ReCAPTCHA
															sitekey="6Lfq0EwUAAAAAIFrQo_iVdlpa7OSTOGtW23c_Mw1"
															onChange={(res) => {
																setFieldValue(`recaptcha`, res);
																self.setState({ recaptcha: res });
															}}
															onExpired={() => {
																setFieldValue(`recaptcha`, ``);
																self.setState({ recaptcha: `` });
															}}
														/>
													</span>

													<span>
														<HBButton
															type="submit"
															disabled={isSubmitting}
															bsstyle="center"
															default="default"
														>{`Log in`}</HBButton>
													</span>
												</HBFormCaptcha>
											</HBForm>
										</form>
									);
								}}
							</Formik>
						</div>
					</UserForm>
				</UserContainer>
			</User>
		);
	}
}

export default SignInComponent;
