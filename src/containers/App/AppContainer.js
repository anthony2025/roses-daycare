import App from './App'

import {connect} from 'react-redux'
import {getFullAddress, getPhone, getEmail} from 'store/selectors'

import pages from 'store/pages'
import {REPOSITORY, DEV_EMAIL} from 'services/urls'

const mapStateToProps = state => ({
  devEmail: DEV_EMAIL,
  repository: REPOSITORY,
  pages: pages,
  info: {
    phone: getPhone(state),
    email: getEmail(state),
    address: getFullAddress(state),
  }
})

export default connect(mapStateToProps, null, null, {pure: false})(App)
