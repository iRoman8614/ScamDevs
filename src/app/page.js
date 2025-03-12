"use client"
import dynamic from 'next/dynamic';
import styles from './page.module.scss'
import Image from "next/image";
import HoverExpandCircles from "@/components/HoverExpandCircles/HoverExpandCircles";
import ExpandingCircle from "@/components/ExpandingCircle/ExpandingCircle";
import MirrorExpandingCircle from "@/components/ExpandingCircle/MirrorExpandingCircle";
import animationData from '../../public/animText.json';
import {useState} from "react";
import FoilCard from "@/components/holo-foil/FoilCard";
import Navbar from "@/components/navbar/Navbar";
import ContactForm from "@/components/form/ContactForm";

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });
const Tilt = dynamic(() => import('react-parallax-tilt'), { ssr: false });

const Plain = '/tgPlain.svg'
const phones = '/phones.png'
const nda = '/nda.png'

const TypeScript = '/Typescript.svg'
const css = '/CSS3.svg'
const mobx = '/mobx.svg'
const react = '/React.svg'
const next = '/Nextjs.svg'
const node = '/Node.svg'
const express = '/Expressjs.svg'
const adobe = '/Adobe.svg'
const coi = '/coi.svg'
const comet = '/cometeffector.svg'
const figma = '/figma.svg'
const js = '/JavaScript.svg'
const midjorney = '/Midjourney.svg'
const mj = '/mj.svg'
const procreate = '/procreate.svg'
const redux = '/redux.svg'
const spine = '/spine.svg'
const sql = '/sql.svg'
const gwImage = '/phoneImage.png'

export default function Home() {

    //конфиг анимации
    const [dimensions, setDimensions] = useState({
        width: '100vw',
        height: 'auto'
    })
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    // конец конфига анимации

    return(
        <main className={styles.main}>
            <Navbar />
            <div id={'header'}>
                <div className={styles.headerLightGreenBlock}>
                        <Lottie
                            options={defaultOptions}
                            height={dimensions.height}
                            width={dimensions.width}
                            isClickToPauseDisabled={true}
                        />
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

            <div className={styles.serviceBlock}>
                <div className={styles.serviceAncore} id={'services'}>Services</div>
                <div className={styles.weOffer}>we offer</div>
                <div className={styles.offerText}>Off-the-Beaten-Track Telegram Solutions for your business. We design,build and lead unique, powerful apps to grow your business inside Telegram.</div>
                <div className={styles.techLine}>
                    <div className={styles.technicBlock}>
                        <div className={styles.techElement}>
                            <Image src={TypeScript} alt={'ts'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image src={js} alt={'js'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image src={react} alt={'react'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image src={next} alt={'next'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image src={node} alt={'node'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image src={express} alt={'express'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image src={css} alt={'css'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image src={sql} alt={'sql'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image src={mobx} alt={'mobx'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image src={redux} alt={'redux'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image src={adobe} alt={'adobe'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image src={coi} alt={'coi'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image src={comet} alt={'comet'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image src={figma} alt={'figma'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image src={midjorney} alt={'midjorney'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image src={mj} alt={'mj'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image src={procreate} alt={'procreate'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image src={spine} alt={'spine'} width={80} height={80} />
                        </div>
                    </div>
                    <HoverExpandCircles />
                </div>
                <div className={styles.whyBlock}>
                    <div className={styles.whyTitle}>why</div>
                    <div className={styles.whyGroup}>
                        <div className={styles.whyText}>
                            <p className={styles.whyTextBoldLine}>Why use TMA?</p>
                            <p>Keep users engaged inside Telegram</p>
                            <p>Skip costly app development</p>
                            <p>No app store restrictions</p>
                            <p>Boost sales with a smooth experience</p>
                        </div>
                        <div className={styles.greenWhyBG} />
                        <div className={styles.whiteCloud1} />
                        <div className={styles.whiteCloud2} />
                        <div className={styles.whyText}>
                            <p className={styles.whyTextBoldLine}>TMA – Grow Your Business Inside Telegram</p>
                            <p>Turn Telegram into a sales powerhouse with custom apps—no need for expensive websites or slow mobile development. We help you convert visitors into buyers—seamlessly.
                            </p>
                        </div>
                        <div className={styles.whyGreenCloud1} />
                        <div className={styles.whyGreenCloud2} />
                    </div>
                    <div className={styles.whyPointsList}>
                        <ExpandingCircle text={'Modern design'} />
                        <ExpandingCircle text={'User-driven features'} />
                        <ExpandingCircle text={'Smooth animations'} />
                    </div>
                </div>
            </div>
            <div className={styles.projectBlock}>
                <div className={styles.projectAncore} id={'projects'}>Projects</div>
                <div>
                    <div className={styles.projectTitle}>GANG WARS TMA</div>
                    <div className={styles.projectDescriptionBlock}>
                        <div className={styles.projectDescription}>
                            We developed a Play-to-Earn game as a Telegram Mini App, where players could farm in-game coins, battle each other in PvP mode, and customize their characters. Seamlessly integrated into Telegram, it offered a smooth Web3 gaming experience.
                            <br/><br/>
                            <a>Key Features:</a><br/>
                            - Farming upgrade system<br/>
                            - Leaderboards & tiered leagues<br/>
                            - Multi-level referral system<br/>
                            - In-game quests & missions<br/>
                            - Clan system & tournaments<br/>
                            - TON wallet integration<br/>
                            <br/><br/>
                            <a>Development time:</a> 8 weeks.
                        </div>
                        <Tilt className={styles.tilt}>
                            <Image className={styles.projectImage} src={gwImage} alt={''} width={450} height={450} />
                        </Tilt>
                        <FoilCard
                            frontImage={gwImage}
                            backImage="https://cdn2.bulbagarden.net/upload/1/17/Cardback.jpg"
                            color1="#ec9bb6"
                            color2="#ccac6f"
                            width="fit-content"
                            height="auto"
                        />
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
                            <br/><br/><br/>
                            <a>Development time:</a> 4 weeks.
                            <div className={styles.projectPointList}>
                                <MirrorExpandingCircle text={'Support for multiple crypto assets'} />
                                <MirrorExpandingCircle text={'Real-time exchange rates'} />
                                <MirrorExpandingCircle text={'Instant and secure transactions'} />
                                <MirrorExpandingCircle text={'Simple and intuitive user interface'} />
                            </div>
                        </div>
                        <Tilt className={styles.tilt}>
                            <Image className={styles.projectImage} src={nda} alt={''} width={450} height={450} />
                        </Tilt>
                    </div>
                </div>
            </div>
            <div className={styles.contactBlock}>
                <div className={styles.contactAncore} id={'contact'}>Contact</div>
                <ContactForm />
            </div>
        </main>
    )
}