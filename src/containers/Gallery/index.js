import GalleryContainer from './GalleryContainer'
import {connect} from 'react-redux'
import {getImages} from 'store/selectors'

const mapStateToProps = state => ({
  images: getImages(state)
})

export default connect(mapStateToProps)(GalleryContainer)
