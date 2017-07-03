import NewsContainer from './NewsContainer'
import {connect} from 'react-redux'
import {getArticles, getPeople} from 'store/selectors'

const mapStateToProps = state => ({
  articles: getArticles(state),
  people: getPeople(state)
})

export default connect(mapStateToProps)(NewsContainer)
