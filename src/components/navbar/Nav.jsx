'use client'
import Link from "next/link"
import styles from "./navbar.module.css"


const Nav = () => {
    return (
        <nav className={styles.menuNavigation}>
            <Link className={styles.logo} href="/">Nordesas</Link>
            <div className={styles.links} >
                <Link className={styles.link} href="/">Home</Link>
                <Link className={styles.link} href="/about">About</Link>
                <Link className={styles.link} href="/blog">Blog</Link>
                <Link className={styles.link} href="/contact">Contact</Link>
                <Link className={styles.link} href="/portfolio">Portfolio</Link>
                <Link className={styles.link} href="/dashboard">Dashboard</Link>
                <button className={styles.logout}>Log out</button>

            </div>

        </nav>
    )
}

export default Nav