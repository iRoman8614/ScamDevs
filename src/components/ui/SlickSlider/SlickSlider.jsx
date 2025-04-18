import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';

import 'swiper/css';

import styles from './SlickSlider.module.scss';
import Image from "next/image";
import {useTranslation} from "react-i18next";
import i18n from '../../../i18n';


const DesktopLeftLoopSwiper = () => {
    const { t } = useTranslation();
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const slideData = [
        { id: 0, content: 'Активный 1', image: '/Anton.png', name: `${t("about.Anton")}`, role: "Product Manager"},
        { id: 1, content: 'Слайд 2', image: '/Eugene.png', name: `${t("about.Eugene")}`, role: "Business analyst"},
        { id: 2, content: 'Слайд 3', image: '/Ivan.png', name:  `${t("about.Ivan")}`, role: "UX/UI designer"},
        { id: 3, content: 'Слайд 4', image: '/Nickolay.png', name: `${t("about.Nickolay")}` , role: "Product Manager"},
        { id: 4, content: 'Слайд 5', image: '/Roman.png', name: `${t("about.Roman")}`, role: "Full-stack developer"},
    ];

    const handleSwiperInit = (swiperInstance) => {
        swiperRef.current = swiperInstance;
        setActiveIndex(swiperInstance.realIndex);
    };

    const handleSlideChange = (swiperInstance) => {
        setActiveIndex(swiperInstance.realIndex);
    };

    return (
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
                    delay: 4000,
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
    );
};

export default DesktopLeftLoopSwiper;