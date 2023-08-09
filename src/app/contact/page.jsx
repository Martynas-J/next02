import Image from 'next/image'
import styles from './contact.module.css'
import SmallButton from '@/components/SmallButton/SmallButton'


export const metadata = {
    title: 'Contact',
    description: 'Contact Page',
  }

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image
                        src="/contact.jpg"
                        alt='contact'
                        fill={true}
                        className={styles.image}
                    />
                </div>
                <form className={styles.form}>
                    <input type="text" placeholder='name' className={styles.input} />
                    <input type="text" placeholder='email' className={styles.input} />
                    <textarea
                        className={styles.textArea}
                        placeholder='message'
                        cols="30"
                        rows="10"
                    ></textarea>
                    <SmallButton text="Send" url="#"/>
                </form>
            </div>
        </div>
    )
}

export default Contact