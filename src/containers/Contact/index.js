import ContactContainer from './ContactContainer'
import {connect} from 'react-redux'
import {getContactInfo} from 'store/selectors'

const mapStateToProps = state => ({
  info: getContactInfo(state)
})

export default connect(mapStateToProps)(ContactContainer)
