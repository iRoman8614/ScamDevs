import React, { useRef, useEffect, useState } from 'react';
import styles from './FoilCard.module.scss';
import dynamic from "next/dynamic";

const Tilt = dynamic(() => import('react-parallax-tilt'), { ssr: false });

const FoilCard = ({ frontImage, backImage, color1, color2 }) => {
    const cardRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const img = new Image();
        img.src = frontImage;

        img.onload = () => {
            setDimensions({ width: img.width, height: img.height });
        };

        img.onerror = () => {
            console.error('Ошибка загрузки изображения');
        };
    }, [frontImage]);

const handleMouseMove = (event) => {
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = ((event.clientX - left) / width) * 100;
    const y = ((event.clientY - top) / height) * 100;

    cardRef.current.style.setProperty('--mouseX', `${x}%`);
    cardRef.current.style.setProperty('--mouseY', `${y}%`);
};

    return (
        <Tilt
            ref={cardRef}
onMouseMove={handleMouseMove}
            className={styles.card}
            style={{
                '--front': `url(${frontImage})`,
                '--back': `url(${backImage})`,
                '--color1': color1,
                '--color2': color2,
                '--width': `${dimensions.width}px`, // Передаем ширину в CSS-переменную
                '--height': `${dimensions.height}px`, // Передаем высоту в CSS-переменную
                width: `${dimensions.width}px`,
                height: `${dimensions.height}px`,
            }}
        >
        </Tilt>
    );
};

export default FoilCard;