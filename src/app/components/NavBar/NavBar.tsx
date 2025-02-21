import React from 'react'
import Link from 'next/link'
import styles from './NavBar.module.css'
//import CJHTLogoOutline from '@/app/assets/CJHTLogoOutline'
import CJHTLogoSolid from '@/app/assets/CJHTLogoSolid'

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <div>
        <Link href={"/"}>
          <div>
            <CJHTLogoSolid/>
          </div>
        </Link>
      </div>
      <div>
        <Link href={"/skills"}>Skills</Link>
      </div>
      <div>
        <Link href={"/projects"}>Projects</Link>
      </div>
    </div>
  )
}

export default NavBar