// import i18n from 'i18next';
// import Backend from 'i18next-http-backend';
// import { initReactI18next } from 'react-i18next';
//
// i18n
//     .use(Backend)
//     .use(initReactI18next)
//     .init({
//         fallbackLng: 'en',
//         debug: true,
//         backend: {
//             loadPath: '/locales/{{lng}}/translation.json',
//         },
//         interpolation: {
//             escapeValue: false
//         }
//     });
//
// export default i18n;

// next-i18next.config.js
const path = require('path');

module.exports = {
    i18n: {
        locales: ['en', 'ru'],
        defaultLocale: 'en',
        localePath: path.resolve('./public/locales'),
    },
};