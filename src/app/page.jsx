import Image from "next/image";
import Hero from "public/hero.jpg"
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Laba diena</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ad aut blanditiis! Dolor perferendis sapiente delectus iste aut enim atque ipsam molestiae harum pariatur cupiditate illo quisquam quibusdam, adipisci earum.</p>
      </div>
      <div className={styles.item}>
        <Image className={styles.img} src={Hero} alt="hero" />
      </div>

    </div>
  )
}
