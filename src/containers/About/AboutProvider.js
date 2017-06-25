import About from './About'
import injectProps from 'utils/injectProps'

import paragraphs from 'content/about'
import people from 'content/people'

const mapToProps = {
  paragraphs: paragraphs,
  people: people
}

export default injectProps(mapToProps)(About)
