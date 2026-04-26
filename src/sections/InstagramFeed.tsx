import { motion } from "framer-motion";
import styles from "./InstagramFeed.module.css";

export default function InstagramFeed() {
  const images = [
    "/assets/instagram/1.jpg",
    "/assets/instagram/2.jpg",
    "/assets/instagram/3.jpg",
    "/assets/instagram/4.jpg",
    "/assets/instagram/5.jpg",
    "/assets/instagram/6.jpg",
  ];

  return (
    <section className={styles.instagram}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a href="https://instagram.com/studiozenya" target="_blank" rel="noreferrer" className={styles.handle}>
            @studiozenya
          </a>
          <h2 className={styles.title}>Join our <em>community</em></h2>
        </motion.div>

        <div className={styles.grid}>
          {images.map((src, i) => (
            <motion.a 
              key={i}
              href="https://instagram.com/studiozenya" 
              target="_blank" 
              rel="noreferrer"
              className={styles.item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <img src={src} alt="Instagram feed post" loading="lazy" />
              <div className={styles.overlay}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
