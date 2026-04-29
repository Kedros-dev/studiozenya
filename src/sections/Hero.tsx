import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgWrapper}>
        <motion.img 
          src="/assets/studio-photos/studio-zenya-interior.jpeg" 
          alt="Studio Zenya"
          className={styles.bgImage}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className={styles.overlay} />
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
          <a href="https://wa.me/96171511101?text=Hi!%20I'd%20like%20to%20book%20a%20free%20trial." target="_blank" rel="noreferrer" className={styles.primaryBtn}>
            Book a Free Trial
          </a>
          <a href="#classes" className={styles.secondaryBtn}>
            Explore Classes
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
