import React from 'react'
import styles from 'styles/Info.css'

export default props => (
  <div class={styles.info  + " " + props.parentStyles}>
    <div class={styles.item}>
      <div class={styles.subtitle}>EMAIL</div>
      <div class={styles.field}>rosesdaycare@gmail.com</div>
    </div>
    <div class={styles.item}>
      <div class={styles.subtitle}>PHONE</div>
      <div class={styles.field}>571 219 1442</div>
    </div>
    <div class={styles.item}>
      <div class={styles.subtitle}>ADDRESS</div>
      <div class={styles.field}>
        6020 Franconia Rd
        <br/>
        Springfield VA 22150
      </div>
    </div>
    <div class={styles.item}>
      <div class={styles.subtitle}>FACEBOOK</div>
      <div class={styles.field}>facebook.com/rosesdaycare</div>
    </div>
  </div>
)
