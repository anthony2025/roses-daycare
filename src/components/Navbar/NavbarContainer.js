import Navbar from './Navbar'
import injectProps from 'utils/injectProps'
import pages from 'static/pages'

const pagesFiltered = Object.keys(pages)
  .filter(key => 'noMatch' !== key)
  .reduce((acc, curr) => [...acc, pages[curr]], [])

const mapToProps = {
  pages: pagesFiltered
}

export default injectProps(mapToProps)(Navbar)
