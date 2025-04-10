import styles from './Project.module.scss'
import MirrorExpandingCircle from "@/components/ui/ExpandingCircle/MirrorExpandingCircle";
import NavbarStatic from "@/components/navbar/NavbarStatic";
import HoloCard from "@/components/ui/holocard/HoloCard";
const gwImage = '/homescreen.png'
const gwImage2 = '/lobbyscreen.png'
const gwImage3 = '/pvpscreen.png'
const nda = '/nda.png'
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

export const Projects = () => {
    const { t } = useTranslation();

    return(
        <section id='projects'>
            <NavbarStatic type={'projects'}/>
            <div className={styles.projectBlock}>
                <div>
                    <div className={styles.projectTitle}>GANG WARS TMA</div>
                    <div className={styles.projectDescriptionBlock}>
                        <div className={styles.projectDescription}>
                            {t('projects.GWTMA')}
                            <br/><br/>
                            <div className={styles.projectPointList}>
                                <MirrorExpandingCircle text={`${t('projects.GW1')}`} />
                                <MirrorExpandingCircle text={`${t('projects.GW2')}`} />
                                <MirrorExpandingCircle text={`${t('projects.GW3')}`} />
                                <MirrorExpandingCircle text={`${t('projects.GW4')}`} />
                                <MirrorExpandingCircle text={`${t('projects.GW5')}`} />
                                <MirrorExpandingCircle text={`${t('projects.GW6')}`} />
                            </div>
                            <br/><br/>
                            <a>
                                {t('projects.DevelopTime')}
                            </a> {t('projects.8weeks')}
                        </div>
                        <div className={styles.cardSet}>
                            <div className={styles.card1}>
                                <HoloCard
                                    imageUrl={gwImage}
                                    color1="#ec9bb6"
                                    color2="#ccac6f"
                                    width="170px"
                                    height="340px"/>
                            </div>
                            <div className={styles.card2}>
                                <HoloCard
                                    imageUrl={gwImage2}
                                    color1="#ec9bb6"
                                    color2="#ccac6f"
                                    width="170px"
                                    height="340px"/>
                            </div>
                            <div className={styles.card3}>
                                <HoloCard
                                    imageUrl={gwImage3}
                                    color1="#ec9bb6"
                                    color2="#F200FF"
                                    width="170px"
                                    height="340px"/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.projectCloud}>
                        <div className={styles.projectCloudText}>{t('projects.WANNABUILD')}<br/> {t('projects.WEB3')}</div>
                        <div className={styles.projectCloud1} />
                        <div className={styles.projectCloud2} />
                    </div>
                </div>
                <div>
                    <div className={styles.projectTitle}>{t('projects.bot')}</div>
                    <div className={styles.projectDescriptionBlock}>
                        <div className={styles.projectDescription}>
                            {t('projects.botdesc')}
                            <br/><br/>
                            <div className={styles.projectPointList}>
                                <MirrorExpandingCircle text={`${t('projects.bot1')}`} />
                                <MirrorExpandingCircle text={`${t('projects.bot2')}`} />
                                <MirrorExpandingCircle text={`${t('projects.bot3')}`} />
                                <MirrorExpandingCircle text={`${t('projects.bot4')}`} />
                            </div>
                            <br/>
                            <a>{t('projects.DevelopTime')} </a>{t('projects.4weeks')}
                        </div>
                        <div className={styles.ndaBlock}>
                            <HoloCard
                                imageUrl={nda}
                                color1="#00E5FF"
                                color2="#F200FF"
                                width="300px"
                                height="300px"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}