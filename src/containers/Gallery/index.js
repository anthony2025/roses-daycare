import GalleryContainer from './GalleryContainer'
import {connect} from 'react-redux'
import {getCarouselImages, getThumbnailImages} from 'store/selectors'

const mapStateToProps = state => ({
  carouselImages: getCarouselImages(state),
  thumbnailImages: getThumbnailImages(state)
})

export default connect(mapStateToProps)(GalleryContainer)
