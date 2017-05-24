import React, {Component} from 'react'
import PropTypes from 'prop-types';
import styles from './Carousel.css'

export default class Carousel extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    speed: PropTypes.number,
    className: PropTypes.string
  }

  static defaultProps = {
    speed: 1000,
  }

  state = {
    counter: 0,
    interval: null
  }

  componentWillUnmount () {this.stopTimer()}
  componentDidMount () {this.startTimer()}

  stopTimer = () => clearInterval(this.state.interval)
  startTimer = () => this.setState({interval: setInterval(this.nextImage, this.props.speed)})

  nextImage = () => {
    let id = this.state.counter
    const max = this.props.images.length - 1
    ;(id >= max || id < 0)
      ? this.setState({counter: 0})
      : this.setState({counter: ++id})
  }

  handleClick = () => {
    this.stopTimer()
    this.nextImage()
    this.startTimer()
  }

  render () {
    return (
      <div className={styles.carousel + ' ' + this.props.className}
          style={{height: this.props.height}}
          onClick={this.handleClick}>
        <img src={this.props.images[this.state.counter]} />
      </div>
    )
  }
}
