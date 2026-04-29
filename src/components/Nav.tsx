import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

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
        <div className={styles.links}>
          <a href="#about" className={styles.link}>Studio</a>
          <a href="#classes" className={styles.link}>Classes</a>
          <a href="#pricing" className={styles.link}>Pricing</a>
          <a href="#faq" className={styles.link}>FAQ</a>
          <a href="#visit" className={styles.link}>Visit</a>
        </div>

        <a
          href="https://wa.me/96171511101"
          target="_blank"
          rel="noreferrer"
          className={styles.bookBtn}
        >
          Reserve
        </a>
      </div>
    </motion.header>
  );
}
