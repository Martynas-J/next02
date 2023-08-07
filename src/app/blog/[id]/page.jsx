
import styles from '../../page.module.css'

const BlogPost = ({params}) => {
    return (
        <div className={styles.card}>
            <div>BlogPost</div>
            <p>Gautas dinaminis ID iš URL: {params.id} </p>
        </div>
    )
}

export default BlogPost