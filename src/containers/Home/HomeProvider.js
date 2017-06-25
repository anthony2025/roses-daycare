import Home from './Home'
import {connect} from 'react-redux'

import {getIntro} from 'store/selectors'
import people from 'content/people'

const mapStateToProps = state => ({
  paragraphs: getIntro(state),
  people: people
})

export default connect(mapStateToProps, null, null, {pure: false})(Home)
