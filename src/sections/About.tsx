import { motion } from "framer-motion";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div 
          className={styles.imageWrap}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <img src="/assets/studio-photos/photo-1.jpg" alt="Studio Zenya coaching" className={styles.img} />
        </motion.div>

        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className={styles.title}>A private wellness <em>ritual</em>.</h2>
          <p className={styles.text}>
            Nestled in the hills of Mkalles, Studio Zenya is more than a Pilates space—it's a sun-warmed Mediterranean atelier where you can truly exhale.
          </p>
          <p className={styles.text}>
            We believe movement should feel intentional. Whether you're stepping onto a walnut reformer for the first time or deepening an advanced practice, our focus is on precision, breath, and leaving you feeling exceptionally strong.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>Intimate</span>
              <span className={styles.statLabel}>Small Class Sizes</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>Expert</span>
              <span className={styles.statLabel}>Female-Led Coaching</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
