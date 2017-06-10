import React, {Component} from 'react'
import styles from './About.css'

import people from './people.json'
import paragraphs from './paragraphs.json'

import Title from 'src/components/Title/Title'
import Avatar from 'src/components/Avatar/Avatar'

export default class About extends Component {
  state = {
    people: [],
    paragraphs: []
  }

  componentDidMount() {
    this.setState({
      people: people,
      paragraphs: paragraphs
    })
  }

  render() {
    return (
      <div className={styles.about}>
        <Title title="About Us" subtitle="OUR STORY" className={styles.title} />
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
