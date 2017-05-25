import React, {Component} from 'react'
import styles from './About.css'

import getContent from 'src/services/getFromFirebase'

import Title from 'src/core/Title/Title'
import Avatar from 'src/core/Avatar/Avatar'

export default class About extends Component {
  state = {
    people: [],
    paragraphs: []
  }

  componentDidMount () {
    const peopleUrl = 'https://roses-daycare.firebaseio.com/data/people.json'
    const paragraphsUrl = 'https://roses-daycare.firebaseio.com/data/about.json'
    getContent(peopleUrl, (data) => {
      this.setState({
        people: data
      })
    })
    getContent(paragraphsUrl, (data) => {
      this.setState({
        paragraphs: Object.values(data)
      })
    })
  }

  render () {
    return (
      <div className={styles.about}>
        <Title title='About Us' subtitle='OUR STORY' className={styles.title} />
        {this.state.paragraphs.map(paragraph =>
          <div className={styles.paragraph} key={paragraph}>{paragraph}</div>
        )}
        <div className={styles.avatars}>
          {this.state.people.map(person =>
            <Avatar
              className={styles.avatar}
              img={person.img}
              name={person.name}
              subtitle={person.subtitle}
              key={person.name}
            />
          )}
        </div>
      </div>
    )
  }
}
