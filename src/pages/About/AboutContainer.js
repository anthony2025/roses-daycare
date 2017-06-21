import About from './About'
import injectProps from 'utils/injectProps'

import paragraphs from 'static/about'
import people from 'static/people'

const peopleFiltered = Object.keys(people).reduce(
  (acc, curr) => [...acc, {...people[curr], id: curr}],
  []
)

const mapToProps = {
  paragraphs: paragraphs,
  people: peopleFiltered
}

export default injectProps(mapToProps)(About)
