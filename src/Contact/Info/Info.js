import React from 'react'
import PropTypes from 'prop-types'
import styles from './Info.css'

Info.propTypes = {
  className: PropTypes.string
}

export default function Info ({className}) {
  return (
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
}
