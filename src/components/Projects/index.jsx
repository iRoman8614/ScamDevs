import styles from './Project.module.scss'
import Image from "next/image";
import FoilCard from "@/components/ui/holo-foil/FoilCard";
import MirrorExpandingCircle from "@/components/ui/ExpandingCircle/MirrorExpandingCircle";
import dynamic from "next/dynamic";
import NavbarStatic from "@/components/navbar/NavbarStatic";
const Tilt = dynamic(() => import('react-parallax-tilt'), { ssr: false });

const gwImage = '/phoneImage.png'
const phones = '/phones.png'
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
                            {/*<a>Key Features:</a><br/>*/}
                            <div className={styles.projectPointList}>
                                <MirrorExpandingCircle text={'Farming upgrade system'} />
                                <MirrorExpandingCircle text={'Leaderboards & tiered leagues'} />
                                <MirrorExpandingCircle text={'Multi-level referral system'} />
                                <MirrorExpandingCircle text={'In-game quests & missions'} />
                                <MirrorExpandingCircle text={'Clan system & tournaments'} />
                                <MirrorExpandingCircle text={'TON wallet integration'} />
                            </div>
                            {/*- Farming upgrade system<br/>*/}
                            {/*- Leaderboards & tiered leagues<br/>*/}
                            {/*- Multi-level referral system<br/>*/}
                            {/*- In-game quests & missions<br/>*/}
                            {/*- Clan system & tournaments<br/>*/}
                            {/*- TON wallet integration<br/>*/}
                            <br/><br/>
                            <a>Development time:</a> 8 weeks.
                        </div>
                        <Tilt className={styles.tilt}>
                            <Image className={styles.projectImage} src={gwImage} alt={''} width={450} height={450} />
                        </Tilt>
                        {/*<FoilCard*/}
                        {/*    frontImage={gwImage}*/}
                        {/*    backImage="https://cdn2.bulbagarden.net/upload/1/17/Cardback.jpg"*/}
                        {/*    color1="#ec9bb6"*/}
                        {/*    color2="#ccac6f"*/}
                        {/*    width="fit-content"*/}
                        {/*    height="auto"*/}
                        {/*/>*/}
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
                        <Tilt className={styles.tilt}>
                            <Image className={styles.projectImage} src={nda} alt={''} width={250} height={250} />
                        </Tilt>
                    </div>
                </div>
            </div>
        </section>
    )
}