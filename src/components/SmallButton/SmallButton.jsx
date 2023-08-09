import Link from "next/link"
import styles from "./button.module.css"

const SmallButton = ({ text, url }) => {
    return (
        <Link href={url}>
            <button type="button" className={styles.smallButton}>{text}</button >
        </Link>
    )
}

export default SmallButton