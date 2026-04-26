import { motion } from "framer-motion";
import { faqs } from "../data/content";
import styles from "./FAQ.module.css";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Common <em>Questions</em>
        </motion.h2>

        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              className={`${styles.item} ${openIndex === i ? styles.open : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <button 
                className={styles.question}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{faq.question}</span>
                <span className={styles.icon}>{openIndex === i ? "−" : "+"}</span>
              </button>
              <div className={styles.answerWrap} style={{ height: openIndex === i ? 'auto' : 0, overflow: 'hidden' }}>
                <p className={styles.answer}>{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
