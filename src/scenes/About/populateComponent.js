import React, {Component} from 'react'
import getContent from 'src/services/getFromFirebase'

// const dataNeeded = {
//  people: 'https://roses-daycare.firebaseio.com/data/people.json'
//}
// export default populatedComponent(originalComponent, dataNeeded)

export default (originalComponent, data) =>
  class populatedComponent extends Component {
    static propTypes = {
      className: PropTypes.any // TODO
    }

    state = {
      people: [],
      paragraphs: []
    }

    componentDidMount() {
      const peopleUrl = 'https://roses-daycare.firebaseio.com/data/people.json'
      const paragraphsUrl =
        'https://roses-daycare.firebaseio.com/data/about.json'
      getContent(peopleUrl, data => {
        this.setState({
          people: data
        })
      })
      getContent(paragraphsUrl, data => {
        this.setState({
          paragraphs: Object.values(data)
        })
      })
    }
  }
