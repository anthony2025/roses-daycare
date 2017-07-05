import Info from './Info'
import {connect} from 'react-redux'
import {getContactInfo} from 'store/selectors'

const mapStateToProps = state => {
  const {email, phone, address1, address2} = getContactInfo(state)
  return {email, phone, address1, address2}
}

export default connect(mapStateToProps)(Info)
