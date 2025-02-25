import styles from './header.module.scss'

export const Header = () => {
    return(
        <div className={styles.root}>
            <div>scam devs</div>
            <a className={styles.button}>services</a>
            <a className={styles.button}>projects</a>
            <a className={styles.button}>contacts</a>
            <a className={styles.button}>about</a>
        </div>
    )
}