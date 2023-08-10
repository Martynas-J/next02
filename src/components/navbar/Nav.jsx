'use client'
import Link from "next/link"
import styles from "./navbar.module.css"
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle.js"
import { signOut, useSession } from "next-auth/react"


const Nav = () => {
    const session = useSession()
    return (
        <nav className={styles.menuNavigation}>
            <Link className={styles.logo} href="/">Nordesas</Link>
            <div className={styles.links} >
                <DarkModeToggle />
                <Link className={styles.link} href="/">Home</Link>
                <Link className={styles.link} href="/about">About</Link>
                <Link className={styles.link} href="/blog">Blog</Link>
                <Link className={styles.link} href="/contact">Contact</Link>
                <Link className={styles.link} href="/portfolio">Portfolio</Link>
                <Link className={styles.link} href="/dashboard">Dashboard</Link>
                {session.status === "authenticated" && (
                    <button onClick={signOut} className={styles.logout}>Log out</button>
                )}
            </div>

        </nav>
    )
}

export default Nav