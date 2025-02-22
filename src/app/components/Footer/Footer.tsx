import React from 'react'
import { MdOutlineMail } from "react-icons/md"
import { HiOutlinePhone } from "react-icons/hi";
import { FaGithubAlt } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoIosArrowDropupCircle } from "react-icons/io";
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
        <div className={`${styles.linkBox}`}>
            <div className={`${styles.linkBoxArrow} sm:text-lg md:text-xl lg:text-2xl`}>
                <IoIosArrowDropupCircle/>
            </div>
            <div className={`${styles.linkFloatBox}`}>
                <div className={`${styles.footerLinks} sm:text-lg md:text-xl lg:text-2xl`}>
                    <SlSocialLinkedin/>
                </div>
                <div className={`${styles.footerLinks} sm:text-lg md:text-xl lg:text-2xl`}>
                    <MdOutlineMail/>
                </div>
                <div className={`${styles.footerLinks} sm:text-lg md:text-xl lg:text-2xl`}>
                    <HiOutlinePhone/>
                </div>
                <div className={`${styles.footerLinks} sm:text-lg md:text-xl lg:text-2xl`}>
                    <FaGithubAlt/>
                </div>
            </div>
        </div>
      </footer>
  )
}

export default Footer