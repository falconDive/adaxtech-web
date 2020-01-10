import { connect } from 'react-redux'
import Menu from './Menu'

import { UserConfigData } from '../../../selectors/containers/user-data-container'
import { closeSideBar, toggleBlockpassModal } from  '../../../actions/layout-actions'

const mapStateToProps = state => ({
    UserConfigData: UserConfigData(state),
    Layout: state.Layout
})

export default connect(mapStateToProps, { closeSideBar, toggleBlockpassModal })(Menu)
