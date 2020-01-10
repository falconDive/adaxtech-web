import React, { Component } from 'react';
// import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom';
import { Input, Modal } from 'semantic-ui-react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Checkbox } from 'semantic-ui-react';
import * as yup from 'yup';
import { Formik } from 'formik';
// import HBWSAPI from './../../services/WebSocketService'

import {
	HBForm,
	HBFormGroup,
	HBFormCaptcha,
	PwChecker,
	PwShow,
	PwCheckerList,
	PwCheckerListItem,
	Agreement,
	TermsLabel,
	CheckEmail,
	CheckEmailMsg,
	HBFormNote
} from './../../../components/HBForm';
import { HBButton, HBLink } from './../../../components/HBButton';

import { User, UserContainer, UserTab, UserLogo, UserForm } from './../../../components/User';
import Logo from './../../../assets/stc/logo.svg';
import arrowLeft from './../../../assets/arrow-left.svg';
import sendEmail from './../../../assets/send-email.png';

// import { hideSignInSignUpOptions } from './../../actions/helpers-actions'

class SignUpComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showConfirmPassword: true,
			showPassword: true
		};
	}

	handleShowConfirmPassword() {
		this.setState({ showConfirmPassword: !this.state.showConfirmPassword });
	}

	handleShowPassword() {
		this.setState({ showPassword: !this.state.showPassword });
	}

	goToLogin() {
		window.location = '/signin';
	}

	render() {
		const { RegisterNew } = this.props;
		// const { open } = this.state
		let open = false;

		if (RegisterNew.Response.Code === 1) {
			// alert('Your account has been successfully created, please check your email for confirmation.')
			// window.location = "/signin"
			// this.setState({ open: true })
			open = true;
		}
		return (
			<User>
				<UserContainer>
					<UserLogo>
						<Link to="/">
							<img src={Logo} alt="Logo" />
						</Link>
					</UserLogo>
					{open ? (
						<UserForm>
							<img src={sendEmail} alt="send email" style={{ display: 'block', margin: '0 auto' }} />
							<TermsLabel style={{ marginTop: '30px', textAlign: 'center' }}>
								{'Check your email'}
							</TermsLabel>
							<HBFormNote style={{ textAlign: 'center' }}>
								We have sent you a verification email. Click the verification link on your email to
								activate your account.
							</HBFormNote>
							<div className="text-center">
								<HBButton
									bsstyle="center"
									default="default"
									style={{ width: '230px' }}
									onClick={() => {
										this.goToLogin();
									}}
								>{`Log in`}</HBButton>
							</div>
						</UserForm>
					) : (
						<UserForm>
							<UserTab>
								<NavLink to={`signin`}>Log In</NavLink>
								<NavLink to={`/signup`}>Sign Up</NavLink>
							</UserTab>

							<div>
								<Formik
									// ref={node => (this.formikI = node)}
									initialValues={{
										email: `${localStorage.getItem('register_email') || ''}`,
										password: ``,
										passwordConfirm: ``,
										recaptcha: ``,
										CheckboxTCList: false,
										CheckboxTC: false,
										Checkbox1: false,
										Checkbox2: false,
										Checkbox3: false,
										Checkbox4: false,
										Checkbox5: false
									}}
									onSubmit={(values, actions) => {
										setTimeout(() => {
											actions.setSubmitting(false);
											this.props.signUpUser({
												UserName: values.email,
												Email: values.email,
												PasswordHash: values.password
											});

											console.log(values, actions, 'values, actions');
										}, 500);
									}}
									validationSchema={() => {
										return yup.object().shape({
											email: yup.string().email().min(3).max(50).required('Email is required.'),
											password: yup
												.string()
												.min(8, 'at least 8 chars')
												.matches(/[a-zA-Z]+/, 'One uppercase & lowercase character')
												.matches(/[!@#$%^&*(),.?":{}|<>`]/, 'at least one special character')
												.matches(/[0-9]/, 'at least one number')
												.required('Password is required.'),
											passwordConfirm: yup
												.string()
												.oneOf([ yup.ref('password') ], 'password does not match')
												.required('Confirm Password is required.'),
											recaptcha: yup.string().required('Recaptcha is required.'),
											CheckboxTC: yup
												.boolean()
												.oneOf([ true ], 'Must Accept Terms and Conditions'),
											Checkbox1: yup.boolean().oneOf([ true ], 'Checkbox1'),
											Checkbox2: yup.boolean().oneOf([ true ], 'Checkbox2'),
											Checkbox3: yup.boolean().oneOf([ true ], 'Checkbox3'),
											Checkbox4: yup.boolean().oneOf([ false, true ], 'Checkbox4'),
											Checkbox5: yup.boolean().oneOf([ false, true ], 'Checkbox5')
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
												{/* <div style={{ color: '#ffffff' }}>{ JSON.stringify(errors) }</div>
												<div style={{ color: '#ffffff' }}>{ JSON.stringify(values.CheckboxTC) }</div> */}
												{RegisterNew.Response.Code !== 0 &&
												touched.email && (
													<p
														style={{
															display: 'block',
															marginTop: '5px',
															marginBottom: '0',
															fontSize: '16px',
															color: '#a94442'
														}}
													>
														{RegisterNew.Response.Message}
													</p>
												)}
												<HBForm>
													<div style={{ display: !values.CheckboxTCList ? 'block' : 'none' }}>
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
														<HBFormGroup>
															<label>Confirm Password</label>
															<Input
																id="passwordConfirm"
																placeholder="Enter your confirm password"
																value={values.passwordConfirm}
																onChange={handleChange}
																onBlur={handleBlur}
																type={
																	this.state.showConfirmPassword ? 'password' : 'text'
																}
																className={
																	errors.passwordConfirm &&
																	touched.passwordConfirm ? (
																		'text-input error'
																	) : (
																		'text-input'
																	)
																}
															/>
															<PwShow
																onClick={() => {
																	this.handleShowConfirmPassword();
																}}
															>
																{this.state.showConfirmPassword ? `SHOW` : `HIDE`}
															</PwShow>
															{errors.passwordConfirm &&
															touched.passwordConfirm && (
																<p
																	style={{
																		display: 'block',
																		marginTop: '5px',
																		marginBottom: '0',
																		fontSize: '12px',
																		color: '#a94442'
																	}}
																>
																	{errors.passwordConfirm}
																</p>
															)}
														</HBFormGroup>

														<Agreement>
															<Checkbox
																label={'I agree to the Terms and Conditions.'}
																onChange={() => {
																	setFieldValue(
																		`CheckboxTCList`,
																		!values.CheckboxTCList
																	);
																}}
																checked={values.CheckboxTC}
															/>
															{errors.CheckboxTC &&
															touched.CheckboxTC && (
																<p
																	style={{
																		display: 'block',
																		marginTop: '5px',
																		marginBottom: '0',
																		fontSize: '12px',
																		color: '#a94442'
																	}}
																>
																	{errors.CheckboxTC}
																</p>
															)}
														</Agreement>

														<HBFormCaptcha>
															<span>
																<ReCAPTCHA
																	sitekey="6Lfq0EwUAAAAAIFrQo_iVdlpa7OSTOGtW23c_Mw1"
																	onChange={(res) => {
																		setFieldValue(`recaptcha`, res);
																	}}
																	onExpired={() => {
																		setFieldValue(`recaptcha`, ``);
																	}}
																/>
															</span>

															<span>
																<HBButton
																	type="submit"
																	disabled={isSubmitting}
																	bsstyle="center"
																	default="default"
																>{`Sign Up`}</HBButton>{' '}
																*/}
																{/* <HBButton type="submit" disabled={isSubmitting} bsstyle="center" default="default">{`Sign Up`}</HBButton> */}
															</span>
														</HBFormCaptcha>
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
													</div>

													<div style={{ display: values.CheckboxTCList ? 'block' : 'none' }}>
														<img
															src={arrowLeft}
															alt="arrow"
															onClick={() => {
																setFieldValue(`CheckboxTCList`, !values.CheckboxTCList);
																setFieldValue(
																	`CheckboxTC`,
																	values.Checkbox1 &&
																	values.Checkbox2 &&
																	values.Checkbox3
																		? true
																		: false
																);
															}}
															style={{ marginBottom: '20px', cursor: 'pointer' }}
														/>
														<TermsLabel>{'Terms & Conditions'}</TermsLabel>
														<Agreement>
															<Checkbox
																onChange={() => {
																	setFieldValue(`Checkbox1`, !values.Checkbox1);
																}}
																checked={values.Checkbox1}
																label={
																	<label>
																		{'I have read and agree to the'}{' '}
																		<Link
																			to="/terms-and-conditions"
																			className="a-theme"
																			target="_blank"
																			style={{ color: '#FFB600' }}
																		>
																			{'Terms and Conditions.'}
																		</Link>
																	</label>
																}
															/>
														</Agreement>
														<Agreement>
															<Checkbox
																onChange={() => {
																	setFieldValue(`Checkbox2`, !values.Checkbox2);
																}}
																checked={values.Checkbox2}
																label={
																	<label>
																		{
																			'I have read and agree to the processing of my personal data in accordance with the'
																		}{' '}
																		<Link
																			to="/privacy-policy"
																			className="a-theme"
																			target="_blank"
																			style={{ color: '#FFB600' }}
																		>
																			{' Privacy Policy'}
																		</Link>{' '}
																		{'of ADAXTech.'}
																	</label>
																}
															/>
														</Agreement>
														<Agreement>
															<Checkbox
																onChange={() => {
																	setFieldValue(`Checkbox3`, !values.Checkbox3);
																}}
																checked={values.Checkbox3}
																label={
																	<label>
																		{'I have read and agree to the'}{' '}
																		<Link
																			to="/cookie-policy"
																			className="a-theme"
																			target="_blank"
																			style={{ color: '#FFB600' }}
																		>
																			{'Cookies Policy'}
																		</Link>
																		{' of ADAXTech.'}
																	</label>
																}
															/>
														</Agreement>
														<Agreement>
															<Checkbox
																onChange={() => {
																	setFieldValue(`Checkbox4`, !values.Checkbox4);
																}}
																checked={values.Checkbox4}
																label={
																	<label>
																		{
																			'I wish to receive marketing and promotional communications from ADAXTech about similar products and services to the those provided by ADAXTech.'
																		}{' '}
																		<i>({'Optional'})</i>
																	</label>
																}
															/>
														</Agreement>
														<Agreement>
															<Checkbox
																onChange={() => {
																	setFieldValue(`Checkbox5`, !values.Checkbox5);
																}}
																checked={values.Checkbox5}
																label={
																	<label>
																		{
																			'I wish to receive marketing and promotional communications from  ADAXTech about products and services available from third parties.'
																		}{' '}
																		<i>({'Optional'})</i>
																	</label>
																}
															/>
														</Agreement>
														<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
															<HBButton
																type={`button`}
																bsstyle="center"
																default="default"
																style={{ width: '230px' }}
																disabled={
																	values.Checkbox1 &&
																	values.Checkbox2 &&
																	values.Checkbox3 ? (
																		false
																	) : (
																		true
																	)
																}
																onClick={() => {
																	setFieldValue(
																		`CheckboxTCList`,
																		!values.CheckboxTCList
																	);
																	setFieldValue(`CheckboxTC`, true);
																}}
															>
																{'Continue'}
															</HBButton>
														</div>
													</div>
												</HBForm>
											</form>
										);
									}}
								</Formik>
							</div>
						</UserForm>
					)}
				</UserContainer>
				{/* <Modal size={`mini`} open={open}>
					<Modal.Content style={{
						fontSize: '18px',
						fontFamily: "Basis Grotesque Light Pro",
						textAlign: 'center',
						padding: '30px'}}>
						<p style={{color: '#000'}}>Your account has been successfully created, please check your email for confirmation.</p>
						<HBLink bsstyle="center" default="default" size="medium"><Link to={`/signin`}>Okay</Link></HBLink>
					</Modal.Content>
				</Modal> */}
			</User>
		);
	}
}

export default SignUpComponent;
