import styles from './contans.module.scss'
import ContactForm from "@/components/ui/form/ContactForm";
import MirrorExpandingCircle from "@/components/ui/ExpandingCircle/MirrorExpandingCircle";

export const Contacts = () => {
    return(
        <div className={styles.contactBlock}>
            <div className={styles.contactAncore} id={'contact'}>Contact</div>
            <ContactForm />
            <div className={styles.contactsBlock}>
                <div className={styles.contactsTitle}>contact us</div>
                <div className={styles.contactsWhitePaper}></div>
            </div>
            <div className={styles.contactsPointList}>
                <MirrorExpandingCircle text={'TG: @scam_devs'} />
                <MirrorExpandingCircle text={'LINKD: @scam_devs'} />
                <MirrorExpandingCircle text={'EMAIL: scamdevs@gmail.com'} />
            </div>
        </div>
    )
}