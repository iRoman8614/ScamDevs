import styles from './Navbar.module.scss';
import Image from "next/image";

const NavbarStatic = ({type}) => {
    return (
        <>
            {
                type === 'services' &&
                <>
                    <div className={styles.navbarStatic}>
                        <a>
                            <Image className={styles.logoHiden} src={'/logo.svg'} alt={''} width={200} height={75} />
                        </a>
                        <a className={styles.showen}>Services</a>
                        <a>Projects</a>
                        <a>Contact</a>
                        <a>About</a>
                    </div>
                    <div className={styles.navBarStaticMobile}>
                        Services
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
                        <a>Services</a>
                        <a className={styles.showen}>Projects</a>
                        <a>Contact</a>
                        <a>About</a>
                    </div>
                    <div className={styles.navBarStaticMobile}>
                        Projects
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
                        <a>Services</a>
                        <a>Projects</a>
                        <a className={styles.showen}>Contact</a>
                        <a>About</a>
                    </div>
                    <div className={styles.navBarStaticMobile}>
                        Contact
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
                        <a>Services</a>
                        <a>Projects</a>
                        <a>Contact</a>
                        <a className={styles.showen}>About</a>
                    </div>
                    <div className={styles.navBarStaticMobile}>
                        About
                    </div>
                </>
            }
        </>
    );
};

export default NavbarStatic;
