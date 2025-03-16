'use client'
import React, { useState } from 'react';
import styles from './HoverExpandCircles.module.scss';

const items = ['TMA', 'AI products', 'Mobile apps', 'Web apps', 'UI/UX design', 'We utilize the top notch software. To deliver fast solutions for your business.'];

export default function HoverExpandCircles() {
    const [widths, setWidths] = useState(Array(items.length).fill(45));

    const handleMouseEnter = (index) => {
        const newWidths = items.map(() => 30 + Math.random() * 50);
        newWidths[index] = 120;
        setWidths(newWidths);
    };

    const handleMouseLeave = () => {
        setWidths(Array(items.length).fill(30));
    };

    return (
        <div className={styles.container}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={styles.item}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    <span className={styles.text}>{item}</span>
                    <div className={styles.space}>
                        <div
                            className={styles.circle}
                            style={{
                                width: `${widths[index]}px`,
                                height: '30px',
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
