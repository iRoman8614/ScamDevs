import "./globals.scss";
import TranslationsProvider from './i18n-provider';
import i18n from '../i18n';

export const metadata = {
    title: "Scam Devs",
    description: "Scam devs team",
    icons: {
        icon: '/sd.png',
    },
};
const i18nNamespaces = ['translation'];

export default function RootLayout({ children }) {
    const initialLocale = i18n.i18n.defaultLocale || 'en';

    return (
        <html lang={initialLocale}>
        <body>
        <TranslationsProvider
            locale={undefined}
            namespaces={i18nNamespaces}
        >
            {children}
        </TranslationsProvider>
        </body>
        </html>
    );
}