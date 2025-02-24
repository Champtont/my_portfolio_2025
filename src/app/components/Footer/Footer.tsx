import React from 'react'
import { MdOutlineMail } from "react-icons/md"
import { HiOutlinePhone } from "react-icons/hi";
import { FaGithubAlt } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoIosArrowDropupCircle } from "react-icons/io";
import styles from "./Footer.module.css"
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
        <div className={`${styles.linkBox}`}>
            <div className={`${styles.linkBoxArrow} sm:text-lg md:text-xl lg:text-2xl`}>
                <IoIosArrowDropupCircle/>
            </div>
            <div className={`${styles.linkFloatBox}`}>
                <Link href="https://www.linkedin.com/in/courtney-hampton-thomas/" className={`${styles.footerLinks} sm:text-lg md:text-xl lg:text-2xl`}>
                    <SlSocialLinkedin/>
                </Link>
                <Link href="mailto: jaye0888@gmail.com" target="_blank" className={`${styles.footerLinks} sm:text-lg md:text-xl lg:text-2xl`}>
                    <MdOutlineMail/>
                </Link>
                <Link href="tel:+34677894387" className={`${styles.footerLinks} sm:text-lg md:text-xl lg:text-2xl`}>
                    <HiOutlinePhone/>
                </Link>
                <Link href="https://github.com/Champtont" className={`${styles.footerLinks} sm:text-lg md:text-xl lg:text-2xl`}>
                    <FaGithubAlt/>
                </Link>
            </div>
        </div>
      </footer>
  )
}

export default Footer