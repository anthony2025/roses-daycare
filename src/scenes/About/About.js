import React from 'react'
import styles from './About.css'

import PEOPLE from 'src/content/people.json'
import PARAGRAPHS from 'src/content/about.json'

import Title from 'src/components/Title/Title'
import Avatar from 'src/components/Avatar/Avatar'

export default function About() {
  return (
    <div className={styles.about}>
      <Title title="About Us" subtitle="OUR STORY" className={styles.title} />

      {PARAGRAPHS.map(paragraph =>
        <div className={styles.paragraph} key={paragraph}>{paragraph}</div>
      )}

      <div className={styles.avatars}>
        {PEOPLE.map(person =>
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
