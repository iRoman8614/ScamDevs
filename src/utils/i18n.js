import i18n from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

export const SUPPORTED_LANGUAGES = ['en', 'ru'];
export const DEFAULT_LANGUAGE = 'en';
export const COOKIE_NAME = 'i18next_lang';

const i18nextBaseConfig = {
    fallbackLng: DEFAULT_LANGUAGE,
    defaultNS: 'translation',
    ns: ['translation'],
    interpolation: { escapeValue: false },
    supportedLngs: SUPPORTED_LANGUAGES,
};

export const getTranslations = async (locale, namespaces = ['translation'], i18nInstance) => {
    const instance = i18nInstance || i18n.createInstance();

    if (!instance.isInitialized) {
        instance
            .use(resourcesToBackend((language, namespace) => import(`../../public/locales/${language}/${namespace}.json`)))
        await instance.init({
            ...i18nextBaseConfig,
            lng: locale,
            ns: namespaces,
        });
    } else {
        if (instance.language !== locale) {
            await instance.changeLanguage(locale);
        }
        await instance.loadNamespaces(namespaces);
    }

    return {
        t: instance.t,
        resources: instance.store.data,
        locale: instance.language,
    };
};

export const createClientI18nInstance = (locale, namespaces, resources) => {
    const { initReactI18next } = require('react-i18next');

    const instance = i18n.createInstance();
    instance
        .use(initReactI18next)
        .init({
            ...i18nextBaseConfig,
            lng: locale,
            ns: namespaces,
            resources: resources,
        });
    return instance;
};