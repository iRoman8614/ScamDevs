import styles from './contans.module.scss'
import ContactForm from "@/components/ui/form/ContactForm";
import MirrorExpandingCircle from "@/components/ui/ExpandingCircle/MirrorExpandingCircle";
import NavbarStatic from "@/components/navbar/NavbarStatic";
import Image from "next/image";
import Link from "next/link";

export const Contacts = () => {
    return(
        <section id='contact'>
            <NavbarStatic type={'contact'}/>
            <div className={styles.contactBlock}>
            <ContactForm />
            <div className={styles.contactsBlock}>
                <div className={styles.contactsTitle}>contact us</div>
                <div className={styles.contactsWhitePaper}>
                    Got an idea? Need a dev team that actually gets it? Whether it’s a new app, a custom platform, or just some solid tech advice, we’re here to help.
                    <br/><br/>
                    <p>Drop us a message, and let’s make things happen.</p>
                </div>
            </div>
            <div className={styles.contactsPointList}>
                <Link href={'https://t.me/scam_devs'} className={styles.line}>
                    <Image src={'/telegramLogo.webp'} alt={''} width={50} height={50} />
                    <MirrorExpandingCircle text={'TG: @scam_devs'} />
                </Link>
                <Link href={'https://www.linkedin.com/groups/10066625/'} className={styles.line}>
                    <Image src={'/linkedinLogo.webp'} alt={''} width={50} height={50} />
                    <MirrorExpandingCircle text={'LINKD: @scam_devs'} />
                </Link>
                <div className={styles.line}>
                    <Image src={'/sd.png'} alt={''} width={50} height={50} />
                    <MirrorExpandingCircle text={'EMAIL: scamdevs@gmail.com'} />
                </div>
            </div>
        </div>
        </section>
    )
}