'use client'
import React, { useState } from 'react';
import styles from './MirrorExpandingCircle.module.scss';

export default function MirrorExpandingCircle({ text }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={styles.container}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
            <span className={styles.text}>{text}</span>
            <div
                className={styles.circle}
                style={{ width: isHovered ? '120px' : '20px' }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />
        </div>
    );
}
