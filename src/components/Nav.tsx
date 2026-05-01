import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.container}>
        <div className={styles.logoArea}>
          <img src="/assets/arch.png" alt="" className={`${styles.archImg} ${styles.archLeft}`} aria-hidden="true" />
          <a href="#" className={styles.logoLink}>
            <img src="/assets/logos/zenya-wordmark.png" alt="Studio Zenya" className={styles.logoImg} />
          </a>
          <img src="/assets/arch.png" alt="" className={`${styles.archImg} ${styles.archRight}`} aria-hidden="true" />
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className={styles.dropdown}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <a href="#about" className={styles.dropLink} onClick={closeMenu}>Studio</a>
            <a href="#classes" className={styles.dropLink} onClick={closeMenu}>Classes</a>
            <a href="#pricing" className={styles.dropLink} onClick={closeMenu}>Pricing</a>
            <a href="#faq" className={styles.dropLink} onClick={closeMenu}>FAQ</a>
            <a href="#visit" className={styles.dropLink} onClick={closeMenu}>Visit</a>
            <a
              href="https://wa.me/96171511101"
              target="_blank"
              rel="noreferrer"
              className={`${styles.dropLink} ${styles.dropReserve}`}
              onClick={closeMenu}
            >
              Reserve
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
