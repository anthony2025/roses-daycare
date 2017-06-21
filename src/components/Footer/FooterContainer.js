import Footer from './Footer'

import {connect} from 'react-redux'
import {getFullAddress, getPhone, getEmail} from 'store/selectors'
import {DEV_EMAIL} from 'services/urls'

const mapStateToProps = state => ({
  devEmail: DEV_EMAIL,
  address: getFullAddress(state),
  phone: getPhone(state),
  email: getEmail(state)
})

export default connect(mapStateToProps)(Footer)
