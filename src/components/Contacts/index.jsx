import styles from './contans.module.scss'
import ContactForm from "@/components/ui/form/ContactForm";
import MirrorExpandingCircle from "@/components/ui/ExpandingCircle/MirrorExpandingCircle";
import NavbarStatic from "@/components/navbar/NavbarStatic";
import Image from "next/image";

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
                <div className={styles.line}>
                    <Image src={'/telegramLogo.webp'} alt={''} width={60} height={60} />
                    <MirrorExpandingCircle text={'TG: @scam_devs'} />
                </div>
                <div className={styles.line}>
                    <Image src={'/linkedinLogo.webp'} alt={''} width={60} height={60} />
                    <MirrorExpandingCircle text={'LINKD: @scam_devs'} />
                </div>
                <div className={styles.line}>
                    <Image src={'/sd.png'} alt={''} width={60} height={60} />
                    <MirrorExpandingCircle text={'EMAIL: scamdevs@gmail.com'} />
                </div>
            </div>
        </div>
        </section>
    )
}