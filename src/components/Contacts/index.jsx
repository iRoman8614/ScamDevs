import styles from './contans.module.scss'
import ContactForm from "@/components/ui/form/ContactForm";
import MirrorExpandingCircle from "@/components/ui/ExpandingCircle/MirrorExpandingCircle";
import NavbarStatic from "@/components/navbar/NavbarStatic";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

export const Contacts = () => {
    const { t } = useTranslation();

    return(
        <section id='contact'>
            <NavbarStatic type={'contact'}/>
            <div className={styles.contactBlock}>
            <ContactForm />
            <div className={styles.contactsBlock}>
                <div className={styles.contactsTitle}>contact us</div>
                <div className={styles.contactsWhitePaper}>
                    {t('contacts.contactText')}
                    <br/><br/>
                    <p>{t('contacts.contactTextBold')}</p>
                </div>
            </div>
            <div className={styles.contactsPointList}>
                <Link href={'https://t.me/scam_devs'} target="_blank" rel="noopener noreferrer" className={styles.line}>
                    <Image src={'/telegramLogo.webp'} alt={''} width={50} height={50} />
                    <MirrorExpandingCircle text={'TG: @scam_devs'} />
                </Link>
                <Link href={'https://www.linkedin.com/groups/10066625/'} target="_blank" rel="noopener noreferrer" className={styles.line}>
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