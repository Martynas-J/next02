import Image from 'next/image'
import React from 'react'
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2023 Nordesas. All rights reserved.</div>
      <div className={styles.social}>
        <Image className={styles.icon} src='/cvimg.png' width={15} height={15} alt='Nordesas'/>
        <Image className={styles.icon} src='/Untitled.png' width={15} height={15} alt='Nordesas'/>
      </div>
    </div>
  )
}

export default Footer