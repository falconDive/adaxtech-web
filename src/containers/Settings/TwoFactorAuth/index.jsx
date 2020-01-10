import React, { Component } from 'react';
import { Modal, Input, Dimmer, Loader } from 'semantic-ui-react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import { SettingsAuthenticate2FA } from './../../../services/NotificationServices'

import { HBTwoFactorAuth } from './../../../components/HBSettings/HBTwoFactorAuth'
import { HBButton } from './../../../components/HBButton'
import { HBModalCustomize, HBModalCustomizeHeader, HBModalCustomizeContent, HBModalCustomizeActions } from './../../../components/HBModalCustomize'

import { HBForm, } from './../../../components/HBForm'

import iconSecure from './../../../assets/settings/secure.png';
import appStore from './../../../assets/two-fa/app-store.svg';
import googleStore from './../../../assets/two-fa/google-play.svg';
import ArrowLeft from './../../../assets/two-fa/arrow-left.svg';
import IconClose from './../../../assets/two-fa/close.png';

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';





class TwoFactorAuth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            step: 1,
            TFACode: ``
        }
        this.notificationDOMRef = React.createRef();
    }

    componentDidMount() {
        SettingsAuthenticate2FA.filter(i => i).subscribe(obj => {
            if (obj.Authenticated) {
                this.addNotification({
                    title: `Success`,
                    message: `Two FA successfully authenticated`,
                    type: `success`
                })
                this.setState({ open: false })
            } else {

                this.addNotification({
                    title: `Failed`,
                    message: `Invalid Two FA code`,
                    type: `errror`
                })
            }
        })
    }

    handleClickModal = () => {
        const { UserInfo } = this.props
        if (UserInfo.Completed) {
            if (UserInfo.Data.Use2FA) {
                this.props.disable2FA()
                this.setState({ open: !this.state.open, step: 3 })
            } else {
                this.props.enable2FA()
                this.setState({ open: !this.state.open, step: 1 })
            }
        }
    }

    handleClickContinue = (val) => {
        const { UserInfo } = this.props
        if (UserInfo.Completed) {
            if (UserInfo.Data.Use2FA) {
                this.setState({ step: this.state.step + 2 })
            } else {
                this.setState({ step: this.state.step + 1 })
            }
        }
    }

    handleClickBack = (val) => {
        const { UserInfo } = this.props
        if (UserInfo.Completed) {
            if (UserInfo.Data.Use2FA) {
                this.setState({ step: this.state.step - 2 })
            } else {
                this.setState({ step: this.state.step - 1 })
            }
        }
    }

    handleClickSubmit = (val) => {
        const { TFACode } = this.state
        const { UserInfo: { Data: { AccountId, UserId } } } = this.props
        this.props.settingsAuthenticate2FA({ TFACode, AccountId, UserId })
    }

    handleChangeTFACode = (e) => {
        const { value } = e.target
        this.setState({ TFACode: value })
    }


    addNotification = ({ title = ``, message = ``, type = `success` }) => {
        this.notificationDOMRef.current.addNotification({
            title,
            message,
            type,
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: { duration: 5000 },
            dismissable: { click: true }
        });
    }
    copyCode(){
        toast.success("Copied to clipboard", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }


    render() {
        const { open, step } = this.state
        const { TwoFactor, UserInfo, Authenticate2FA } = this.props

        let GoogleQRCode = ``, ManualCode = ``
        if (TwoFactor.Completed) {
            GoogleQRCode = TwoFactor.Data.GoogleQRCode
            ManualCode = TwoFactor.Data.ManualCode
        }

        let TFAEnabled = false
        if (UserInfo.Completed) {
            TFAEnabled = UserInfo.Data.Use2FA
        }
        let Authenticate2FAMsg = ``
        if (Authenticate2FA.Completed) {
            if (!Authenticate2FA.Data.Authenticated) {
                Authenticate2FAMsg = `Invalid code`
            }
        }
        return (
            <HBTwoFactorAuth>
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                />                         
                <div>
                    <h3>Two-Factor Authentication</h3>
                    <p>Use Two-Factor Authentication for withdrawals and additional security layer.</p>
                    <HBButton bsstyle="center" default="default" size="medium" border="theme" onClick={() => this.handleClickModal()}>{TFAEnabled ? `Disable` : `Enable`} 2FA</HBButton>
                    <Modal
                        closeOnEscape={false}
                        closeOnDimmerClick={false}
                        open={open}
                        size='small'>
                    
                        <HBModalCustomize padding={step > 1 ? `pl-huge` : ''} modal="2fa">
                            <HBModalCustomizeHeader>
                                {step > 1 && !TFAEnabled ?
                                    <img src={ArrowLeft} alt="" onClick={() => this.handleClickBack()} className="icon-header icon-header--back" />
                                    : ''}
                                <img src={IconClose} alt="" onClick={() => this.handleClickModal()} className="icon-header icon-header--next" />
                                {step === 1 ?
                                    <div>
                                        <h4>Download the App on your phone</h4>
                                        <p>Click on the links to download the Authy app.</p>
                                    </div>
                                    : ''}
                                {step === 2 ?
                                    <div>
                                        <h4>Scan the Code</h4>
                                        <p>Click the “add” button in your Authenticator app.“Enter the provided key” or Scan QR Code”.</p>
                                    </div>
                                    : ''}
                                {step === 3 ?
                                    <div>
                                        <h4>Input Code</h4>
                                        <p>Enter the 2 Factor Authentication code in your phone to {TFAEnabled ? `deactivate` : `activate`}</p>
                                    </div>
                                    : ''}
                            </HBModalCustomizeHeader>
                            <HBModalCustomizeContent margin={`huge`}>
                                {step === 1 ?
                                    <div className={`download-app`}>
                                        <img src={iconSecure} alt="iconSecure" />
                                        <a href="https://itunes.apple.com/ph/app/authy/id494168017?mt=8" target="_blank"><img src={appStore} alt="app Store" /></a>
                                        <a href="https://play.google.com/store/apps/details?id=com.authy.authy&hl=en" target="_blank"><img src={googleStore} alt="google play" /></a>
                                    </div>
                                    : ''}
                                {step === 2 ?
                                    <div>
                                        <img src={`data:image/jpg;base64,${GoogleQRCode}`} alt={GoogleQRCode} />
                                        <HBForm>
                                            <div style={{ display: 'flex' }}>
                                                <Input type="text" value={ManualCode} readOnly />
                                                <CopyToClipboard text={ManualCode}>
                                                    <HBButton bsstyle="center" default="default" size="medium" border="theme" style={{ width: '120px' }} onClick={this.copyCode}>Copy</HBButton>
                                                </CopyToClipboard>
                                            </div>
                                        </HBForm>
                                    </div>
                                    : ''}
                                {step === 3 ?
                                    <div>
                                        <HBForm>
                                            {Authenticate2FA.Loading &&
                                                <Dimmer active style={{ minHeight: '300px' }}>
                                                    <Loader />
                                                </Dimmer>
                                            }

                                            <HBForm>
                                                <label>2 Factor Authentication</label>
                                                <Input placeholder='2FA Code' type="text" onChange={this.handleChangeTFACode} />
                                                <p style={{ display: 'block', marginTop: '5px', marginBottom: '0', fontSize: '12px', color: '#a94442' }}>
                                                    {Authenticate2FAMsg}
                                                </p>
                                            </HBForm>
                                        </HBForm>
                                    </div>
                                    : ''}
                            </HBModalCustomizeContent>
                            <HBModalCustomizeActions>
                                {step === 3 ?
                                    <HBButton bsstyle="center" default="default" size="medium" border="theme" onClick={() => this.handleClickSubmit()} style={{ width: '155px' }}>Submit</HBButton>
                                    :
                                    <HBButton bsstyle="center" default="default" size="medium" border="theme" onClick={() => this.handleClickContinue()} style={{ width: '155px' }}>Continue</HBButton>
                                }
                            </HBModalCustomizeActions>
                        </HBModalCustomize>
                    </Modal>
                </div>
                <ReactNotification ref={this.notificationDOMRef} />
            </HBTwoFactorAuth>
        );
    }
}

export default TwoFactorAuth;