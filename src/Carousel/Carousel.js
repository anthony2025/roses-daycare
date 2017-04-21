import React, {Component} from 'react'
import PropTypes from 'prop-types';
import styles from './Carousel.css'

export default class Carousel extends Component {
  staticpropTypes = {
    speed: PropTypes.number,
    height: PropTypes.string.isRequired,
    className: PropTypes.string
  }

  DEFAULT_SPEED = 3000

  state = {
    counter: 0,
    interval: false
  }

  componentWillUnmount () {
    this.stopTimer()
  }

  componentDidMount () {
    this.startTimer()
  }

  stopTimer = () => {
    clearInterval(this.state.interval)
  }

  startTimer = () => {
    this.setState({interval: setInterval(this.nextImage, this.props.speed || DEFAULT_SPEED)})
  }

  nextImage = () => {
    let id = this.state.counter
    const max = React.Children.count(this.props.children) - 1
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
        {this.props.children[this.state.counter]}
      </div>
    )
  }
}
