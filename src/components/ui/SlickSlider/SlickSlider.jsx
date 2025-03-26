// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Controller, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import styles from './SlickSlider.module.scss';
//
// const MySwiper = ({ slides }) => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const swiperRef = useRef(null);
//     const handleSlideChange = (swiper) => {
//         setActiveIndex(swiper.realIndex);
//     };
//
//     const handleSlidePrev = () => {
//         console.log("Attempting to slide prev");
//         if (swiperRef.current) {
//             swiperRef.current.slidePrev();
//         }
//     };
//
//     const handleSlideNext = () => {
//         console.log("Attempting to slide next");
//         if (swiperRef.current) {
//             swiperRef.current.slideNext();
//         }
//     };
//
//     return (
//         <>
//             <div className={styles.containerSwiper}>
//             <Swiper
//                 modules={[Navigation, Controller, Autoplay]}
//                 slidesPerView={4}
//                 slidesPerGroup={1}
//                 centeredSlides={false}
//                 loop={true}
//                 navigation={false}
//                 touchRatio={1}
//                 onSwiper={(swiper) => swiperRef.current = swiper}
//                 onSlideChange={handleSlideChange}
//                 className={styles.swiper}
//                 slidesOffsetBefore={0}
//                 autoplay={{
//                     delay: 10000,
//                     disableOnInteraction: false,
//                 }}
//             >
//                 {slides.map((slide, index) => (
//                     <SwiperSlide key={index} className={index === activeIndex ? styles.activeSlide : styles.inactiveSlide}>
//                         {slide.content}
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//             <div className={styles.navigation}>
//                 <button className={styles.navLeft} onClick={handleSlidePrev}>
//                     <img src={'/ArrowWhite.png'} alt={''} width={15} height={15} />
//                 </button>
//                 {/*<div className={styles.caption}>*/}
//                 {/*    <span>{activeIndex}</span>*/}
//                 {/*</div>*/}
//                 <button className={styles.navRight} onClick={handleSlideNext}>
//                     <img src={'/ArrowWhite.png'} alt={''} width={15} height={15} />
//                 </button>
//             </div>
//         </>
//
//     );
// };
//
// export default MySwiper;

// import React from 'react';
// // Импортируем Swiper React компоненты
// import { Swiper, SwiperSlide } from 'swiper/react';
//
// // Импортируем НЕОБХОДИМЫЕ модули Swiper
// // Navigation для стрелок, Loop для бесконечной прокрутки, A11y для доступности
// import { Navigation, Loop, A11y } from 'swiper/modules';
//
// // Импортируем базовые стили Swiper
// import 'swiper/css';
// // Импортируем стили для модулей
// import 'swiper/css/navigation'; // Стили для стрелок
//
// // Добавляем кастомные стили
// import styles from './SlickSlider.module.scss';
//
// // Данные для слайдов (можно добавить больше для теста loop)
// const slideData = [
//     { id: 1, content: 'Активный 1', colorBase: '#e0e0e0', colorActive: '#00FF00' },
//     { id: 2, content: 'Слайд 2', colorBase: '#e0e0e0', colorActive: '#00FF00' },
//     { id: 3, content: 'Слайд 3', colorBase: '#e0e0e0', colorActive: '#00FF00' },
//     { id: 4, content: 'Слайд 4', colorBase: '#e0e0e0', colorActive: '#00FF00' },
//     { id: 5, content: 'Слайд 5', colorBase: '#e0e0e0', colorActive: '#00FF00' },
//     { id: 6, content: 'Слайд 6', colorBase: '#e0e0e0', colorActive: '#00FF00' },
// ];
//
// const DesktopLeftLoopSwiper = () => {
//     return (
//         <div className={styles.swiperContainer}>
//             <Swiper
//                 // Подключаем модули
//                 modules={[Navigation, A11y]}
//
//                 // --- Общие настройки ---
//                 spaceBetween={20} // Расстояние между слайдами
//                 grabCursor={true}  // Курсор "рука"
//                 loop={true}        // Бесконечная прокрутка ВКЛЮЧЕНА
//
//                 // --- Настройки для МОБИЛЬНОЙ версии (по умолчанию) ---
//                 slidesPerView={1.3} // Показываем чуть больше одного слайда
//                 centeredSlides={false} // Не центрируем (или true, если хотите центрировать на мобильных)
//                 navigation={false} // Отключаем стрелки для мобильных
//
//                 // --- Настройки для ДЕСКТОПНОЙ версии (>= 1024px) ---
//                 breakpoints={{
//                     1024: {
//                         slidesPerView: 'auto', // Авто ширина
//                         centeredSlides: false, // Активный (первый видимый) слева
//                         spaceBetween: 25,      // Расстояние для десктопа
//                         navigation: true,      // Включаем стрелки для десктопа
//                         // loop: true // Уже включен глобально
//                     },
//                 }}
//
//                 // Доступность
//                 a11y={{
//                     prevSlideMessage: 'Предыдущий слайд',
//                     nextSlideMessage: 'Следующий слайд',
//                 }}
//
//                 // Добавляем класс для легкой стилизации через CSS Modules
//                 className={styles.mySwiper}
//
//                 // Ключевой момент для обновления стилей активного/неактивных слайдов
//                 // Мы будем использовать CSS классы, которые Swiper добавляет автоматически
//                 // (.swiper-slide-active, .swiper-slide-next, и т.д.)
//             >
//                 {slideData.map((slide) => (
//                     // У SwiperSlide ДОЛЖЕН быть задан РАЗМЕР (width) в CSS
//                     // для корректной работы slidesPerView: 'auto'
//                     <SwiperSlide key={slide.id} className={styles.swiperSlide}>
//                         {/* Внутренний блок для контента и стилизации фона */}
//                         <div className={styles.slideInner}>
//                             {slide.content}
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };
//
// export default DesktopLeftLoopSwiper;

