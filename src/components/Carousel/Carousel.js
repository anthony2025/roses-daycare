import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

export default class Carousel extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
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
    this.count = React.Children.count(this.props.children)
  }

  componentWillUnmount = () => this.removeTimer()
  componentDidMount = () => this.newTimer()

  removeTimer = () => clearInterval(this.state.interval)
  newTimer = () =>
    this.setState({interval: setInterval(this.nextImage, this.props.speed)})

  nextImage = () => {
    let id = this.state.counter
    const max = this.count - 1
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
      <div>
        {React.cloneElement(this.props.children[this.state.counter], {
          onClick: this.handleClick
        })}
        {/* We are preloading the next image here to avoid flickering */}
        {React.cloneElement(this.props.children[this.state.counter + 1], {
          style: {display: 'none'}
        })}
      </div>
    )
  }
}
