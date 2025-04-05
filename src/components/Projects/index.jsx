import styles from './Project.module.scss'
import MirrorExpandingCircle from "@/components/ui/ExpandingCircle/MirrorExpandingCircle";
import NavbarStatic from "@/components/navbar/NavbarStatic";
import HoloCard from "@/components/ui/holocard/HoloCard";
const gwImage = '/homescreen.png'
const gwImage2 = '/lobbyscreen.png'
const gwImage3 = '/pvpscreen.png'
const nda = '/nda.png'
export const Projects = () => {
    return(
        <section id='projects'>
            <NavbarStatic type={'projects'}/>
            <div className={styles.projectBlock}>
                <div>
                    <div className={styles.projectTitle}>GANG WARS TMA</div>
                    <div className={styles.projectDescriptionBlock}>
                        <div className={styles.projectDescription}>
                            We developed a Play-to-Earn game as a Telegram Mini App, where players could farm in-game coins, battle each other in PvP mode, and customize their characters. Seamlessly integrated into Telegram, it offered a smooth Web3 gaming experience.
                            <br/><br/>
                            <div className={styles.projectPointList}>
                                <MirrorExpandingCircle text={'Farming upgrade system'} />
                                <MirrorExpandingCircle text={'Leaderboards & tiered leagues'} />
                                <MirrorExpandingCircle text={'Multi-level referral system'} />
                                <MirrorExpandingCircle text={'In-game quests & missions'} />
                                <MirrorExpandingCircle text={'Clan system & tournaments'} />
                                <MirrorExpandingCircle text={'TON wallet integration'} />
                            </div>
                            <br/><br/>
                            <a>Development time:</a> 8 weeks.
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
                        <div className={styles.projectCloudText}>WANNA BUILD YOUR OWN<br/>WEB3 GAME?! LET`S GO!</div>
                        <div className={styles.projectCloud1} />
                        <div className={styles.projectCloud2} />
                    </div>
                </div>
                <div>
                    <div className={styles.projectTitle}>CRYPTO EXCHANGE BOT</div>
                    <div className={styles.projectDescriptionBlock}>
                        <div className={styles.projectDescription}>
                            We developed a Telegram bot that allows users to perform exchange operations between various crypto assets directly within the app. Integrated into Telegram’s ecosystem, it offers a user-friendly interface for quick and secure transactions.
                            <br/><br/>
                            <div className={styles.projectPointList}>
                                <MirrorExpandingCircle text={'Support for multiple crypto assets'} />
                                <MirrorExpandingCircle text={'Real-time exchange rates'} />
                                <MirrorExpandingCircle text={'Instant and secure transactions'} />
                                <MirrorExpandingCircle text={'Simple and intuitive user interface'} />
                            </div>
                            <br/>
                            <a>Development time:</a> 4 weeks.
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