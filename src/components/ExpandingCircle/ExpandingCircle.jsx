'use client'
import React, { useState } from 'react';
import styles from './ExpandingCircle.module.scss';

export default function ExpandingCircle({ text }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={styles.container}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.circle} style={{
                width: isHovered ? '120px' : '30px'
            }}/>
            <span className={styles.text}>{text}</span>
        </div>
    );
}
