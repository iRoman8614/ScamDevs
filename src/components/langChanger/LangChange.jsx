import styles from './LangChanger.module.scss'
import React, {useCallback, useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';

export const LangChanger = () => {
    // const { t, i18n } = useTranslation();
    //
    // const [isOpen, setIsOpen] = useState(false);
    // const [currentLang, setCurrentLang] = useState(i18n.language || 'en');
    //
    // useEffect(() => {
    //     setCurrentLang(currentLang)
    // }, [isOpen])
    //
    // const handleToggle = () => {
    //     setIsOpen(!isOpen);
    // };
    //
    // const handleSelectLanguage = (langCode) => {
    //     setCurrentLang(langCode)
    //     i18n.changeLanguage(langCode);
    //     setIsOpen(false);
    // };

    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const updateHtmlLang = useCallback((langCode) => {
        if (document.documentElement.lang !== langCode) {
            console.log(`Updating html lang to: ${langCode}`);
            document.documentElement.lang = langCode;
        }
    }, []);

    useEffect(() => {
        updateHtmlLang(i18n.language);
        const handleLanguageChange = (langCode) => {
            updateHtmlLang(langCode);
        };
        i18n.on('languageChanged', handleLanguageChange);
        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, [i18n, updateHtmlLang]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectLanguage = (langCode) => {
        i18n.changeLanguage(langCode);
        setIsOpen(false);
    };

    return(
        <div className={styles.root} onClick={handleToggle}>
            <div className={styles.activeTab}>{t('lang')}</div>
            <div className={isOpen === true ? styles.tabShowen : styles.tab} onClick={() => handleSelectLanguage('en')}>eng</div>
            <div className={isOpen === true ? styles.tabShowen : styles.tab} onClick={() => handleSelectLanguage('ru')}>рус</div>
        </div>
    )
}
