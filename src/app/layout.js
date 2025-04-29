import "./globals.scss";
import { headers, cookies } from 'next/headers';
import parser from 'accept-language-parser';
import TranslationsProvider from './i18n-provider';
import { getTranslations, SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, COOKIE_NAME } from '@/utils/i18n';

export const metadata = {
    title: "Scam Devs",
    description: "Scam devs team",
    icons: {
        icon: '/sd.png',
    },
};
const i18nNamespaces = ['translation', 'common'];

async function detectLocale() {
    const cookieStore = cookies();
    const headersList = headers();

    try {
        const langCookie = cookieStore.get(COOKIE_NAME)?.value;
        if (langCookie && SUPPORTED_LANGUAGES.includes(langCookie)) {
            return langCookie;
        }
    } catch (error) {
        console.error("[DetectLocale] Error reading cookie:", error);
    }

    const acceptLangHeader = headersList.get('accept-language');
    if (acceptLangHeader) {
        try {
            const bestMatch = parser.pick(SUPPORTED_LANGUAGES, acceptLangHeader, { loose: true });
            if (bestMatch) {
                return bestMatch;
            }
        } catch (error) {
        }
    }

    return DEFAULT_LANGUAGE;
}

export default async function RootLayout({ children }) {
    const locale = await detectLocale();
    const { resources } = await getTranslations(locale, i18nNamespaces);

    return (
        <html lang={locale}>
        <body>
        <TranslationsProvider
            locale={locale}
            namespaces={i18nNamespaces}
            resources={resources}
        >
            {children}
        </TranslationsProvider>
        </body>
        </html>
    );
}