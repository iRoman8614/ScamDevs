import styles from './page.module.scss'
import Image from "next/image";

const Plain = '/tgPlain.svg'
export default function Home() {
    return(
        <>
            <div id={'header'}>
                <div className={styles.headerLightGreenBlock}>
                    <div className={styles.thinkText}>
                        <a className={styles.T}>T</a>
                        <a>H</a>
                        <a>I</a>
                        <a>N</a>
                        <a>K</a>
                    </div>
                    <div className={styles.textBigCode}>
                        <div className={styles.textBig}>BIG</div>
                        <div className={styles.textCode}>CODE</div>
                    </div>
                    <div className={styles.textFast}>
                        <p className={styles.firstFast}>FAST</p>
                        <p className={styles.secondFast}>FAST</p>
                    </div>
                </div>
                <div className={styles.headerGreenBlock}>
                    <Image className={styles.tgPlane} src={Plain} alt={'tg'} width={300} height={300} />
                    <div className={styles.pinkPixel1}></div>
                    <div className={styles.pinkPixel2}></div>
                    <div className={styles.pinkPixel3}></div>
                    <div className={styles.pinkPixel4}></div>
                    <div className={styles.pinkPixel5}></div>
                </div>
            </div>
            <div className={styles.serviceBlock} id={'services'}>
                <div className={styles.serviceAncore}>Services</div>
                <div className={styles.weOffer}>we offer</div>
                <div className={styles.offerText}>Off-the-Beaten-Track Telegram Solutions for your business. We design,build and lead unique, powerful apps to grow your business inside Telegram.</div>
                <div className={styles.techLine}>
                    <div className={styles.technicBlock}>
                        <div className={styles.techElement}></div>
                        <div className={styles.techElement}></div>
                        <div className={styles.techElement}></div>
                        <div className={styles.techElement}></div>
                        <div className={styles.techElement}></div>
                        <div className={styles.techElement}></div>
                        <div className={styles.techElement}></div>
                        <div className={styles.techElement}></div>
                        <div className={styles.techElement}></div>
                        <div className={styles.techElement}></div>
                        <div className={styles.techElement}></div>
                        <div className={styles.techElement}></div>
                        <div className={styles.techElement}></div>
                        <div className={styles.techElement}></div>
                        <div className={styles.techElement}></div>
                        <div className={styles.techElement}></div>
                        <div className={styles.techElement}></div>
                        <div className={styles.techElement}></div>
                    </div>
                    <div className={styles.tmaText}>
                        TMA<br/>
                        AI products<br/>
                        Mobile apps<br/>
                        Web apps<br/>
                        UI/UX design<br/>
                        We utilize the <br/>
                        top notch software.
                    </div>
                </div>
                <div className={styles.tmaDescription}>
                    TMA<br/>
                    Grow and Expand
                </div>
                <div className={styles.greenClouds}>
                    <div className={styles.greenCloud1}></div>
                    <div className={styles.greenCloud2}></div>
                    <div className={styles.greenCloud3}></div>
                    <div className={styles.greenCloud4}></div>
                </div>
                <div className={styles.slideLine}>
                    <div className={styles.slide}></div>
                </div>
            </div>
            <div className={styles.projectBlock} id={'projects'}>
                <div>
                    <div>
                        <div>GANG WARS TMA</div>
                        <div>
                            We developed a Play-to-Earn game as a Telegram Mini App, where players could farm in-game coins, battle each other in PvP mode, and customize their characters. Seamlessly integrated into Telegram, it offered a smooth Web3 gaming experience.
                            <br/><br/>
                            Key Features:
                            - Farming upgrade system
                            - Leaderboards & tiered leagues
                            - Multi-level referral system
                            - In-game quests & missions
                            - Clan system & tournaments
                            - TON wallet integration
                            <br/><br/>
                            Development time: 8 weeks.
                        </div>
                        <div>
                            WANNA BUILD YOUR OWN
                            WEB3 GAME?! LET`S GO!
                        </div>
                        <div>image</div>
                    </div>
                    <div></div>
                </div>
                <div>exchange bot</div>
            </div>
        </>
    )
}