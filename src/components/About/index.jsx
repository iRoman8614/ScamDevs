import styles from './about.module.scss'
import Image from "next/image";
import SlickSlider from "@/components/ui/SlickSlider/SlickSlider";
import MySwiper from "@/components/ui/SlickSlider/SlickSlider";

const logo = '/logo.svg'
const miniLogo = '/sdminilogo.svg'

export const About = () => {
    const slides = [
        { content: "Slide 1" },
        { content: "Slide 2" },
        { content: "Slide 3" },
        { content: "Slide 4" },
        { content: "Slide 5" }
    ];

    return(
        <div className={styles.root}>
            <Image src={logo} alt={''} width={140} height={37} />
            <div>
                <div className={styles.textCloud} />
                <div className={styles.aboutText}>
                    We’re a team of tech junkies who live for turning wild ideas into real, working products. Whether it’s Web3, fintech, or entertainment, we’re all about pushing the boundaries and making things happen.
                    <br/><br/>
                    We don’t do things the boring way. We build fast, think outside the box, and create products that are smart, simple, and actually fun to use.
                    <br/><br/>
                    If you've got an idea that’s a little out there, we’re the team to bring it to life.
                </div>
            </div>
            <div className={styles.swiperBlock}>
                <div>
                    <div className={styles.swiperCloudGreen} />
                    <div className={styles.swiperCloud}>
                        GOT A GAME-CHANGING
                        CONCEPT? LETS MAKE IT LEGENDARY!
                    </div>
                </div>
                <div className={styles.swiper}>
                    <MySwiper slides={slides} />
                </div>
            </div>
            <div className={styles.footer}>
                <Image src={miniLogo} alt={''} width={50} height={50} />
                <div className={styles.footerText}>SCAMDEVS ENT 2025</div>
            </div>
        </div>
    )
}