// // app/i18n-provider.js
// 'use client';
//
// import { I18nextProvider } from 'react-i18next';
// import initTranslations from '../utils/i18n';
// import { createInstance } from 'i18next';
// import { useEffect, useState } from 'react';
//
// export default function TranslationsProvider({
//                                                  children,
//                                                  locale,
//                                                  namespaces
//                                              }) {
//     const i18n = createInstance();
//     const [initialized, setInitialized] = useState(false);
//
//     useEffect(() => {
//         const initialize = async () => {
//             // Вызываем импортированную функцию
//             await initTranslations(locale, namespaces, i18n);
//             setInitialized(true);
//         };
//         initialize();
//     }, [locale, namespaces]);
//
//     if (!initialized) {
//         return null;
//     }
//     return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
// }
// app/i18n-provider.js
'use client';

import { I18nextProvider } from 'react-i18next';
import initTranslations from '@/utils/i18n';
import { createInstance } from 'i18next';
import { useEffect, useState } from 'react';

export default function TranslationsProvider({
                                                 children,
                                                 locale,
                                                 namespaces
                                             }) {
    const [i18nInstance] = useState(() => createInstance());
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        let active = true;

        const initialize = async () => {
            console.log(`[Provider] Initializing for ${locale}...`); // Лог
            try {
                await initTranslations(locale, namespaces, i18nInstance);
                if (active) {
                    console.log(`[Provider] Initialization complete for ${locale}.`); // Лог
                    setInitialized(true);
                }
            } catch (error) {
                console.error("[Provider] Failed to initialize translations:", error);
            }
        };
        if (!i18nInstance.isInitialized || i18nInstance.language !== locale) {
            initialize();
        } else {
            if (active) setInitialized(true);
        }

        return () => {
            active = false;
        };
    }, [locale, namespaces, i18nInstance]);

    if (!initialized) {
        console.log("[Provider] Returning null (not initialized).");
        return null;
    }

    console.log("[Provider] Rendering children.");
    return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
}