import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("EN");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.container}>
        <div className={styles.left}>
          <a href="#about" className={styles.link}>Studio</a>
          <a href="#classes" className={styles.link}>Classes</a>
        </div>

        <a href="#" className={styles.logo}>
          <img src="/assets/logos/Studio Zenya-01.png" alt="Studio Zenya" />
        </a>

        <div className={styles.right}>
          <div className={styles.langToggle}>
            <button className={lang === "EN" ? styles.active : ""} onClick={() => setLang("EN")}>EN</button>
            <span className={styles.divider}>/</span>
            <button className={lang === "AR" ? styles.active : ""} onClick={() => setLang("AR")}>AR</button>
            <span className={styles.divider}>/</span>
            <button className={lang === "FR" ? styles.active : ""} onClick={() => setLang("FR")}>FR</button>
          </div>
          <a href="https://wa.me/96171511101" target="_blank" rel="noreferrer" className={styles.bookBtn}>
            Reserve
          </a>
        </div>
      </div>
    </motion.header>
  );
}
