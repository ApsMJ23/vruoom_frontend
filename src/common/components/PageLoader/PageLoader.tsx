import styles from './PageLoader.module.scss';

const PageLoader = () => {
    return (
        <div className={styles.page}>
            <div className={styles.loader}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
        </div>
    )
}

export default PageLoader;