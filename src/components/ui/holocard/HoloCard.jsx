import React, { useRef } from 'react';
import styles from './HoloCard.module.scss';

// Добавляем width и height в деструктуризацию пропсов
const HoloCard = ({ imageUrl, color1, color2, width, height }) => {
    const cardRef = useRef(null);

    const handleMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        let x, y;

        if (e.type === "touchmove") {
            if (!e.touches || e.touches.length === 0) return;
            x = e.touches[0].clientX - rect.left;
            y = e.touches[0].clientY - rect.top;
        } else {
            x = e.nativeEvent.offsetX;
            y = e.nativeEvent.offsetY;
        }

        const cardWidth = rect.width; // Используем реальную ширину элемента
        const cardHeight = rect.height; // Используем реальную высоту элемента

        const px = Math.abs(Math.floor(100 / cardWidth * x) - 100);
        const py = Math.abs(Math.floor(100 / cardHeight * y) - 100);
        const pa = (50 - px) + (50 - py);

        const lp = (50 + (px - 50) / 1.5);
        const tp = (50 + (py - 50) / 1.5);
        const px_spark = (50 + (px - 50) / 7);
        const py_spark = (50 + (py - 50) / 7);
        const p_opc = 20 + (Math.abs(pa) * 1.5);

        const ty = ((tp - 50) / 2) * -1;
        const tx = ((lp - 50) / 1.5) * 0.5;

        requestAnimationFrame(() => {
            if (!cardRef.current) return; // Доп. проверка на случай размонтирования
            cardRef.current.style.setProperty('--tx', `${tx}deg`);
            cardRef.current.style.setProperty('--ty', `${ty}deg`);
            cardRef.current.style.setProperty('--gradient-pos', `${lp}% ${tp}%`);
            cardRef.current.style.setProperty('--sparkle-pos', `${px_spark}% ${py_spark}%`);
            cardRef.current.style.setProperty('--sparkle-opacity', `${p_opc / 100}`);
        });
    };

    const handleLeave = () => {
        requestAnimationFrame(() => {
            if (!cardRef.current) return;
            cardRef.current.style.setProperty('--tx', '0deg');
            cardRef.current.style.setProperty('--ty', '0deg');
            // Сбрасываем позиции и прозрачность при уходе мыши
            cardRef.current.style.setProperty('--gradient-pos', '50% 50%');
            cardRef.current.style.setProperty('--sparkle-pos', '50% 50%');
            // Ставим прозрачность блесток в 0, т.к. по ховеру она теперь управляется CSS
            // Но переменная используется JS, лучше ее сбросить
            cardRef.current.style.setProperty('--sparkle-opacity', '0');
        });
    };

    // Объект стилей для карточки
    const cardStyle = {
        '--front': `url(${imageUrl})`,
        '--color1': color1,
        '--color2': color2,
        width: width,   // Устанавливаем ширину из пропсов
        height: height, // Устанавливаем высоту из пропсов
    };

    return (
        <div
            ref={cardRef}
            className={styles.card}
            style={cardStyle} // Применяем стили
            onMouseMove={handleMove}
            onTouchMove={handleMove} // Оставляем для тач устройств
            onMouseLeave={handleLeave}
            onTouchEnd={handleLeave}  // Оставляем для тач устройств
            onTouchCancel={handleLeave}// Оставляем для тач устройств
        >
            {/* Внутреннее содержимое */}
        </div>
    );
};

// Значения по умолчанию для новых пропсов
HoloCard.defaultProps = {
    imageUrl: 'https://assets.codepen.io/13471/charizard-gx.webp',
    color1: '#fac',
    color2: '#ddccaa',
    width: '240px',  // Примерная ширина по умолчанию
    height: '335px', // Примерная высота по умолчанию (соотношение сторон как у карт)
};

export default HoloCard;