import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import { get } from 'lodash'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Loader } from 'semantic-ui-react'
import QRCode from 'qrcode.react';

import './BlockpassVerify.css'
import { BlockpassSelector, UserInfoSelector } from '../../../selectors/entities/user-data-selector'
import { API_GATEWAY, BLOCKPASS_URL } from  './../../../helpers/config'
import { getUserConfigCompleted } from '../../../actions/user-actions'
import { closeSideBar, toggleBlockpassModal } from  './../../../actions/layout-actions'
import { HBButton } from '../../../components/HBButton';
import Close from './../../../assets/close.svg';
import { 
	ModalTitle,
	CloseButton,
	Header,
	Insturctions,
	InstuctionCol,
	InstuctionColItem,
	DownloadLink,
	InlineBlock,
	Icon,
	DownloadBtn,
	LogoCont,
	Logo, 
	Flex,
	FlexRow,
	QRCodeCont,
	ScanInstruct
} from '../../../components/User/Verify';

const assets = require.context('./../../../assets', true)

class BlockpassVerify extends Component {
	state = {
		QRCodeVisible: false,
		QRCodeValue: null,
		sessionStatus: null,
		sessionId: null
	}
	checkSessionTimer = null
	setSessionTimer = null

	checkSessionStatus = async () => {
		const { updateVerifyStatus } = this.props
		const { sessionId } = this.state
		const { checkSessionStatus, setState } = this

		if (! sessionId)
			return

		try {
			const response = await axios.get(`${BLOCKPASS_URL}/api/3rdService/register/status/${sessionId}`)
			const { status } = response.data.data

			this.setState({ sessionStatus: status })
			if (status === 'success') {
				updateVerifyStatus({
					Data: [{ Key: 'levelIncreaseStatus', Value: 'waitingReview'}],
					Code: 1,
					Message: ''
				})
			} else {
				this.checkSessionTimer = setTimeout(checkSessionStatus, 2000)
			}
		} catch (e) {
			this.setState({ sessionStatus: 'error' })
		}
	}

	generateQRcode = () => {
		const { UserInfo } = this.props

		this.setState({ sessionStatus: 'generating'}, async () => {
			let sessionId
			try {
				const response = await axios({
					method: 'POST',
					data: UserInfo.Data,
					contentType: 'application/json',
					url: `${API_GATEWAY}/api/v1/kyc/session`
				})
				const data = get(response, 'data.data', {})
				sessionId = data.session
				if (sessionId) {
					const QRCodeValue = JSON.stringify(data)
					return this.setState({ sessionStatus: null, sessionId, QRCodeValue }, () => {
						if (this.state.QRCodeVisible) {
							this.checkSessionStatus()
						}
					})
				}
			} catch (e) {}

			if (! sessionId && this.props.modalOpen ) {
				this.setSessionTimer = setTimeout(this.generateQRcode, 1000)
			}
		})
	}

	refreshQRCode = () => {
		this.generateQRcode()
		clearInterval(this.checkSessionTimer)
	}

	showQRcode = () => {
		this.setState({ QRCodeVisible: true }, this.checkSessionStatus)
	}

	onModalClosed = () => {
		this.setState({ QRCodeVisible: null, sessionId: null })
		clearTimeout(this.checkSessionTimer)
		clearTimeout(this.setSessionTimer)
	}

