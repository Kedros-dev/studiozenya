import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Hero.module.css";

const slides = [
  "/assets/studio-photos/studio-zenya-interior.jpeg",
  "/assets/studio-photos/1.jpeg",
  "/assets/studio-photos/2.jpeg",
  "/assets/studio-photos/3.jpeg",
  "/assets/studio-photos/4.jpeg",
  "/assets/studio-photos/5.jpeg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.bgWrapper}>
        <AnimatePresence mode="sync">
          <motion.img
            key={current}
            src={slides[current]}
            alt="Studio Zenya"
            className={styles.bgImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className={styles.overlay} />
      </div>

      {/* Dot indicators */}
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className={styles.content}>
        <motion.h1
          className={styles.title}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Move with <em>intention</em>.<br />
          Live with balance.
        </motion.h1>

        <motion.div
          className={styles.actions}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="https://wa.me/96179077076?text=Hi!%20I'd%20like%20to%20book%20a%20free%20trial." target="_blank" rel="noreferrer" className={styles.primaryBtn}>
            Book via WhatsApp
          </a>
          <a href="https://in.app.link/CLpOh4oky2b" target="_blank" rel="noreferrer" className={styles.secondaryBtn}>
            Book via IN2
          </a>
        </motion.div>

        <motion.p
          className={styles.subtitle}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          A warm, female-led Pilates space in Mkalles where every body discovers strength and confidence.
        </motion.p>
      </div>
    </section>
  );
}
