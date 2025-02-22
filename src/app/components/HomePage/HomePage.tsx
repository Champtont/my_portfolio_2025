import React from 'react'
import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={`${styles.homeContainer}`}>
        <div className={`${styles.homeHalf}`}>
            <h1>This Is the Home Page</h1>
        </div>
        <div className={`${styles.homeHalf}`}>
            <p>Put Something Interesting here</p>
        </div>
    </div>
  )
}

export default HomePage