	render() {
		const {modalOpen, toggleBlockpassModal} = this.props;
		const {sessionStatus, QRCodeVisible, QRCodeValue} = this.state;
		const {showQRcode, generateQRcode, checkSessionStatus, refreshQRCode, onModalClosed} = this;		
		const btnStyle = {display: 'inline-block', width: 'auto', padding: '0 20px'}

		let modalContent = null

		if ( ! QRCodeVisible ) {
			modalContent = (
				<Fragment>
					<Header>User Instructions</Header>
					<div>In order to get verified you need to Download the Blockpass mobile app and perform the KYC there.</div>
					<Flex>
						<Insturctions>
							<FlexRow>
								<InstuctionColItem>
									<DownloadLink>
										<DownloadBtn 
											target="_blank"
											href={"https://play.google.com/store/apps/details?id=com.blockpass_mobile"}>
											<img src={assets('./google-play-btn.svg')} />
										</DownloadBtn>
										<DownloadBtn 
											target="_blank"
											href={"https://apps.apple.com/us/app/blockpass/id1322917010"}>
											<img src={assets('./app-lestore-btn.svg')} />
										</DownloadBtn>
									</DownloadLink>
									<div>1. Download Blockpass mobile app</div>
								</InstuctionColItem>
								<InstuctionColItem>
									<InlineBlock>
										<Icon src={assets('./verify-instruct-2.svg')} />
										2. Create your identity
									</InlineBlock>
								</InstuctionColItem>
								<InstuctionColItem>
									<InlineBlock>
										<Icon src={assets('./verify-instruct-3.svg')} />
										3. Submit your info
									</InlineBlock>
								</InstuctionColItem>
							</FlexRow>
							<FlexRow>
								<InstuctionColItem>
									<InlineBlock>
										<Icon src={assets('./verify-instruct-4.svg')} />
										4. Click Connect with Blockpass
									</InlineBlock>
								</InstuctionColItem>
								<InstuctionColItem>
									<InlineBlock>
										<Icon src={assets('./verify-instruct-5.svg')} />
										5. Scan the QR Code with app
									</InlineBlock>
								</InstuctionColItem>
								<InstuctionColItem>
									<InlineBlock>
										<Icon src={assets('./verify-instruct-6.svg')} />
										6. Confirm registration in app
									</InlineBlock>
								</InstuctionColItem>
							</FlexRow>
						</Insturctions>

						<LogoCont>
							<Logo src={assets('./logo.svg')} />
							<HBButton size="small" style={btnStyle} onClick={showQRcode}>Connect with Blockpass</HBButton>
						</LogoCont>
					</Flex>
				</Fragment>
			)
		} else {
			switch (sessionStatus) {
				case 'processing': 
						modalContent = 'Please follow the instructions on your phone to continue your registration.'
					break;
				case 'success': 
						modalContent = <Fragment>
							We have successfully receiced your application. <br/>
							We will send you a status update to your Blockpass App. <br/>
							Once you are approved, please log back into your Adax account to confirm your verfiied status.
						</Fragment>
					break;
				case 'generating': 
						modalContent = <Loader inline="centered" content="Loading QR Code" active inverted indeterminate />
					break;
				case 'error': 
						modalContent = <HBButton size="small" default style={btnStyle} onClick={refreshQRCode}>
							Rescan QR Code
						</HBButton>
					break;
				case 'created': 
				default:
						modalContent = <Fragment>
							<QRCode size={256} includeMargin={true} value={QRCodeValue} />
							<ScanInstruct>Scan this QR Code with your Blockpass mobile application to connect</ScanInstruct>
						</Fragment>
			}

			modalContent = <QRCodeCont>{modalContent}</QRCodeCont>
		}

		return (
			<Modal 
				isOpen={modalOpen}
				onOpened={generateQRcode}
				onClosed={onModalClosed}
				backdrop="static"
				zIndex="21474836002"
				backdropClassName={'bpv-backdrop'} 
				modalClassName={'bpv-modal'}>
				<div className="test123">
					<ModalTitle>
						<CloseButton src={assets('./close.svg')} onClick={toggleBlockpassModal} />
						Get verified
					</ModalTitle>
					{modalContent}
				</div>
	        </Modal>
		)
	}
}

const mapStateToProps = state => ({
    UserInfo: UserInfoSelector(state),
    modalOpen: state.Layout.BlockpassModal.Open,
})
const mapDispatchToProps = dispatch => ({
    updateVerifyStatus: (payload) => dispatch(getUserConfigCompleted(payload)),
	toggleBlockpassModal: () => dispatch(toggleBlockpassModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(BlockpassVerify)