import styles from './Services.module.scss'
import { useState, useEffect } from 'react';
import Image from "next/image";
import HoverExpandCircles from "@/components/ui/HoverExpandCircles/HoverExpandCircles";
import ExpandingCircle from "@/components/ui/ExpandingCircle/ExpandingCircle";
import NavbarStatic from "@/components/navbar/NavbarStatic";

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

export const Services = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const elementTop = document.getElementById('slidingBlock').getBoundingClientRect().top;
            if (elementTop <= windowHeight * 0.75) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return(
        <section id='services'>
            <NavbarStatic type={'services'}/>
            <div className={styles.serviceBlock}>
                <div className={styles.weOffer}>we offer</div>
                <div className={styles.offerText}>Off-the-Beaten-Track Telegram Solutions for your business. We design,build and lead unique, powerful apps to grow your business inside Telegram.</div>
                <div className={styles.techLine}>
                    <div className={styles.technicBlock}>
                        <div className={styles.techElement}>
                            <Image className={styles.techImage} src={TypeScript} alt={'ts'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image className={styles.techImage} src={js} alt={'js'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image className={styles.techImage} src={react} alt={'react'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image className={styles.techImage} src={next} alt={'next'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image className={styles.techImage} src={node} alt={'node'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image className={styles.techImage} src={express} alt={'express'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image className={styles.techImage} src={css} alt={'css'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image className={styles.techImage} src={sql} alt={'sql'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image className={styles.techImage} src={mobx} alt={'mobx'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image className={styles.techImage} src={redux} alt={'redux'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image className={styles.techImage} src={adobe} alt={'adobe'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image className={styles.techImage} src={coi} alt={'coi'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image className={styles.techImage} src={comet} alt={'comet'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image className={styles.techImage} src={figma} alt={'figma'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image className={styles.techImage} src={midjorney} alt={'midjorney'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image className={styles.techImage} src={mj} alt={'mj'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image src={procreate} alt={'procreate'} width={80} height={80} />
                        </div>
                        <div className={styles.techElement}>
                            <Image className={styles.techImage} src={spine} alt={'spine'} width={80} height={80} />
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
            <div id="slidingBlock" className={isVisible ? styles.longSlideBlock : styles.shortSlideBlock}></div>
            <div className={isVisible ? styles.visible : styles.hiddenSlide}>
                <div className={styles.lightGreenCloud} />
                <div
                    className={styles.slidingBlock}
                >
                    <div>
                        <div className={styles.slidingWhiteCloud1} />
                        <div className={styles.slidingWhiteCloud2} />
                        <div className={styles.slidingWhiteCloud3} />
                    </div>
                    <div className={styles.slidingText}>
                        <div>
                            <div className={styles.whyText}>
                                <p className={styles.whyTextBoldLine}>Why Telegram Mini Apps?</p>
                                <p>Telegram Mini Apps provide an app-free experience inside one of the world's fastest-growing ecosystems. With over 900M+ active users, Telegram allows businesses to reach massive audiences without forcing users to download additional apps. Mini Apps offer easy onboarding, native payments, and deep engagement, making them a powerful tool for gaming, e-commerce, fintech, and community-driven platforms.</p>
                            </div>
                            <div className={styles.whyText}>
                                <p className={styles.whyTextBoldLine}>Our Expertise & Value</p>
                                <p>With hands-on experience in Telegram Mini App development, we understand the platform’s capabilities and best practices. We have a proven track record in building user-centric applications that focus on retention and engagement, ensuring that users keep coming back. Our team also excels in optimized performance, secure integrations, and scalable architecture, helping businesses leverage Telegram’s full potential for growth.</p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.slidingGreenCloud1} />
                            <div className={styles.slidingGreenCloud2} />
                            <div className={styles.slidingGreenCloud3} />
                            <div className={styles.slidingGreenCloud4} />
                            <div className={styles.slidingGreenCloud5} />
                            <div className={styles.slidingGreenCloud6} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}