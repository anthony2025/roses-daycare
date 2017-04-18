/*
  Usage example:
      <Carousel speed={2000}>
        <img style={{height: '300px'}} src='/img/img1.jpg' />
        <img style={{height: '300px'}} src='/img/img2.jpg' />
      </Carousel>
  You must specify the height like above! While a nicer syntax would be possible,
  adding a class with the height dynamically to the children elements requires
  cloning the component, adding the class, and rendering the new component back
  (components are immutable). This more verbose syntax keeps the code way simpler
*/

import React, {Component} from 'react'
import PropTypes from 'prop-types';
import styles from './Carousel.css'

export default class Carousel extends Component {
  staticpropTypes = {
    speed: PropTypes.number // in milliseconds, defaults to 2000
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
      <div class={styles.carousel}>
        {this.props.children[this.state.counter]}
      </div>
    )
  }
}
