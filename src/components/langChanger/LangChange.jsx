import styles from './LangChanger.module.scss'
import React, {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';

export const LangChanger = () => {
    const { t, i18n } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(i18n.language || 'en');

    useEffect(() => {
        setCurrentLang(currentLang)
    }, [isOpen])

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectLanguage = (langCode) => {
        setCurrentLang(langCode)
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
