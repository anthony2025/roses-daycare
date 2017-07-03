import HomeContainer from './HomeContainer'
import {connect} from 'react-redux'
import {getIntro, getPeople} from 'store/selectors'

const mapStateToProps = state => ({
  paragraphs: getIntro(state),
  people: getPeople(state)
})

export default connect(mapStateToProps, null, null, {pure: false})(
  HomeContainer
)
