'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const YANDEX_METRIKA_ID = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;

const hit = (url) => {
    if (typeof window.ym === 'function') {
        window.ym(YANDEX_METRIKA_ID, 'hit', url);
        console.log(`YM hit: ${url}`);
    } else {
        console.warn(`Yandex Metrika: ym function not found. Skipping hit for ${url}`);
    }
};

export default function Metrika() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (!YANDEX_METRIKA_ID) {
            return;
        }
        const url = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
        hit(url);
    }, [pathname, searchParams]);
    return null;
}