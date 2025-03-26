"use client"
import styles from './page.module.scss'
import Navbar from "@/components/navbar/Navbar";
import {Header} from "@/components/HeaderBlock";
import {Services} from "@/components/Services";
import {Projects} from "@/components/Projects";
import {Contacts} from "@/components/Contacts";
import {About} from "@/components/About";
import NavbarStatic from "@/components/navbar/NavbarStatic";


export default function Home() {
    return(
        <main className={styles.main}>
            <Navbar/>
            <Header />
            <Services />
            <Projects />
            <Contacts />
            <About />
        </main>
    )
}