import { motion } from "framer-motion";
import styles from "./Visit.module.css";

export default function Visit() {
  return (
    <section id="visit" className={styles.visit}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div 
            className={styles.info}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.title}>Reserve your <em>spot</em></h2>
            <p className={styles.desc}>We handle all bookings personally to ensure you find the perfect class for your level and schedule.</p>
            
            <div className={styles.details}>
              <div className={styles.item}>
                <h4>Location</h4>
                <p>Mkalles, Lebanon<br />(VHJF+5Q2)</p>
              </div>
              <div className={styles.item}>
                <h4>Hours</h4>
                <p>Mon–Fri: 7:00–21:00<br />Sat: 8:00–18:00<br />Sun: Closed</p>
              </div>
            </div>

            <div className={styles.actions}>
              <a href="https://wa.me/96179077076" target="_blank" rel="noreferrer" className={styles.waBtn}>
                Message on WhatsApp
              </a>
              <a href="tel:+96179077076" className={styles.phoneBtn}>
                Call +961 79 077 076
              </a>
            </div>
          </motion.div>

          <motion.div 
            className={styles.mapWrap}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <iframe 
              src="https://www.google.com/maps?q=Mkalles+Lebanon+VHJF%2B5Q2&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Zenya Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
