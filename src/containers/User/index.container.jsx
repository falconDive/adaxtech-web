import { connect } from 'react-redux'
import User from './index'

import { authenticateUser } from './../../actions/user-actions'

const mapStateToProps = state => ({
    UserData: state.UserData
})

export default connect(mapStateToProps, { authenticateUser })(User)