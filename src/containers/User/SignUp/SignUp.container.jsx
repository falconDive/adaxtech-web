import { connect } from 'react-redux'
import SignUp from './SignUp'

import { signUpUser } from './../../../actions/user-actions'

const mapStateToProps = state => ({
    RegisterNew: state.UserData.RegisterNew
})

export default connect(mapStateToProps, { signUpUser })(SignUp)