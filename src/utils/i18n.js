// src/utils/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

const initTranslations = async (locale, namespaces, instance = i18n) => {
    const i18nInstance = instance || i18n.createInstance();

    if (!i18nInstance.isInitialized) {
        try {
            await i18nInstance
                .use(initReactI18next)
                .use(HttpApi)
                .init({
                    lng: locale,
                    fallbackLng: 'en',
                    ns: namespaces || ['translation'],
                    defaultNS: 'translation',
                    debug: true,
                    interpolation: { escapeValue: false },
                    backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
                });
        } catch (error) {
            console.error("Failed to initialize i18next:", error);
            throw error;
        }
    }
    return i18nInstance;
};

export default initTranslations;