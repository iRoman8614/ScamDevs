import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Controller, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './SlickSlider.module.scss';

const MySwiper = ({ slides }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);
    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
    };

    const handleSlidePrev = () => {
        console.log("Attempting to slide prev");
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleSlideNext = () => {
        console.log("Attempting to slide next");
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <>
            <div className={styles.containerSwiper}>
            <Swiper
                modules={[Navigation, Controller, Autoplay]}
                slidesPerView={4}
                slidesPerGroup={1}
                centeredSlides={false}
                loop={true}
                navigation={false}
                touchRatio={1}
                onSwiper={(swiper) => swiperRef.current = swiper}
                onSlideChange={handleSlideChange}
                className={styles.swiper}
                slidesOffsetBefore={0}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className={index === activeIndex ? styles.activeSlide : styles.inactiveSlide}>
                        {slide.content}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
            <div className={styles.navigation}>
                <button className={styles.navLeft} onClick={handleSlidePrev}>
                    <img src={'/ArrowWhite.png'} alt={''} width={15} height={15} />
                </button>
                {/*<div className={styles.caption}>*/}
                {/*    <span>{activeIndex}</span>*/}
                {/*</div>*/}
                <button className={styles.navRight} onClick={handleSlideNext}>
                    <img src={'/ArrowWhite.png'} alt={''} width={15} height={15} />
                </button>
            </div>
        </>

    );
};

export default MySwiper;
