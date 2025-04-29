import styles from './contans.module.scss'
import ContactForm from "@/components/ui/form/ContactForm";
import MirrorExpandingCircle from "@/components/ui/ExpandingCircle/MirrorExpandingCircle";
import NavbarStatic from "@/components/navbar/NavbarStatic";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

export const Contacts = () => {
    const { t } = useTranslation();

    return(
        <section id='contact'>
            <NavbarStatic type={'contact'}/>
            <div className={styles.contactBlock}>
                <ContactForm />
                <div className={styles.contactsBlock}>
                    <div className={styles.contactsTitle}>{t('contacts.contactUs')}</div>
                    <div className={styles.contactsWhitePaper}>
                     {t('contacts.contactText')}
                        <br/><br/>
                        <p>{t('contacts.contactTextBold')}</p>
                    </div>
                </div>
                <div className={styles.contactsPointList}>
                    <Link href={'https://t.me/scam_devs'} target="_blank" rel="noopener noreferrer" className={styles.line}>
                        <Image className={styles.socialImage} src={'/telegramLogo.webp'} alt={''} width={40} height={40} />
                        {/*<MirrorExpandingCircle text={'TG: @scam_devs'} />*/}
                        <div className={styles.social}>TG: @scam_devs</div>
                    </Link>
                    <Link href={'https://www.linkedin.com/groups/10066625/'} target="_blank" rel="noopener noreferrer" className={styles.line}>
                        <Image className={styles.socialImage}  src={'/linkedinLogo.webp'} alt={''} width={50} height={50} />
                        {/*<MirrorExpandingCircle text={'LINKD: @scam_devs'} />*/}
                        <div className={styles.social}>LINKD: @scam_devs</div>
                    </Link>
                    {/*<div className={styles.line}>*/}
                    {/*    <Image src={'/sd.png'} alt={''} width={50} height={50} />*/}
                    {/*    <div className={styles.social}>EMAIL: scamdevs@gmail.com</div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    )
}