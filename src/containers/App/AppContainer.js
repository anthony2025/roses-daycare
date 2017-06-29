import App from './App'

import {connect} from 'react-redux'
import {getFullAddress, getPhone, getEmail} from 'store/selectors'

import pages from 'store/pages'

const mapStateToProps = state => ({
  devEmail: process.env.REACT_APP_DEV_EMAIL,
  repository: process.env.REACT_APP_REPOSITORY,
  pages: pages,
  info: {
    phone: getPhone(state),
    email: getEmail(state),
    address: getFullAddress(state)
  }
})

export default connect(mapStateToProps, null, null, {pure: false})(App)