import React, { useRef, useState } from 'react'; // Импортируем useRef и useState
import { Swiper, SwiperSlide } from 'swiper/react';
import { Loop, A11y } from 'swiper/modules'; // Убираем Navigation, т.к. будут кастомные кнопки

import 'swiper/css';
// import 'swiper/css/navigation'; // Больше не нужно, т.к. navigation: false

import styles from './SlickSlider.module.scss';

const slideData = [
    { id: 0, content: 'Активный 1', colorBase: '#e0e0e0', colorActive: '#00FF00' },
    { id: 1, content: 'Слайд 2', colorBase: '#e0e0e0', colorActive: '#00FF00' },
    { id: 2, content: 'Слайд 3', colorBase: '#e0e0e0', colorActive: '#00FF00' },
    { id: 3, content: 'Слайд 4', colorBase: '#e0e0e0', colorActive: '#00FF00' },
    { id: 4, content: 'Слайд 5', colorBase: '#e0e0e0', colorActive: '#00FF00' },
    { id: 5, content: 'Слайд 6', colorBase: '#e0e0e0', colorActive: '#00FF00' },
];

const DesktopLeftLoopSwiper = () => {
    // Создаем ref для хранения экземпляра Swiper
    const swiperRef = useRef(null);
    // Состояние для хранения активного индекса (реального, без учета дублей loop)
    const [activeIndex, setActiveIndex] = useState(0);

    // Функция для получения и сохранения экземпляра Swiper при инициализации
    const handleSwiperInit = (swiperInstance) => {
        // Сохраняем экземпляр в ref
        swiperRef.current = swiperInstance;
        console.log("Swiper instance saved:", swiperRef.current);
        // Устанавливаем начальный активный индекс
        setActiveIndex(swiperInstance.realIndex);
    };

    // Функция, вызываемая при каждой смене слайда
    const handleSlideChange = (swiperInstance) => {
        console.log("Slide changed to index:", swiperInstance.realIndex);
        setActiveIndex(swiperInstance.realIndex);
    };

    return (
        // Добавляем position: relative, если еще не добавлено, для позиционирования кнопок
        <div className={styles.swiperContainer}>
            <Swiper
                onSwiper={handleSwiperInit} // Вызывается один раз при инициализации
                onSlideChange={handleSlideChange} // Вызывается при каждой смене слайда
                modules={[A11y]} // Убрали Navigation
                spaceBetween={20}
                grabCursor={true}
                loop={true}
                slidesPerView={1.3} // Мобильные
                centeredSlides={false} // Мобильные
                navigation={false} // <--- ВАЖНО

                breakpoints={{
                    1024: {
                        slidesPerView: 'auto',
                        centeredSlides: false,
                        spaceBetween: 25,
                    },
                }}
                className={styles.mySwiper}
            >
                {slideData.map((slide, index) => (
                    <SwiperSlide key={slide.id} className={styles.swiperSlide}>
                        <div className={activeIndex === index ? styles.activeSlideStyle : styles.baseSlideStyle}>
                            {slide.content}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default DesktopLeftLoopSwiper;