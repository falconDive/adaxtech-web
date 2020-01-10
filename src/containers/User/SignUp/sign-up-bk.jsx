import React, { Component } from 'react';
// import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom';
import { Input } from 'semantic-ui-react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Checkbox } from 'semantic-ui-react';
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
	CheckEmailMsg
} from './../../../components/HBForm';
import { HBButton } from './../../../components/HBButton';

import { User, UserContainer, UserTab, UserLogo, UserForm } from './../../../components/User';
import Logo from './../../../assets/logo.svg';
import arrowLeft from './../../../assets/arrow-left.svg';
import sendEmail from './../../../assets/send-email.png';

// import { hideSignInSignUpOptions } from './../../actions/helpers-actions'

class SignUpComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			step1: true,
			step2: false,
			isRegiterSuccess: false,
			emailValidation: false,
			passwordValidation: false,
			confirmValidation: false,
			showPassword: true,
			showConfirmPassword: true,
			emailExistValidation: false,
			password: '',
			confirmPassword: '',
			checked1: false,
			checked2: false,
			checked3: false,
			checked4: false,
			checked5: false,
			checkedTC: false,
			ResCaptcha: false,
			reCaptchaError: false,
			emailFormatValid: false,
			email: ''
		};
		this.handleChecked = this.handleChecked.bind(this); // set this, because you need get methods from CheckBox

		this.handleCheckbox1Change = this.handleCheckbox1Change.bind(this);
		this.handleCheckbox2Change = this.handleCheckbox2Change.bind(this);
		this.handleCheckbox3Change = this.handleCheckbox3Change.bind(this);
		this.handleCheckbox4Change = this.handleCheckbox4Change.bind(this);
		this.handleCheckbox5Change = this.handleCheckbox5Change.bind(this);
	}

	componentDidMount() {
		this.setState({ email: localStorage.getItem('emailSignUp') });
		localStorage.removeItem('emailSignUp');
	}

	handleClickContinue = (e) => {
		e.preventDefault();
		if (this.state.email) {
			this.setState({ emailValidation: false });
			const emailValid = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
			if (!emailValid) {
				this.setState({ emailFormatValid: true }, function() {});
			} else {
				this.setState({ emailFormatValid: false }, function() {
					if (
						this.state.email &&
						this.state.password &&
						this.state.confirmPassword &&
						this.state.checkedTC &&
						this.state.ResCaptcha &&
						!this.state.emailFormatValid
					) {
						// if(this.state.email && this.state.emailFormatValid) {
						console.log(this.state.emailFormatValid, 'dfsdfdsf');
						// if (!this.state.count || !this.state.special || !this.state.digit || !this.state.upper || !this.state.lower) {
						// 	this.setState({ passwordRequirement: true });
						// } else {
						// 	this.setState({ passwordRequirement: false });
						// 	HBWSAPI.onSend(`RegisterNewUser`, {
						// 		userInfo: {
						// 			UserName: this.state.email,
						// 			Email: this.state.email,
						// 			PasswordHash: this.state.password
						// 		},
						// 		"OperatorId": 1,
						// 		"UserConfig": []
						// 	}, (res) => {
						// 		if (res.result === false) {
						// 			this.setState({ 'emailExistValidation': true });
						// 			setTimeout(
						// 				function () {
						// 					this.setState({ 'emailExistValidation': false });
						// 				}
						// 					.bind(this),
						// 				5000
						// 			);
						// 			// localStorage.setItem('SessionToken', res.SessionToken)
						// 		} else {
						// 			this.setState({ 'emailExistValidation': false });
						// 			this.setState({ 'Authenticated': true });
						// 			setTimeout(
						// 				function () {
						// 					this.setState({ 'fadeIn': true });
						// 				}
						// 					.bind(this),
						// 				200
						// 			);

						// 			this.setState({ step1: false })
						// 			this.setState({ step2: false })
						// 			this.setState({ isRegiterSuccess: true })
						// 			this.props.hideSignInSignUpOptions()
						// 		}
						// 	})
						// }
					} else {
					}
				});
			}
		} else {
			this.setState({ emailValidation: true });
		}

		if (!this.state.password) {
			this.setState({ passwordValidation: true });
		} else {
			this.setState({ passwordValidation: false });
		}
		if (!this.state.confirmPassword) {
			this.setState({ confirmValidation: true });
		} else {
			this.setState({ confirmValidation: false });
		}
		if (!this.state.count || !this.state.special || !this.state.digit || !this.state.upper || !this.state.lower) {
			this.setState({ passwordRequirement: true });
		} else {
			this.setState({ passwordRequirement: false });
		}
		if (this.state.password && this.state.confirmPassword) {
			if (this.state.password !== this.state.confirmPassword) {
				this.setState({ confirmPassValidation: true });
				setTimeout(
					function() {
						this.setState({ confirmPassValidation: false });
					}.bind(this),
					5000
				);
			} else {
				this.setState({ confirmPassValidation: false });
			}
		}

		if (!this.state.ResCaptcha) {
			console.log('reCaptchaError');
			this.setState({ ResCaptcha: false });
			this.setState({ reCaptchaError: true });
		} else {
			console.log('ResCaptcha');
			this.setState({ ResCaptcha: true });
			this.setState({ reCaptchaError: false });
		}

		console.log(this.state.emailFormatValid, 'emailFormatValid');

		// this.setState({ step1: false })
		// this.setState({ step2: true })
	};

	handlePassChange = (prop) => (event) => {
		// const regExPw = new RegExp('^(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).*$');
		const regExCharCount = new RegExp('^(?=.{8,})');
		const regExSpecialChar = new RegExp('\\W+');
		const regExDigitChar = new RegExp('\\d+');
		const regExUpperChar = new RegExp('[A-Z]{1,}');
		const regExlowerChar = new RegExp('[a-z]{1,}');
		if (regExCharCount.test(event.target.value)) {
			this.setState({ count: true });
		} else {
			this.setState({ count: false });
		}
		if (regExSpecialChar.test(event.target.value)) {
			this.setState({ special: true });
		} else {
			this.setState({ special: false });
		}
		if (regExDigitChar.test(event.target.value)) {
			this.setState({ digit: true });
		} else {
			this.setState({ digit: false });
		}
		if (regExUpperChar.test(event.target.value)) {
			this.setState({ upper: true });
		} else {
			this.setState({ upper: false });
		}
		if (regExlowerChar.test(event.target.value)) {
			this.setState({ lower: true });
		} else {
			this.setState({ lower: false });
		}
		this.setState({ [prop]: event.target.value });
	};

	handleEmailChange = (prop) => (event) => {
		this.setState({ [prop]: event.target.value });
	};

	handleConfirmPassChange = (prop) => (event) => {
		this.setState({ [prop]: event.target.value });
	};

	handleChecked(e) {
		e.preventDefault();
		this.setState({ step1: false });
		this.setState({ step2: true });
		// this.props.hideSignInSignUpOptions()
		if (this.state.checked1 && this.state.checked2 && this.state.checked3) {
			this.setState({ checkedTC: true });
			console.log('yes');
		} else {
			console.log('no');
		}
		console.log(e.target.checked, 'this.state.checkedTC');
	}

	handleCheckbox1Change(evt) {
		this.setState({ checked1: !this.state.checked1 });
	}
	handleCheckbox2Change(evt) {
		this.setState({ checked2: !this.state.checked2 });
	}
	handleCheckbox3Change(evt) {
		this.setState({ checked3: !this.state.checked3 });
	}
	handleCheckbox4Change(evt) {
		this.setState({ checked4: !this.state.checked4 });
	}
	handleCheckbox5Change(evt) {
		this.setState({ checked5: !this.state.checked5 });
	}

	backTab = () => {
		this.setState({ step1: true });
		this.setState({ step2: false });
	};

	handleTermsContinue() {
		// this.props.hideSignInSignUpOptions()
		if (this.state.checked1 && this.state.checked2 && this.state.checked3) {
			this.setState({ checkedTC: true });
			this.setState({ step1: true });
			this.setState({ step2: false });
		} else {
			this.setState({ checkedTC: false });
			this.setState({ step1: true });
			this.setState({ step2: false });
		}
	}

	handleShowPassword() {
		this.setState({ showPassword: !this.state.showPassword });
	}

	handleShowConfirmPassword() {
		this.setState({ showConfirmPassword: !this.state.showConfirmPassword });
	}

	render() {
		const { step1, step2, isRegiterSuccess, showPassword, showConfirmPassword } = this.state;
		const _self = this;
		const onChange = function(response) {
			if (response.length) {
				_self.setState({ ResCaptcha: true });
				_self.setState({ captcha: true });
				_self.setState({ reCaptchaError: false });
			} else {
				_self.setState({ ResCaptcha: false });
				_self.setState({ captcha: false });
				_self.setState({ reCaptchaError: true });
			}
		};
		const onExpired = function(response) {
			_self.setState({ ResCaptcha: false });
			_self.setState({ reCaptchaError: true });
		};

		return (
			<User>
				<UserContainer>
					<UserLogo>
						<Link to="/">
							<img src={Logo} alt="Logo" />
						</Link>
					</UserLogo>
					<UserForm>
						<UserTab>
							<NavLink to={`signin`}>Log In</NavLink>
							<NavLink to={`/signup`}>Sign Up</NavLink>
						</UserTab>
						<div>
							<HBForm>
								<div style={{ display: step1 ? 'block' : 'none' }}>
									<div
										style={{
											display: this.state.emailExistValidation ? 'block' : 'none',
											color: 'red'
										}}
									>{`Email address already exist.`}</div>
									<form>
										<HBFormGroup>
											<label>{`Email`}</label>
											<Input
												className={this.state.emailValidation ? 'input-error' : ''}
												type="email"
												value={this.state.email ? this.state.email : ''}
												placeholder=""
												onChange={this.handleEmailChange('email')}
											/>
											<span
												style={{
													display:
														this.state.emailValidation || this.state.emailFormatValid
															? 'block'
															: 'none',
													marginTop: '5px',
													marginBottom: '0',
													fontSize: '12px',
													color: '#a94442'
												}}
											>
												{this.state.emailValidation ? (
													`Email is required.`
												) : this.state.emailFormatValid ? (
													"Please include an '@' in the email address."
												) : (
													''
												)}
											</span>
										</HBFormGroup>

										<HBFormGroup>
											<label>{'Password'}</label>
											<Input
												className={
													this.state.passwordValidation || this.state.passwordRequirement ? (
														'input-error'
													) : (
														''
													)
												}
												autoFocus={this.state.email ? true : false}
												type={this.state.showPassword ? 'password' : 'text'}
												value={this.state.password}
												onChange={this.handlePassChange('password')}
											/>
											<PwShow
												onClick={() => {
													this.handleShowPassword();
												}}
											>
												{showPassword ? 'SHOW' : 'HIDE'}
											</PwShow>
											<span
												style={{
													display:
														this.state.passwordValidation || this.state.passwordRequirement
															? 'block'
															: 'none',
													marginTop: '5px',
													marginBottom: '0',
													fontSize: '12px',
													color: '#a94442'
												}}
											>
												{this.state.passwordValidation ? (
													'Password is required.'
												) : (
													'Password must contain at least 8 characters, one number, one special character and at least one capital letter.'
												)}
											</span>
										</HBFormGroup>

										<HBFormGroup>
											<label>{'Confirm Password'}</label>
											<Input
												className={
													this.state.confirmValidation || this.state.confirmPassValidation ? (
														'input-error'
													) : (
														''
													)
												}
												type={this.state.showConfirmPassword ? 'password' : 'text'}
												value={this.state.confirmPassword}
												onChange={this.handleConfirmPassChange('confirmPassword')}
											/>
											<PwShow
												onClick={() => {
													this.handleShowConfirmPassword();
												}}
											>
												{showConfirmPassword ? 'SHOW' : 'HIDE'}
											</PwShow>
											<span
												style={{
													display: this.state.confirmValidation ? 'block' : 'none',
													marginTop: '5px',
													marginBottom: '0',
													fontSize: '12px',
													color: '#a94442'
												}}
											>
												{'Confirm Password is required.'}
											</span>
											<span
												style={{
													display: this.state.confirmPassValidation ? 'block' : 'none',
													marginTop: '5px',
													marginBottom: '0',
													fontSize: '12px',
													color: '#a94442'
												}}
											>
												{'Password and confirmation password do not match.'}
											</span>
										</HBFormGroup>

										<PwChecker>
											<PwCheckerList>
												<PwCheckerListItem
													style={{
														color:
															this.state.lower && this.state.upper ? '#01FDFE' : '#FFFFFF'
													}}
												>
													<span
														style={{
															backgroundColor: this.state.lower ? '#01FDFE' : '#878787'
														}}
													/>
													{'One uppercase & lowercase character'}
												</PwCheckerListItem>
												<PwCheckerListItem
													style={{ color: this.state.digit ? '#01FDFE' : '#FFFFFF' }}
												>
													<span
														style={{
															backgroundColor: this.state.digit ? '#01FDFE' : '#878787'
														}}
													/>
													{'One number'}
												</PwCheckerListItem>
											</PwCheckerList>
											<PwCheckerList>
												<PwCheckerListItem
													style={{ color: this.state.special ? '#01FDFE' : '#FFFFFF' }}
												>
													<span
														style={{
															backgroundColor: this.state.special ? '#01FDFE' : '#878787'
														}}
													/>
													{'One special character'}
												</PwCheckerListItem>
												<PwCheckerListItem
													style={{ color: this.state.count ? '#01FDFE' : '#FFFFFF' }}
												>
													<span
														style={{
															backgroundColor: this.state.count ? '#01FDFE' : '#878787'
														}}
													/>
													{'8 characters minimum'}
												</PwCheckerListItem>
											</PwCheckerList>
										</PwChecker>

										<Agreement>
											<Checkbox
												label={'I agree to the Terms and Conditions.'}
												onChange={this.handleChecked}
												checked={this.state.checkedTC}
											/>
										</Agreement>

										<HBFormCaptcha>
											<span>
												<ReCAPTCHA
													sitekey="6Lfq0EwUAAAAAIFrQo_iVdlpa7OSTOGtW23c_Mw1"
													onChange={onChange}
													onExpired={onExpired}
												/>
											</span>
											<span>
												<HBButton
													bsstyle="center"
													default="default"
													onClick={this.handleClickContinue.bind(this)}
												>
													{'Continue'}
												</HBButton>
											</span>
										</HBFormCaptcha>
										<p
											style={{
												display: this.state.reCaptchaError ? 'block' : 'none',
												marginTop: '5px',
												marginBottom: '0',
												fontSize: '12px',
												color: '#a94442'
											}}
										>
											{'Please verify that you are not a robot'}
										</p>
									</form>
								</div>

								<div style={{ display: step2 ? 'block' : 'none' }}>
									<img
										src={arrowLeft}
										alt="arrow"
										onClick={this.handleTermsContinue.bind(this)}
										style={{ marginBottom: '20px', cursor: 'pointer' }}
									/>
									<TermsLabel>{'Terms & Conditions'}</TermsLabel>
									<Agreement>
										<Checkbox
											checked={this.state.checked1}
											onChange={this.handleCheckbox1Change}
											label={
												<label>
													{'I have read and agree to the'}{' '}
													<Link
														to="/terms-and-conditions"
														className="a-theme"
														target="_blank"
													>
														{'Terms and Conditions.'}
													</Link>
												</label>
											}
										/>
									</Agreement>
									<Agreement>
										<Checkbox
											checked={this.state.checked2}
											onChange={this.handleCheckbox2Change}
											label={
												<label>
													{
														'I have read and agree to the processing of my personal data in accordance with the'
													}{' '}
													<Link to="/privacy-policy" className="a-theme" target="_blank">
														{' Privacy Policy'}
													</Link>{' '}
													{'of Adaxtech.'}
												</label>
											}
										/>
									</Agreement>
									<Agreement>
										<Checkbox
											checked={this.state.checked3}
											onChange={this.handleCheckbox3Change}
											label={
												<label>
													{'I have read and agree to the'}{' '}
													<Link to="/cookie-policy" className="a-theme" target="_blank">
														{'Cookies Policy'}
													</Link>
													{' of Adaxtech.'}
												</label>
											}
										/>
									</Agreement>
									<Agreement>
										<Checkbox
											checked={this.state.checked4}
											onChange={this.handleCheckbox4Change}
											label={
												<label>
													{
														'I wish to receive marketing and promotional communications from Adaxtech about similar products and services to the those provided by Adaxtech.'
													}{' '}
													<i>({'Optional'})</i>
												</label>
											}
										/>
									</Agreement>
									<Agreement>
										<Checkbox
											checked={this.state.checked5}
											onChange={this.handleCheckbox5Change}
											label={
												<label>
													{
														'I wish to receive marketing and promotional communications from  Adaxtech about products and services available from third parties.'
													}{' '}
													<i>({'Optional'})</i>
												</label>
											}
										/>
									</Agreement>
									<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
										<HBButton
											bsstyle="center"
											default="default"
											onClick={this.handleTermsContinue.bind(this)}
											style={{ width: '230px' }}
										>
											{'Continue'}
										</HBButton>
									</div>
								</div>

								<div style={{ display: isRegiterSuccess ? 'block' : 'none' }}>
									<img
										src={sendEmail}
										alt="send email"
										style={{ display: 'block', margin: '0 auto' }}
									/>
									<CheckEmail>{'Check your email'}</CheckEmail>
									<CheckEmailMsg>
										{
											'We have sent you a verification email. Click the verification link on your email to activate your account.'
										}
									</CheckEmailMsg>
									<a
										href="/user/sign-in"
										style={{ width: '230px', margin: '0 auto', display: 'block' }}
									>
										<HBButton bsstyle="center" default="default">
											{'Login'}
										</HBButton>
									</a>
								</div>
							</HBForm>
						</div>
					</UserForm>
				</UserContainer>
			</User>
		);
	}
}

export default SignUpComponent;
