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
            <div id={'services'}>
                <div>we offer</div>
                <div>text</div>
                <div>technologis</div>
                <div>tma text</div>
                <div>text more</div>
                <div>slider</div>
            </div>
        </>
    )
}