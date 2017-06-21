import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Carousel from './Carousel'

export default class CarouselContainer extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    speed: PropTypes.number
  }

  static defaultProps = {
    speed: 2000
  }

  state = {
    counter: 0
  }

  constructor(props) {
    super(props)
    this.interval = null
  }

  componentWillUnmount = () => this.removeTimer()
  componentDidMount = () => this.newTimer()

  removeTimer = () => clearInterval(this.state.interval)
  newTimer = () =>
    this.setState({interval: setInterval(this.nextImage, this.props.speed)})

  nextImage = () => {
    let id = this.state.counter
    const max = this.props.images.length - 1
    id >= max || id < 0
      ? this.setState({counter: 0})
      : this.setState({counter: ++id})
  }

  handleClick = () => {
    this.removeTimer()
    this.nextImage()
    this.newTimer()
  }

  render() {
    return (
      <Carousel
        clickHandler={this.handleClick}
        currentImage={this.props.images[this.state.counter]}
        {...this.props}
      />
    )
  }
}
