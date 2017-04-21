import React from 'react'
import styles from './Info.css'

export default ({className}) => (
  <div className={styles.info + ' ' + className}>
    <div className={styles.item}>
      <div className={styles.subtitle}>EMAIL</div>
      <div className={styles.field}>rosesdaycare@gmail.com</div>
    </div>
    <div className={styles.item}>
      <div className={styles.subtitle}>PHONE</div>
      <div className={styles.field}>571 219 1442</div>
    </div>
    <div className={styles.item}>
      <div className={styles.subtitle}>ADDRESS</div>
      <div className={styles.field}>
        6020 Franconia Rd
        <br />
        Springfield VA 22150
      </div>
    </div>
    <div className={styles.item}>
      <div className={styles.subtitle}>FACEBOOK</div>
      <div className={styles.field}>facebook.com/rosesdaycare</div>
    </div>
  </div>
)
