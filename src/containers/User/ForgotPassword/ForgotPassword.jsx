import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { Input, Dimmer, Loader, Modal } from 'semantic-ui-react'
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast} from "react-toastify";
import * as yup from 'yup'
import { Formik } from 'formik';
import { propTypes, defaultProps } from './ForgotPassword.props'
import 'react-toastify/dist/ReactToastify.css';

import {
    User,
    UserContainer,
    UserTab,
    UserLogo,
    UserForm
} from './../../../components/User'
import Logo from './../../../assets/stc/logo.svg';
import sendEmail from './../../../assets/send-email.png';

import { HBForm, HBFormGroup, HBFormNote, ForgotPassword, HBFormCaptcha, PwShow, TermsLabel, ErrorMessage } from './../../../components/HBForm'
import { HBButton,HBLink } from './../../../components/HBButton'
// import { HideElement } from './../../../components/Animation'

// import HBLoader from './../../../assets/loader.gif'

class ForgotPasswordComponent extends Component {

    static propTypes = propTypes
    static defaultProps = defaultProps
    
    constructor (props) {
        super(props)
        this.state = {
            show_error_msg: false,
            showPassword: true,
        }
    }


    handleShowPassword() {
        this.setState({ showPassword: !this.state.showPassword })
    };

    goToLogin() {
        window.location = '/signin'
    }

    render() {
        const { ResetPassword, forgotPassword } = this.props
        const self = this

		let open = false

        if (ResetPassword.Response.Code === 1) {
			open = true
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
                        <Link to="/"><img src={Logo} alt="Logo" /></Link>
                    </UserLogo>
                    { open
						?<UserForm >
							<img src={sendEmail} alt="send email" style={{ display: 'block', margin: '0 auto' }} />
							<TermsLabel style={{ marginTop: '30px', textAlign: 'center'}}>{'Check your email'}</TermsLabel>
							<HBFormNote style={{ textAlign: 'center'}}>We have sent you a password reset link to change your password.</HBFormNote>
							<div className="text-center">
								<HBButton  bsstyle="center" default="default" style={{ width: '230px' }} onClick={() => { this.goToLogin() }}>{`Log in`}</HBButton>
							</div>
						</UserForm>

						:<UserForm>
                            <h2 style={{color: '#FFFFFF', fontSize: '34px', letterSpacing: '0.71px', marginBottom: '30px'}}>Forgot Password</h2>
                            {this.state.show_error_msg ? <div style={{ color: 'red' }}>{this.state.ErrorMessage}</div>: null}
                            <div>
                                <Formik
                                    initialValues={{ email: ``, recaptcha: ``}}
                                    onSubmit={(values, actions) => {
                                        // setTimeout(() => {
                                            actions.setSubmitting(false);

                                            // errorcode = 104
                                            // errorcode = 0
                                            // errorcode = undefined

                                            forgotPassword({ UserName: values.email })
                                            // actions.resetForm()
                                        // });
                                    }}
                                    validationSchema={() => {
                                        return yup.object().shape({
                                            email: yup.string()
                                                .email()
                                                .min(3)
                                                .max(50)
                                                .required('Email is required.'),
                                            recaptcha: yup.string()
                                                .required('Recaptcha is required.'),
                                        })
                                    }}
                                >
                                    {props => {
                                        const {
                                            values,
                                            touched,
                                            errors,
                                            isSubmitting,
                                            handleChange,
                                            handleBlur,
                                            handleSubmit,
                                            setFieldValue
                                        } = props
                                        return (

                                            <form onSubmit={handleSubmit}>
                                                <HBForm>
                                                    <HBFormNote>Enter your email to request a password reset link.</HBFormNote>
                                                    <HBFormGroup>
                                                        <label>Email</label>
                                                        <Input
                                                            id="email"
                                                            placeholder="Enter your email"
                                                            value={values.email}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={
                                                                errors.email && touched.email ? 'text-input error' : 'text-input'
                                                            }
                                                        />
                                                        {errors.email &&
                                                            touched.email &&
                                                            <p style={{ display: 'block', marginTop: '5px', marginBottom: '0', fontSize: '12px', color: '#a94442' }}>
                                                                {errors.email}
                                                            </p>}
                                                        {ResetPassword.Response.Code !== 0 &&
                                                            touched.email &&
                                                            <p style={{ display: 'block', marginTop: '5px', marginBottom: '0', fontSize: '16px', color: ResetPassword.Response.Message === `Email does not exists` ? '#a94442' : '#4CAF50' }}>
                                                                {ResetPassword.Response.Message}
                                                            </p>
                                                        }
                                                    </HBFormGroup>
                                                    <HBFormCaptcha>
                                                        <span>
                                                            <ReCAPTCHA
                                                                sitekey="6Lfq0EwUAAAAAIFrQo_iVdlpa7OSTOGtW23c_Mw1"
                                                                onChange={(res) => {
                                                                    setFieldValue(`recaptcha`, res)
                                                                    self.setState({ recaptcha: res })
                                                                }}
                                                                onExpired={() => {
                                                                    setFieldValue(`recaptcha`, ``)
                                                                    self.setState({ recaptcha: `` })
                                                                }}
                                                            />
                                                        </span>

                                                        <span>
                                                            <HBButton type="submit" disabled={isSubmitting} bsstyle="center" default="default">{`Submit`}</HBButton>
                                                        </span>
                                                    </HBFormCaptcha>
                                                    {errors.recaptcha &&
                                                        touched.recaptcha &&
                                                        <p style={{ display: 'block', marginTop: '5px', marginBottom: '0', fontSize: '12px', color: '#a94442' }}>
                                                            {errors.recaptcha}
                                                        </p>}
                                                </HBForm>
                                            </form>
                                        );
                                    }}
                                </Formik>
                            </div>
                    </UserForm>
                    }
                </UserContainer>

				{/* <Modal size={`mini`} open={open}>
                    <Modal.Content style={{
                        fontSize: '18px',
                        fontFamily: "Basis Grotesque Light Pro",
                        textAlign: 'center',
                        padding: '30px'}}>
                        <p style={{color: '#000'}}>We have sent you a password reset link to change your password</p>
                        <HBButton size={`medium`} bsstyle="center" default="default" onClick={this.goToLogin}>{`Okay`}</HBButton>
                    </Modal.Content>
                </Modal> */}
            </User>

        )
    }
}

export default ForgotPasswordComponent;