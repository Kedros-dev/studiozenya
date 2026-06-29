import { useState } from "react";
import { motion } from "framer-motion";
import { faqs } from "../data/content";
import styles from "./FAQContact.module.css";

export default function FAQContact() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="visit" className={styles.section}>
      <div className={styles.container}>

        <div className={styles.grid}>

          {/* ── FAQ ──────────────────────────────────────── */}
          <motion.div
            className={styles.faqCol}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.colTitle}>Common <em>Questions</em></h2>
            <div className={styles.list}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`${styles.item} ${openIndex === i ? styles.open : ""}`}
                >
                  <button
                    className={styles.question}
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <span>{faq.question}</span>
                    <span className={styles.icon}>{openIndex === i ? "−" : "+"}</span>
                  </button>
                  <div className={styles.answerWrap} style={{ height: openIndex === i ? "auto" : 0, overflow: "hidden" }}>
                    <p className={styles.answer}>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Reserve ──────────────────────────────────── */}
          <motion.div
            className={styles.reserveCol}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <h2 className={styles.colTitle}>Reserve your <em>spot</em></h2>
            <p className={styles.desc}>
              We handle all bookings personally to ensure you find the perfect class for your level and schedule.
            </p>

            <div className={styles.details}>
              <div className={styles.detailItem}>
                <h4>Location</h4>
                <p>Mkalles, Lebanon</p>
                <a href="https://maps.app.goo.gl/uQNV4NFMCSGrKcFW7" target="_blank" rel="noreferrer" className={styles.directionsLink}>Get Directions →</a>
              </div>
              <div className={styles.detailItem}>
                <h4>Hours</h4>
                <p>Mon–Fri: 7:00–21:00<br />Sat: 8:00–18:00<br />Sun: Closed</p>
              </div>
            </div>

            <div className={styles.ctaGroup}>
              <a href="tel:+96179077076" className={styles.callBtn}>
                Call +961 79 077 076
              </a>
              <a href="https://in.app.link/CLpOh4oky2b" target="_blank" rel="noreferrer" className={styles.in2Btn}>
                Book via IN2
              </a>
            </div>

            <div className={styles.mapWrap}>
              <iframe
                src="https://maps.google.com/maps?q=Studio+Zenya+Mkalles+Lebanon&output=embed&z=16"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Zenya Location"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
