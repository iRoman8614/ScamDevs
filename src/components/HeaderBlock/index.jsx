import styles from './HeaderBlock.module.scss'
import {useState} from "react";
import animationData from "../../../public/animText.json";
import Image from "next/image";
import Lottie from 'react-lottie'
const Plain = '/tgPlain.svg'

export const Header = () => {
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
        <div id={'header'}>
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
                <Image className={styles.tgPlane} src={Plain} alt={'tg'} width={300} height={300} />
                <div className={styles.pinkPixel1}></div>
                <div className={styles.pinkPixel2}></div>
                <div className={styles.pinkPixel3}></div>
                <div className={styles.pinkPixel4}></div>
                <div className={styles.pinkPixel5}></div>
            </div>
        </div>
    )
}