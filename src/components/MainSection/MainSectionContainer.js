import MainSection from './MainSection'
import injectProps from 'utils/injectProps'
import pages from 'static/pages'

import Home from 'pages/Home'
import About from 'pages/About'
import Gallery from 'pages/Gallery'
import News from 'pages/News'
import NoMatch from 'pages/NoMatch'

const getComponentByKey = key =>
  ({
    home: Home,
    about: About,
    gallery: Gallery,
    news: News,
    noMatch: NoMatch
  }[key])

const pagesFiltered = Object.keys(pages).reduce(
  (acc, curr) => [...acc, {...pages[curr], component: getComponentByKey(curr)}],
  []
)

const mapToProps = {
  pages: pagesFiltered
}

export default injectProps(mapToProps)(MainSection)
