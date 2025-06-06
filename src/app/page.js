"use client";
import styles from './page.module.scss';
import Navbar from "@/components/navbar/Navbar";
import { Header } from "@/components/HeaderBlock";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Contacts } from "@/components/Contacts";
import { About } from "@/components/About";
import { LangChanger } from "@/components/langChanger/LangChange";
import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t } = useTranslation(['translation', 'home']);

    return (
        <main className={styles.main}>
            <Navbar />
            <Header />
            <Services />
            <Projects />
            <Contacts />
            <About />
            <LangChanger />
        </main>
    );
}