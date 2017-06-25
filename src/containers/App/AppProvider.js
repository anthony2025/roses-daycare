import App from './App'

import {connect} from 'react-redux'
import {getFullAddress, getPhone, getEmail} from 'store/selectors'

import pages from 'content/pages'
import {REPOSITORY, DEV_EMAIL} from 'services/urls'

const mapStateToProps = state => ({
  devEmail: DEV_EMAIL,
  address: getFullAddress(state),
  phone: getPhone(state),
  email: getEmail(state),
  repository: REPOSITORY,
  pages: pages
})

export default connect(mapStateToProps, null, null, {pure: false})(App)
