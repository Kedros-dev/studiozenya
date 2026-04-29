import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Banner.module.css";

export default function Banner() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`${styles.wrapper} ${scrolled ? styles.wrapperScrolled : ""}`}>
      <div className={styles.banner}>
        <div className={styles.logoArea}>
          <a href="#" className={styles.logoLink} aria-label="Studio Zenya home">
            <img
              src="/assets/logos/zenya-wordmark.png"
              alt="Studio Zenya"
              className={`${styles.wordmark} ${scrolled ? styles.wordmarkScrolled : ""}`}
            />
          </a>
        </div>

        <button
          className={`${styles.hamburger} ${scrolled ? styles.hamburgerScrolled : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className={`${styles.bar} ${open ? styles.bar1Open : ""}`} />
          <span className={`${styles.bar} ${open ? styles.bar2Open : ""}`} />
          <span className={`${styles.bar} ${open ? styles.bar3Open : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className={styles.dropdown}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <a href="#classes" className={styles.dropLink} onClick={close}>Classes</a>
            <a href="#pricing" className={styles.dropLink} onClick={close}>Pricing</a>
            <a href="#faq" className={styles.dropLink} onClick={close}>FAQ</a>
            <a href="#visit" className={styles.dropLink} onClick={close}>Visit</a>
            <a
              href="https://wa.me/96179077076"
              target="_blank"
              rel="noreferrer"
              className={`${styles.dropLink} ${styles.reserveBtn}`}
              onClick={close}
            >
              Reserve
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
