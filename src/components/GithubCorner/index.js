import GithubCorner from './GithubCorner'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  repository: process.env.REACT_APP_REPOSITORY
})

export default connect(mapStateToProps, null, null, {pure: false})(GithubCorner)
