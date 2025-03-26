import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';

import 'swiper/css';

import styles from './SlickSlider.module.scss';

const slideData = [
    { id: 0, content: 'Активный 1'},
    { id: 1, content: 'Слайд 2'},
    { id: 2, content: 'Слайд 3'},
    { id: 3, content: 'Слайд 4'},
    { id: 4, content: 'Слайд 5'},
    { id: 5, content: 'Слайд 6'},
];

const DesktopLeftLoopSwiper = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

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
                modules={[A11y]}
                spaceBetween={20}
                grabCursor={true}
                loop={true}
                slidesPerView={1.5}
                centeredSlides={false}
                navigation={false}
                breakpoints={{
                    1024: {
                        slidesPerView: 'auto',
                        centeredSlides: false,
                        spaceBetween: 25,
                    },
                }}
                className={styles.mySwiper}
            >
                {slideData.map((slide) => (
                    <SwiperSlide key={slide.id} className={styles.swiperSlide}>
                        <div className={activeIndex === slide.id ? styles.activeSlideStyle : styles.baseSlideStyle}>
                            {slide.content}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default DesktopLeftLoopSwiper;