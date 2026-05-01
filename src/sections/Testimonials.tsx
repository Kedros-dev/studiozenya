import { motion } from "framer-motion";
import { testimonials } from "../data/content";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <motion.div 
              key={t.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className={styles.text}>"{t.text}"</p>
              <div className={styles.author}>— {t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
