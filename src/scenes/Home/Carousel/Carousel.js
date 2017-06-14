import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    height: 450px;
`

const Image = styled.img`
    height: inherit; /* this centers the image in its container, somehow */
    object-fit: cover;
    width: 100%;
`

export default class Carousel extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    speed: PropTypes.number
  }

  static defaultProps = {
    speed: 1000
  }

  constructor(props) {
    super(props)
    this.interval = null
  }

  state = {
    counter: 0
  }

  componentWillUnmount() {
    this.stopTimer()
  }
  componentDidMount() {
    this.startTimer()
  }

  stopTimer = () => clearInterval(this.state.interval)
  startTimer = () =>
    this.setState({interval: setInterval(this.nextImage, this.props.speed)})

  nextImage = () => {
    let id = this.state.counter
    const max = this.props.images.length - 1
    id >= max || id < 0
      ? this.setState({counter: 0})
      : this.setState({counter: ++id})
  }

  handleClick = () => {
    this.stopTimer()
    this.nextImage()
    this.startTimer()
  }

  render() {
    return (
      <Wrapper onClick={this.handleClick}>
        <Image src={this.props.images[this.state.counter]} />
      </Wrapper>
    )
  }
}
