import React, { Component } from 'react'
import {Redirect, Link, Router } from 'react-router-dom';
import { Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { HBModal } from '../../components/HBModal'
import { HBButton, HBLink } from '../../components/HBButton'
import iconKYC from '../../assets/kyc.svg';
import { toggleBlockpassModal } from  '../../actions/layout-actions'

class ModalKYCMessage extends Component {

    constructor(props) {
        super(props);
		this.state = { 
			modalOpen: false
		}
	}

    componentDidMount() {
		this.setState({ modalOpen: this.props.show })
	}

	handleGoToVerification = () => {
		this.props.toggleBlockpassModal()
		this.setState({ modalOpen: false })
    }

	render() {
		let verificationStatus = this.props.levelIncreaseStatus
		let msg = 'You need to verify your account before you can do any transactions.'
		let	button = <HBButton default="default" size="small" style={{flex: 1, margin: '0 15px'}} onClick={this.handleGoToVerification}>{'Get Verified'}</HBButton>
		
        if (verificationStatus === `fail`) {
			msg ='Account verification failed. Please contact our support team to address this issue.'
			button = <HBButton default="default" size="small" style={{flex: 1, margin: '0 15px'}} onClick={this.props.onClose}>{'OK'}</HBButton>
        } else if (verificationStatus === `underReview`) {
			msg = 'Your account is under review. You can transact once your verification has been approved.'
			button = <HBButton default="default" size="small" style={{flex: 1, margin: '0 15px'}} onClick={this.props.onClose}>{'OK'}</HBButton>
        }

		return (
				<Modal
					className={`modal-welcome`}
					closeOnEscape={false}
					closeOnDimmerClick={false}
					trigger={<span></span>}
					open={this.state.modalOpen}
					size='tiny'>
					<Modal.Content style={{ background: 'transparent', padding: '0', borderRadius: '8px'}}>
						<HBModal width="normal">
							<img style={{ display: 'block', margin: '0 auto' }} src={iconKYC} alt={``} />
							<p style={{ marginBottom: '30px', textAlign: 'center' , marginTop: '20px' }}>{msg}</p>
							{button}
							{/* <div style={{ display: 'flex', margin: '0 -15px' }}>
								<HBButton default="default" size="small" style={{flex: 1, margin: '0 15px'}} onClick={this.handleClickOK}>{'OK'}</HBButton>
							</div> */}
						</HBModal>
					</Modal.Content>
				</Modal>
		)
	}
}


const mapStateToProps = (state) => {
    return {
        Translation: state.Translation
    }
}

export default connect(mapStateToProps, { toggleBlockpassModal })(ModalKYCMessage);