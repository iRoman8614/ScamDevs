import React, { useEffect, useRef } from 'react';
import styles from './Navbar.module.scss';
import Image from "next/image";
import Link from "next/link";

import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { i18n, t } = useTranslation();
    const navbarRef = useRef(null);

    useEffect(() => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        document.body.appendChild(canvas);

        const updateTextColor = () => {
            requestAnimationFrame(() => {
                if (navbarRef.current && navbarRef.current.offsetWidth > 0 && navbarRef.current.offsetHeight > 0) {
                    canvas.width = navbarRef.current.offsetWidth;
                    canvas.height = navbarRef.current.offsetHeight;
                    const bgData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
                    const textElements = navbarRef.current.querySelectorAll("a");
                    textElements.forEach((element) => {
                        const rect = element.getBoundingClientRect();
                        const x = rect.left - navbarRef.current.getBoundingClientRect().left;
                        const y = rect.top - navbarRef.current.getBoundingClientRect().top + rect.height / 2;
                        ctx.font = "bold 0px IstokWeb";
                        ctx.fillStyle = "transparent";
                        ctx.fillText(element.textContent, x, y);
                    });
                    const textData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    const textPixels = textData.data;
                    for (let i = 0; i < textPixels.length; i += 4) {
                        if (textPixels[i + 3] > 0) {
                            textPixels[i] = 255 - bgData[i];
                            textPixels[i + 1] = 255 - bgData[i + 1];
                            textPixels[i + 2] = 255 - bgData[i + 2];
                        }
                    }
                    ctx.putImageData(textData, 0, 0);
                    navbarRef.current.style.backgroundImage = `url(${canvas.toDataURL()})`;
                }
            });
        };

        updateTextColor();

        return () => {
            document.body.removeChild(canvas);
        };
    }, []);

    return (
        <div className={styles.navbar} ref={navbarRef}>
            <Link href="/#home">
                <Image className={styles.logo} src={'/logo.svg'} alt={''} width={200} height={75} />
            </Link>
            <a href="#services">{t('navbar.services')}</a>
            <a href="#projects">{t('navbar.projects')}</a>
            <a href="#contact">{t('navbar.contacts')}</a>
            <a href="#about">{t('navbar.about')}</a>
        </div>
    );
};

export default Navbar;