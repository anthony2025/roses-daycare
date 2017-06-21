import News from './News'
import {connect} from 'react-redux'
import {getArticles} from 'store/selectors'

const filterArticles = articles =>
Object.keys(articles).reduce(
  (acc, curr) => [...acc, {...articles[curr], id: curr}],
  []
)

const mapStateToProps = state => ({
  articles: filterArticles(getArticles(state))
})

export default connect(mapStateToProps)(News)
