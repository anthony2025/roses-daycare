import React from 'react'
import styles from './Footer.css'

export default props => (
  <div class={styles.footer + ' ' + props.parentStyles}>
    <span class={styles.text}>
      Rose's Day Care LLC, 2017
      <br />
      made with ♥ by anthonyascencio.me
    </span>
  </div>
)
