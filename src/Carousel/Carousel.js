import React, {Component} from 'react'
import PropTypes from 'prop-types';
import styles from './Carousel.css'

export default class Carousel extends Component {
  staticpropTypes = {
    speed: PropTypes.number, // in milliseconds, defaults to 2000
    height: PropTypes.string.isRequired
  }

  state = {
    counter: 0
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  componentDidMount () {
    const DEFAULT_SPEED = 2000;
    this.interval = setInterval(this.nextImage, this.props.speed || DEFAULT_SPEED)
  }

  nextImage = () => {
    let id = this.state.counter
    const max = React.Children.count(this.props.children) - 1
    ;(id >= max || id < 0)
      ? this.setState({counter: 0})
      : this.setState({counter: ++id})
  }

  render () {
    return (
      <div class={styles.carousel} style={{height: this.props.height}}>
        {this.props.children[this.state.counter]}
      </div>
    )
  }
}
