import React, { Component } from 'react'
import {Redirect } from 'react-router-dom';
import { Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { HBModal } from '../../components/HBModal'
import { HBButton } from '../../components/HBButton'
import { toggleBlockpassModal } from  '../../actions/layout-actions'

class ModalWelcome extends Component {

    constructor(props) {
        super(props);
		this.state = { 
			modalOpen: false
		}
	}
	
    componentDidMount() {
		this.setState({ modalOpen: this.props.show })
	}

	handleOpen = () => {
		this.setState({ modalOpen: true })
	}

	handleClickLater = () => {
		console.log(this.props)
		this.setState({ modalOpen: false })
		localStorage.setItem('completeProfileLater', true)
	}

	handleClickProfile = () => {
		this.props.toggleBlockpassModal()
		this.setState({ modalOpen: false })
	}

	render() {
		return (
			<Modal
				className={`modal-welcome`}
				closeOnEscape={false}
				closeOnDimmerClick={false}
				trigger={<span></span>}
				open={this.state.modalOpen}
				size='small'>
				<Modal.Content style={{ background: 'transparent', padding: '0', borderRadius: '8px'}}>
					<HBModal width="normal">
						<h3>Welcome</h3>
						<p style={{ marginBottom: '30px' }}>{'Before being able to trade, we need to confirm a few things.'}</p>
						<div style={{ display: 'flex', margin: '0 -15px' }}>
							<HBButton default="default" size="small" style={{flex: 1, margin: '0 15px'}} onClick={this.handleClickProfile}>{'Complete Profile'}</HBButton>
							<HBButton default="border" size="small" style={{flex: 1, margin: '0 15px'}} onClick={this.handleClickLater}>{'Later'}</HBButton>
						</div>
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

export default connect(mapStateToProps, { toggleBlockpassModal })(ModalWelcome);

