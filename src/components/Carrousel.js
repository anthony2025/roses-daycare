import React from 'react'
import styles from 'styles/Carrousel.css'

export default props => (
  <div class={styles.carrousel + " " + props.parentStyles}>
    <div class={styles.image} />
  </div>
)
