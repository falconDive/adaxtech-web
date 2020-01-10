import { connect } from 'react-redux'
import SiginIn from './SignIn'

import { authenticateUser, authenticate2FAUser, autoAuthenticateUser } from './../../../actions/user-actions'

const mapStateToProps = state => ({
    UserData: state.UserData
})

export default connect(mapStateToProps, { authenticateUser, authenticate2FAUser, autoAuthenticateUser })(SiginIn)