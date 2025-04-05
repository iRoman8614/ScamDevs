import React, { useEffect, useRef } from 'react';
import styles from './Navbar.module.scss';
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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

    // useEffect(() => {
    //     const canvas = document.createElement('canvas');
    //     const ctx = canvas.getContext('2d', { willReadFrequently: false, alpha: true }); // Alpha: true - важно!
    //     const navbarElement = navbarRef.current;
    //     if (!navbarElement) return;
    //
    //     const updateTextColor = () => {
    //         if (navbarElement.offsetWidth > 0 && navbarElement.offsetHeight > 0) {
    //             const dpr = window.devicePixelRatio || 1;
    //             canvas.width = navbarElement.offsetWidth * dpr;
    //             canvas.height = navbarElement.offsetHeight * dpr;
    //             canvas.style.width = `${navbarElement.offsetWidth}px`;
    //             canvas.style.height = `${navbarElement.offsetHeight}px`;
    //             ctx.scale(dpr, dpr);
    //             ctx.clearRect(0, 0, canvas.width, canvas.height);
    //             const textElements = navbarElement.querySelectorAll("a");
    //             textElements.forEach((element) => {
    //                 const styles = window.getComputedStyle(element);
    //                 const font = styles.font;
    //                 const color = 'white';
    //                 const rect = element.getBoundingClientRect();
    //                 const navRect = navbarElement.getBoundingClientRect();
    //                 const x = Math.round(rect.left - navRect.left);
    //                 const y = Math.round(rect.top - navRect.top) + parseFloat(styles.paddingTop || '0');
    //                 ctx.font = font;
    //                 ctx.fillStyle = color;
    //                 ctx.textBaseline = 'top';
    //                 ctx.fillText(element.textContent || '', x, y);
    //             });
    //             navbarElement.style.backgroundImage = `url(${canvas.toDataURL()})`;
    //             navbarElement.style.backgroundSize = `${navbarElement.offsetWidth}px ${navbarElement.offsetHeight}px`;
    //             textElements.forEach(el => {
    //                 el.style.color = 'transparent';
    //             });
    //             const logoLink = navbarElement.querySelector(`.${styles.logo}`)?.closest('a');
    //             if (logoLink) {
    //                 logoLink.style.color = 'inherit';
    //             }
    //         }
    //     };
    //     updateTextColor();
    // }, []);

    return (
        <div className={styles.navbar} ref={navbarRef}>
            <Link href="/#home">
                <Image className={styles.logo} src={'/logo.svg'} alt={''} width={200} height={75} />
            </Link>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
    );
};

export default Navbar;

// import React, { useEffect, useRef } from 'react';
// import styles from './Navbar.module.scss';
// import Image from "next/image";
// import Link from "next/link";
//
// const Navbar = () => {
//     const navbarRef = useRef(null);
//     const canvasRef = useRef(null); // Ref для canvas для переиспользования
//
//     useEffect(() => {
//         const navbarElement = navbarRef.current;
//         if (!navbarElement) return;
//
//         // --- Canvas Setup ---
//         if (!canvasRef.current) {
//             canvasRef.current = document.createElement('canvas');
//         }
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext('2d', { alpha: true });
//         if (!ctx) {
//             console.error("Failed to get 2D context");
//             return;
//         }
//         const updateCanvasContent = () => {
//             if (!navbarElement || navbarElement.offsetWidth <= 0 || navbarElement.offsetHeight <= 0) {
//                 return;
//             }
//             const dpr = window.devicePixelRatio || 1;
//             const navRect = navbarElement.getBoundingClientRect();
//             const canvasWidth = Math.round(navRect.width * dpr);
//             const canvasHeight = Math.round(navRect.height * dpr);
//             if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
//                 canvas.width = canvasWidth;
//                 canvas.height = canvasHeight;
//                 canvas.style.width = `${navRect.width}px`;
//                 canvas.style.height = `${navRect.height}px`;
//                 ctx.scale(dpr, dpr);
//             } else {
//                 ctx.clearRect(0, 0, navRect.width, navRect.height);
//             }
//             const linkElements = navbarElement.querySelectorAll("a");
//             linkElements.forEach((element) => {
//                 if (element.querySelector(`.${styles.logo}`)) {
//                     return;
//                 }
//                 const styles = window.getComputedStyle(element);
//                 const font = styles.font;
//                 const color = 'white';
//                 const textContent = (element.textContent || '').toUpperCase();
//                 const elemRect = element.getBoundingClientRect();
//                 const paddingLeft = parseFloat(styles.paddingLeft || '0');
//                 const paddingTop = parseFloat(styles.paddingTop || '0');
//                 const x = elemRect.left - navRect.left + paddingLeft;
//                 const y = elemRect.top - navRect.top + paddingTop;
//
//                 ctx.font = font;
//                 ctx.fillStyle = color;
//                 ctx.textAlign = 'left';
//                 ctx.textBaseline = 'top';
//
//                 ctx.fillText(textContent, Math.round(x), Math.round(y));
//             });
//
//             navbarElement.style.backgroundImage = `url(${canvas.toDataURL()})`;
//             navbarElement.style.backgroundSize = `${navRect.width}px ${navRect.height}px`;
//             navbarElement.style.backgroundRepeat = 'no-repeat';
//             navbarElement.style.backgroundPosition = 'top left';
//
//             linkElements.forEach(el => {
//                 if (!el.querySelector(`.${styles.logo}`)) {
//                     if (el.style.color !== 'transparent') {
//                         el.style.color = 'transparent';
//                     }
//                 } else {
//                     if (el.style.color === 'transparent') {
//                         el.style.color = '';
//                     }
//                 }
//             });
//         };
//
//         async function init() {
//             try {
//                 await document.fonts.load('bold 1em IstokWeb');
//                 console.log("Font 'bold IstokWeb' loaded.");
//                 updateCanvasContent();
//             } catch (error) {
//                 console.error("Font loading failed:", error);
//                 updateCanvasContent();
//             }
//         }
//         init();
//
//         const resizeObserver = new ResizeObserver(() => {
//             updateCanvasContent();
//         });
//         resizeObserver.observe(navbarElement);
//
//         return () => {
//             resizeObserver.disconnect();
//             if (navbarRef.current) {
//                 navbarRef.current.style.backgroundImage = 'none';
//                 navbarRef.current.querySelectorAll("a").forEach(el => {
//                     el.style.color = '';
//                 });
//             }
//         };
//
//     }, []);
//
//     return (
//         <div className={styles.navbar} ref={navbarRef}>
//             <Link href="/#home">
//                 <Image className={styles.logo} src={'/logo.svg'} alt={'Logo'} width={200} height={75} priority />
//             </Link>
//             <a href="#services">Services</a>
//             <a href="#projects">Projects</a>
//             <a href="#contact">Contact</a>
//             <a href="#about">About</a>
//         </div>
//     );
// };
//
// export default Navbar;