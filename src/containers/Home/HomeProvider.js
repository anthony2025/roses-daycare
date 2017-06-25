import Home from './Home'
import injectProps from 'utils/injectProps'

import intro from 'content/intro'
import people from 'content/people'

const mapToProps = {
  paragraphs: intro,
  people: people
}

export default injectProps(mapToProps)(Home)
