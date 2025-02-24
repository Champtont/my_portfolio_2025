import React from 'react'
import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={`${styles.homeContainer}`}>
        <div className={`${styles.homeHalf}`}>
            <h1>{"Hi, I'm Courtney"}</h1>
            <h2>FullStack Developer</h2>
        </div>
        <div className={`${styles.imageBox}`}>ImageBox</div>
        <div className={`${styles.homeHalf}`}>
            <h1>About Me</h1>
            <div id='About'>
              <p>
              I am a Full-Stack Developer with a diverse background spanning technology, healthcare, and customer-facing roles. My journey began in the nursing field, where I developed strong problem-solving, communication, and project management skills. Transitioning into tech, I honed my expertise in frontend and backend development, working with technologies such as JavaScript, React, Node.js, and Python.

Currently, as a Deployment Engineer at Collective Minds, a fast-paced startup, I have embraced adaptability, rapid learning, and cross-functional collaboration. Whether troubleshooting technical issues, developing solutions, or assisting colleagues across departments, I thrive in dynamic environments that require both technical proficiency and teamwork.

Passionate about building intuitive and scalable applications, I am always eager to learn and take on new challenges. My unique combination of technical expertise and customer-centric experience allows me to bridge the gap between development and user experience, ensuring impactful digital solutions.
              </p>
            </div>
        </div>
    </div>
  )
}

export default HomePage