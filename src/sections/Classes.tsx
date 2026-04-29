import { motion } from "framer-motion";
import { classes } from "../data/content";
import styles from "./Classes.module.css";

export default function Classes() {
  return (
    <section id="classes" className={styles.classes}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Signature <em>Sessions</em></h2>
          <p className={styles.subtitle}>Curated 50-minute flows designed to transform your body and calm your mind.</p>
        </motion.div>

        <div className={styles.grid}>
          {classes.map((c, i) => (
            <motion.div 
              key={c.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <span className={styles.duration}>{c.duration}</span>
              </div>
              <p className={styles.desc}>{c.description}</p>
              <div className={styles.meta}>
                <span className={styles.level}>{c.level}</span>
                <a href={`https://wa.me/96179077076?text=Hi!%20I'm%20interested%20in%20the%20${c.title}%20class.`} target="_blank" rel="noreferrer" className={styles.bookLink}>
                  Book via WhatsApp &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className={styles.stat}>
            <span className={styles.statNum}>Intimate</span>
            <span className={styles.statLabel}>Small Class Sizes</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>Expert</span>
            <span className={styles.statLabel}>Female-Led Coaching</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
