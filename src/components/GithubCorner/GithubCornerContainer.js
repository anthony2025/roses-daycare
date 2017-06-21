import GithubCorner from './GithubCorner'
import injectProps from 'utils/injectProps'
import {REPOSITORY} from 'services/urls'

const mapToProps = {
  repository: REPOSITORY
}

export default injectProps(mapToProps)(GithubCorner)
