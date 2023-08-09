import Image from 'next/image'
import styles from './about.module.css'
import SmallButton from '@/components/SmallButton/SmallButton'

export const metadata = {
  title: 'About',
  description: 'About Page',
}

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/6805680/pexels-photo-6805680.jpeg"
          fill={true}
          alt="about img"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, laboriosam vel nostrum et harum totam commodi expedita voluptas iure mollitia, unde quisquam neque nihil velit natus, reprehenderit beatae quae minus.
          </p>
          <p className={styles.desc}>
            Dolor sit amet consectetur adipisicing elit. Iste dicta corrupti voluptatibus. Necessitatibus magnam quos quis optio veritatis nemo? Vitae quidem officiis dolores quis corporis architecto asperiores neque hic ex.
          </p>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aspernatur ab placeat at debitis sunt ipsa cupiditate earum ut eligendi porro, hic animi voluptate. Doloribus recusandae eos molestias similique assumenda?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sunt! Molestiae dolores aut voluptatibus autem assumenda incidunt dolore qui mollitia nisi perspiciatis. Ad non unde atque labore aliquid sit dolore?
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Creative Illustrations</li>
            <li className={styles.listItem}>Dynamic Websites</li>
            <li className={styles.listItem}>Fast and Handy Mobile Apps</li>
          </ul>
          <SmallButton text="Contact" url="/contact" />
        </div>
      </div>
    </div>
  )
}

export default About