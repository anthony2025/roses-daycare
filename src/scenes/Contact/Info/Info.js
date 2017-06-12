import React from 'react'
import PropTypes from 'prop-types'
import styles from './Info.css'

Info.propTypes = {
  info: PropTypes.object.isRequired,
}

export default function Info(props) {
  return (
    <div className={styles.info}>
      <div className={styles.item}>
        <div className={styles.subtitle}>EMAIL</div>
        <div className={styles.field}>{props.info.email}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.subtitle}>PHONE</div>
        <div className={styles.field}>{props.info.phone}</div>
      </div>
      <div className={styles.item}>
        <div className={styles.subtitle}>ADDRESS</div>
        <div className={styles.field}>
          {props.info.address1}
          <br />
          {props.info.address2}
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.subtitle}>FACEBOOK</div>
        <div className={styles.field}>{props.info.facebook}</div>
      </div>
    </div>
  )
}
