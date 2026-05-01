import { motion } from "framer-motion";
import styles from "./Gallery.module.css";

export default function Gallery() {
  const photos = [
    "/assets/studio-photos/1.jpeg",
    "/assets/studio-photos/2.jpeg",
    "/assets/studio-photos/3.jpeg",
    "/assets/studio-photos/4.jpeg",
    "/assets/studio-photos/5.jpeg",
  ];

  return (
    <section className={styles.gallery}>
      <div className={styles.grid}>
        {photos.map((src, i) => (
          <motion.div 
            key={i}
            className={styles.item}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <img src={src} alt="Studio Zenya interior" loading="lazy" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
