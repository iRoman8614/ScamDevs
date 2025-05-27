import styles from './HeaderBlock.module.scss'
import {useEffect, useState} from "react";
import animationData from "../../../public/animText.json";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
const Plain = '/tgPlain.svg'
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });
const Arrow = '/CreateArrow.svg'
import { useTranslation } from 'react-i18next';

export const Header = () => {
    const { t } = useTranslation();
    const [planeStyle, setPlaneStyle] = useState({ transform: 'translate(0, 0)' });
    useEffect(() => {
        const handleScroll = () => {
            const newPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const target = windowHeight * 0.4; // 40% от верха экрана
            if (newPosition > target) {
                const offset = Math.min((newPosition - target) / 2, 300);
                const scale = Math.max(1 - (newPosition - target) / 800, 0.9);
                setPlaneStyle({ transform: `translate(${offset}px, -${offset}px) scale(${scale})` });
            } else {
                setPlaneStyle({ transform: 'translate(0, 0) scale(1)' });
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //конфиг анимации
    const [dimensions, setDimensions] = useState({
        width: 'auto',
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
        <div id={'home'} className={styles.root}>
            <div className={styles.headerLightGreenBlock}>
                <div className={styles.lottie}>
                    <Lottie
                        options={defaultOptions}
                        height={dimensions.height}
                        width={dimensions.width}
                        isClickToPauseDisabled={true}
                    />
                </div>
                <div className={styles.textFast}>
                    <p className={styles.firstFast}>FAST</p>
                    <p className={styles.secondFast}>FAST</p>
                </div>
            </div>
            <div className={styles.headerGreenBlock}>
                <div style={planeStyle} className={styles.tgPlaneAnim}>
                    <Image className={styles.tgPlane} src={Plain} alt={'tg'} width={300} height={300} />
                </div>
                <div className={styles.pinkPixel1}></div>
                <div className={styles.pinkPixel2}></div>
                <div className={styles.pinkPixel3}></div>
                <Link href={'/#form'} className={styles.createBtn}>
                    <div className={styles.create}>{t('header.create')}</div>
                    <div className={styles.now}>{t('header.now')}</div>
                </Link>
                {/*<Image className={styles.createArrow} src={Arrow} alt={'tg'} width={40} height={100} />*/}
                <div className={styles.pinkPixel4}></div>
                <div className={styles.pinkPixel5}></div>
            </div>
        </div>
    )
}