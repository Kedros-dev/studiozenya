import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Hero.module.css";

const slides = [
  { src: "/assets/studio-photos/IMG_6668.jpeg", alt: "Reformer equipment at Studio Zenya" },
  { src: "/assets/studio-photos/IMG_6681.jpeg", alt: "Studio Zenya class atmosphere" },
  { src: "/assets/studio-photos/IMG_6684.jpeg", alt: "Studio Zenya Mkalles interior" },
  { src: "/assets/studio-photos/IMG_6679.jpeg", alt: "Studio Zenya workout space" },
  { src: "/assets/studio-photos/IMG_6675.jpeg", alt: "Studio Zenya reformer room" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<Set<number>>(new Set([0]));

  // Preload every image as soon as the component mounts
  useEffect(() => {
    slides.forEach((slide, i) => {
      const img = new Image();
      img.src = slide.src;
      img.onload = () => setLoaded((prev) => new Set(prev).add(i));
    });
  }, []);

  const advance = useCallback(() => {
    setCurrent((prev) => {
      // Find the next slide that is already loaded; skip unloaded ones
      for (let step = 1; step <= slides.length; step++) {
        const next = (prev + step) % slides.length;
        if (loaded.has(next)) return next;
      }
      return prev; // stay on current if nothing else is ready
    });
  }, [loaded]);

  useEffect(() => {
    const timer = setInterval(advance, 5000);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <section className={styles.hero}>
      <div className={styles.bgWrapper}>
        <AnimatePresence mode="sync">
          <motion.img
            key={current}
            src={slides[current].src}
            alt={slides[current].alt}
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
            onClick={() => loaded.has(i) && setCurrent(i)}
            aria-label={`View slide ${i + 1}`}
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
