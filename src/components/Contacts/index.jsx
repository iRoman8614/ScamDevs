import styles from './contans.module.scss'
import ContactForm from "@/components/ui/form/ContactForm";
import MirrorExpandingCircle from "@/components/ui/ExpandingCircle/MirrorExpandingCircle";
import NavbarStatic from "@/components/navbar/NavbarStatic";

export const Contacts = () => {
    return(
        <section id='contact'>
            <NavbarStatic type={'contact'}/>
            <div className={styles.contactBlock}>
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
        </section>
    )
}