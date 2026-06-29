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
              <a href="https://wa.me/96179077076" target="_blank" rel="noreferrer" className={styles.waBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
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
