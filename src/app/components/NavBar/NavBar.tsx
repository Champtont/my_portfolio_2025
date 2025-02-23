import React from 'react'
import Link from 'next/link'
import styles from './NavBar.module.css'
//import CJHTLogoOutline from '@/app/assets/CJHTLogoOutline'
import CJHTLogoSolid from '@/app/assets/CJHTLogoSolid'
import { BiDownload } from "react-icons/bi";
import { FaGear } from "react-icons/fa6";

const NavBar = () => {
  return (
      <div className={`${styles.wavyMask}`}>
    <div className={`${styles.nav} flex  justify-between content-evenly sm:flex-row sm:w-full sm:h-fit md:flex-col md:h-full md:w-fit`}>
      <div>
        <Link href={"/"}>
          <div className={`${styles.logoBox} flex justify-right sm:p-3 md:p-6 lg:p-9`}>
            <CJHTLogoSolid/>
            <FaGear className={`${styles.littleGear}`}/>
          </div>
        </Link>
      </div>
      <div className='flex items-center sm:flex-row sm:w-full  md:flex-col md:w-fit md:h-full'>
        <Link href={"/skills"} className={`${styles.navButton} sm:mb-0 sm:ml-2 md:mb-2 md:ml-0 lg:mb-3 lg:ml-0`}>
          <div className={`sm:px-3 md:px-6 lg:px-9`}>
            Skills
          </div>
        </Link>
        <Link href={"/projects"} className={`${styles.navButton} sm:mb-0 md:mb-3`}>
          <div className={`sm:px-3 sm:ml-3 md:px-6 md:ml-0  lg:px-9`}>
            Projects
          </div>
        </Link>
        <a href="/Fullstack_Engineer_Resume.pdf" download="CourtJHTResume" className={`${styles.navButton} flex items-center`}>
          <div className={`mr-2`}><BiDownload/></div>
          <div>Resume</div>
        </a>
      </div>
      </div>
    </div>
  )
}

export default NavBar