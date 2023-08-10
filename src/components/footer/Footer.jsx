import Image from 'next/image'
import React from 'react'
import styles from "./footer.module.css"
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2023 Nordesas. All rights reserved.</div> 
      <div className={styles.social}>

        <Link target='_block' href="https://www.facebook.com" ><Image className={styles.icon} src='/fb.svg' width={20} height={20} alt='Facebook' /></Link>
        <Link target='_block' href="https://www.twitter.com" ><Image className={styles.icon} src='/tw.svg' width={20} height={20} alt='Twitter' /></Link>
        <Link target='_block' href="https://www.instagram.com" ><Image className={styles.icon} src='/ins.svg' width={20} height={20} alt='Instagram' /></Link>
        <Link target='_block' href="https://www.linkedIn.com" ><Image className={styles.icon} src='/li.svg' width={20} height={20} alt='LinkedIn' /></Link>
      </div>
    </div>
  )
}

export default Footer