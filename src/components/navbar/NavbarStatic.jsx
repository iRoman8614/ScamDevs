import styles from './Navbar.module.scss';
import Image from "next/image";

import { useTranslation } from 'react-i18next';

const NavbarStatic = ({type}) => {
    const { t } = useTranslation();

    return (
        <>
            {
                type === 'services' &&
                <>
                    <div className={styles.navbarStatic}>
                        <a>
                            <Image className={styles.logoHiden} src={'/logo.svg'} alt={''} width={200} height={75} />
                        </a>
                        <a className={styles.showen}>{t('navbar.services')}</a>
                        <a>{t('navbar.projects')}</a>
                        <a>{t('navbar.contacts')}</a>
                        <a>{t('navbar.about')}</a>
                    </div>
                    <div className={styles.navBarStaticMobile}>
                        {t('navbar.services')}
                    </div>
                </>
            }
            {
                type === 'projects' &&
                <>
                    <div className={styles.navbarStatic}>
                        <a>
                            <Image className={styles.logoHiden} src={'/logo.svg'} alt={''} width={200} height={75} />
                        </a>
                        <a>{t('navbar.services')}</a>
                        <a className={styles.showen}>{t('navbar.projects')}</a>
                        <a>{t('navbar.contacts')}</a>
                        <a>{t('navbar.about')}</a>
                    </div>
                    <div className={styles.navBarStaticMobile}>
                        {t('navbar.projects')}
                    </div>
                </>
            }
            {
                type === 'contact' &&
                <>
                    <div className={styles.navbarStatic}>
                        <a>
                            <Image className={styles.logoHiden} src={'/logo.svg'} alt={''} width={200} height={75} />
                        </a>
                        <a>{t('navbar.services')}</a>
                        <a>{t('navbar.projects')}</a>
                        <a className={styles.showen}>{t('navbar.contacts')}</a>
                        <a>{t('navbar.about')}</a>
                    </div>
                    <div className={styles.navBarStaticMobile}>
                        {t('navbar.contacts')}
                    </div>
                </>
            }
            {
                type === 'about' &&
                <>
                    <div className={styles.navbarStatic}>
                        <a>
                            <Image className={styles.logoHiden} src={'/logo.svg'} alt={''} width={200} height={75} />
                        </a>
                        <a>{t('navbar.services')}</a>
                        <a>{t('navbar.projects')}</a>
                        <a>{t('navbar.contacts')}</a>
                        <a className={styles.showen}>{t('navbar.about')}</a>
                    </div>
                    <div className={styles.navBarStaticMobile}>
                        {t('navbar.about')}
                    </div>
                </>
            }
        </>
    );
};

export default NavbarStatic;
