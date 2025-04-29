import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';

import 'swiper/css';

import styles from './SlickSlider.module.scss';
import Image from "next/image";
import {useTranslation} from "react-i18next";


const DesktopLeftLoopSwiper = () => {
    const { t } = useTranslation();
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const slideData = [
        { id: 0, content: 'Слайд 1', image: '/Anton.png', name: `${t("about.Anton")}`, role: "Product Manager"},
        { id: 1, content: 'Слайд 2', image: '/Roman.png', name: `${t("about.Roman")}`, role: "Full-stack Developer"},
        { id: 2, content: 'Слайд 3', image: '/valvdov.png', name: `${t("about.Valerii")}`, role: "Full-stack Developer"},
        { id: 3, content: 'Слайд 4', image: '/Ivan.png', name:  `${t("about.Ivan")}`, role: "UX/UI Designer"},
        { id: 4, content: 'Слайд 5', image: '/Valeri.png', name: `${t("about.Valeri")}`, role: "QA Engineer"},
        { id: 5, content: 'Слайд 6', image: '/Nickolay.png', name: `${t("about.Nickolay")}` , role: "Product Manager"},
        { id: 6, content: 'Слайд 7', image: '/Mironov.png', name: `${t("about.Valerii")}`, role: "Content Manager"},
    ];

    const handleSwiperInit = (swiperInstance) => {
        swiperRef.current = swiperInstance;
        setActiveIndex(swiperInstance.realIndex);
    };

    const handleSlideChange = (swiperInstance) => {
        setActiveIndex(swiperInstance.realIndex);
    };

    const handleSlidePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleSlideNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <>
            <div className={styles.swiperContainer}>
                <Swiper
                    onSwiper={handleSwiperInit}
                    onSlideChange={handleSlideChange}
                    modules={[A11y, Autoplay]}
                    spaceBetween={20}
                    grabCursor={true}
                    loop={true}
                    slidesPerView={1}
                    centeredSlides={true}
                    navigation={false}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        720: {
                            slidesPerView: 'auto',
                            centeredSlides: false,
                            spaceBetween: 0,
                        },
                        1024: {
                            slidesPerView: 'auto',
                            centeredSlides: false,
                            spaceBetween: 25,
                        }
                    }}
                    className={styles.mySwiper}
                >
                    {slideData.map((slide) => (
                        <SwiperSlide key={slide.id} className={styles.swiperSlide}>
                            <div className={activeIndex === slide.id ? styles.activeSlideStyle : styles.baseSlideStyle}>
                                <Image className={styles.slideImage} src={slide.image} alt={''} width={170} height={230} />
                                <div className={styles.slideDesc}>
                                    {slide.name}<br/>
                                    {slide.role}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={styles.swiperBtnSet}>
                <div className={styles.swiperBtnPrev} onClick={handleSlidePrev}>
                    <svg width="20" height="20" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12L20 0.452994L20 23.547L0 12Z" fill="black"/>
                    </svg>
                </div>
                <div className={styles.swiperBtnNext} onClick={handleSlideNext}>
                    <svg width="20" height="20" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 12L0 0.452994L0 23.547L20 12Z" fill="black"/>
                    </svg>
                </div>
            </div>
        </>
    );
};

export default DesktopLeftLoopSwiper;