'use client'
import React, { useState } from 'react';
import styles from './HoverExpandCircles.module.scss';

import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n';

export default function HoverExpandCircles() {
    const { t } = useTranslation();

    const items = [
        `${t('services.serviceList1')}`,
        `${t('services.serviceList2')}`,
        `${t('services.serviceList3')}`,
        `${t('services.serviceList4')}`,
        `${t('services.serviceList5')}`
    ];

    const [widths, setWidths] = useState(Array(items.length).fill(30));

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
