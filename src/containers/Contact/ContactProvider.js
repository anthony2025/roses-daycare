import Contact from './Contact'
import {connect} from 'react-redux'
import {getContactInfo} from 'store/selectors'

const mapStateToProps = state => ({
  info: getContactInfo(state)
})

export default connect(mapStateToProps)(Contact)
