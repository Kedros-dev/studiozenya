import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Banner.module.css";

export default function Banner() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <div className={styles.logoArea}>
          <a href="#" className={styles.logoLink} aria-label="Studio Zenya home">
            <img
              src="/assets/logos/zenya-circle-logo.jpg"
              alt="Studio Zenya"
              className={styles.wordmark}
            />
          </a>
        </div>

        <button
          className={styles.hamburger}
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
            <a href="#about" className={styles.dropLink} onClick={close}>Studio</a>
            <a href="#classes" className={styles.dropLink} onClick={close}>Classes</a>
            <a href="#pricing" className={styles.dropLink} onClick={close}>Pricing</a>
            <a href="#faq" className={styles.dropLink} onClick={close}>FAQ</a>
            <a href="#visit" className={styles.dropLink} onClick={close}>Visit</a>
            <a
              href="https://wa.me/96171511101"
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
