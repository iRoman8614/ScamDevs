import "./globals.scss";
import { headers, cookies } from 'next/headers';
import parser from 'accept-language-parser';
import TranslationsProvider from './i18n-provider';
import { getTranslations, SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, COOKIE_NAME } from '@/utils/i18n';
import Script from 'next/script';
import Metrika from './Metrika';

// Получаем ID из .env файла
const YANDEX_METRIKA_ID = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;

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
        {YANDEX_METRIKA_ID && <Metrika />}
        {YANDEX_METRIKA_ID && (
            <Script id="yandex-metrika" strategy="afterInteractive">
                {`
                    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();
                    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                    ym(${YANDEX_METRIKA_ID}, "init", {
                         clickmap:true,
                         trackLinks:true,
                         accurateTrackBounce:true,
                         webvisor: true // Включить Вебвизор (опционально)
                    });
                  `}
            </Script>
        )}
        {YANDEX_METRIKA_ID && (
            <noscript>
                <div>
                    <img src={`https://mc.yandex.ru/watch/${YANDEX_METRIKA_ID}`} style={{ position: 'absolute', left: '-9999px' }} alt="" />
                </div>
            </noscript>
        )}
        </body>
        </html>
    );
}