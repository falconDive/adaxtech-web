import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { Input, Dimmer, Loader, Modal } from 'semantic-ui-react'
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast} from "react-toastify";
import * as yup from 'yup'
import { Formik } from 'formik';
import axios from 'axios';
import queryString from 'query-string';
import { propTypes, defaultProps } from './ResetPassword.props'
import 'react-toastify/dist/ReactToastify.css';
import { HBModal } from './../../../components/HBModal';

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
            showResponse: false,
            responseMessage: '',
            showPassword: true,
            UserId: 0,
            d1: "",
            resetPass: "",
            verifycode: "",
        }
    }

    componentDidMount() {

        let params = queryString.parse(this.props.location.search);
        if (params)  {
            this.setState({
                ...params
            })
        }
    }


    handleClickSuccess = () => {
        this.setState({ showResponse: false });
        setTimeout(function () {
            // window.location = '/adax/#/account/settings';
            window.location = '/signin';
        }, 1000);
    };
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
                    {self.state.showResponse
						?<UserForm >
							<TermsLabel style={{ marginTop: '30px', textAlign: 'center'}}></TermsLabel>
                            <HBFormNote style={{ textAlign: 'center' }}>{self.state.responseMessage}</HBFormNote>
							<div className="text-center">
								<HBButton  bsstyle="center" default="default" style={{ width: '230px' }} onClick={() => { this.goToLogin() }}>{`Log in`}</HBButton>
							</div>
						</UserForm>

						:<UserForm>
                            <h2 style={{color: '#FFFFFF', fontSize: '34px', letterSpacing: '0.71px', marginBottom: '30px'}}>Reset Password</h2>
                            {this.state.show_error_msg ? <div style={{ color: 'red' }}>{this.state.ErrorMessage}</div>: null}
                            <div>
                                <Formik
                                    initialValues={{ password: '', passwordConfirm: '', recaptcha: ''}}
                                    onSubmit={(values, actions) => {
                                        // setTimeout(() => {
                                            actions.setSubmitting(false);
                                        try {
                                            const resetUrl = atob(self.state.d1)

                                            let data = {
                                                PendingCode: self.state.verifycode,
                                                UserId: +self.state.UserId,
                                                Password: values.password
                                            };
                                            axios({
                                                method: 'POST',
                                                url: resetUrl + 'ResetPassword2',
                                                data: JSON.stringify(data)
                                            })
                                                .then((resp) => {
                                                    if (resp.data.result) {
                                                        self.setState({
                                                            showResponse: true,
                                                            responseMessage: 'Password successfully changed.',
                                                        })
                                                    } else {
                                                        self.setState({
                                                            showResponse: true,
                                                            responseMessage: resp.data.errormsg,
                                                        })
                                                    }
                                                })
                                                .catch((err) => { });
                                            // errorcode = 104
                                            // errorcode = 0
                                            // errorcode = undefined

                                            // errorcode = 104
                                            // errorcode = 0
                                            // errorcode = undefined

                                            // actions.resetForm()
                                        // });

                                        } catch (error) {
                                            
                                        }
                                    }}
                                    validationSchema={() => {
                                        return yup.object().shape({
                                            password: yup
                                                .string()
                                                .min(8, 'at least 8 chars')
                                                .matches(/[a-zA-Z]+/, 'One uppercase & lowercase character')
                                                .matches(/[!@#$%^&*(),.?":{}|<>`]/, 'at least one special character')
                                                .matches(/[0-9]/, 'at least one number')
                                                .required('Password is required.'),
                                            passwordConfirm: yup
                                                .string()
                                                .oneOf([yup.ref('password')], 'password does not match')
                                                .required('Confirm Password is required.'),
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
                                                    <HBFormNote>Enter your new password twice to confirm.</HBFormNote>
                                                    <HBFormGroup>
                                                        <label>New Password</label>
                                                        <Input
                                                            id="password"
                                                            placeholder="Enter your password"
                                                            value={values.password}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            type={'password'}
                                                            className={
                                                                errors.password && touched.password ? 'text-input error' : 'text-input'
                                                            }
                                                        />
                                                        {errors.password &&
                                                            touched.password &&
                                                            <p style={{ display: 'block', marginTop: '5px', marginBottom: '0', fontSize: '12px', color: '#a94442' }}>
                                                                {errors.password}
                                                            </p>}
                                                        <br />
                                                            <br />
                                                        <label>Confirm Password</label>
                                                        <Input
                                                            id="passwordConfirm"
                                                            placeholder="Confirm your password"
                                                            value={values.passwordConfirm}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            type={'password'}
                                                            className={
                                                                errors.passwordConfirm && touched.passwordConfirm ? 'text-input error' : 'text-input'
                                                            }
                                                        />
                                                        {errors.passwordConfirm &&
                                                            touched.passwordConfirm &&
                                                            <p style={{ display: 'block', marginTop: '5px', marginBottom: '0', fontSize: '12px', color: '#a94442' }}>
                                                                {errors.passwordConfirm}
                                                            </p>}
                                                        {ResetPassword.Response.Code !== 0 &&
                                                            touched.passwordConfirm &&
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
                                                            <HBButton type="submit" disabled={isSubmitting} bsstyle="center" default="default">Submit</HBButton>
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