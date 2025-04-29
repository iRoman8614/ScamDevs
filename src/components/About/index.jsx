import styles from './about.module.scss'
import Image from "next/image";
import DesktopLeftLoopSwiper from "@/components/ui/SlickSlider/SlickSlider";
import NavbarStatic from "@/components/navbar/NavbarStatic";

const logo = '/logo.svg'
const miniLogo = '/sdminilogo.svg'

import { useTranslation } from 'react-i18next';

export const About = () => {
    const { t } = useTranslation();

    return(
        <section id='about'>
            <NavbarStatic type={'about'}/>
            <div className={styles.root}>
                <Image src={logo} alt={''} width={140} height={37} />
                <div>
                    <div className={styles.textCloud} />
                    <div className={styles.aboutText}>
                        {t('about.about1')}<br/>
                        {t('about.about2')}<br/>
                        {t('about.about3')}<br/>
                        {t('about.about4')}<br/>
                        {t('about.about5')}
                    </div>
                </div>
                <div className={styles.swiperBlock}>
                    <div>
                        <div className={styles.swiperCloudGreen} />
                        <div className={styles.swiperCloud}>
                            {t('about.LEGENDARY')}
                        </div>
                    </div>
                    <div className={styles.swiper}>
                        <DesktopLeftLoopSwiper />
                    </div>
                </div>
                <div className={styles.footer}>
                    <Image src={miniLogo} alt={''} width={50} height={50} />
                    <div className={styles.footerText}>SCAMDEVS ENT 2025</div>
                </div>
            </div>
        </section>
    )
}