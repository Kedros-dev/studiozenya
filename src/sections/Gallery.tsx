import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Gallery.module.css";

const photos = [
  { src: "/assets/studio-photos/IMG_6667.jpeg", alt: "Studio Zenya interior" },
  { src: "/assets/studio-photos/IMG_6669.jpeg", alt: "Studio Zenya class in session" },
  { src: "/assets/studio-photos/IMG_6670.jpeg", alt: "Pilates reformers at Studio Zenya" },
  { src: "/assets/studio-photos/IMG_6672.jpeg", alt: "Studio Zenya training session" },
  { src: "/assets/studio-photos/IMG_6673.jpeg", alt: "Studio Zenya atmosphere" },
  { src: "/assets/studio-photos/IMG_6674.jpeg", alt: "Pilates class at Studio Zenya" },
  { src: "/assets/studio-photos/IMG_6676.jpeg", alt: "Studio Zenya Lebanon" },
  { src: "/assets/studio-photos/IMG_6678.jpeg", alt: "Pilates session at Studio Zenya" },
  { src: "/assets/studio-photos/IMG_6680.jpeg", alt: "Studio Zenya equipment detail" },
  { src: "/assets/studio-photos/IMG_6682.jpeg", alt: "Reformer Pilates at Studio Zenya" },
  { src: "/assets/studio-photos/IMG_6685.jpeg", alt: "Pilates studio Studio Zenya" },
  { src: "/assets/studio-photos/IMG_6686.jpeg", alt: "Studio Zenya training space" },
  { src: "/assets/studio-photos/IMG_6687.jpeg", alt: "Studio Zenya reformer detail" },
  { src: "/assets/studio-photos/IMG_6688.jpeg", alt: "Studio Zenya Mkalles Lebanon" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((i) => (i! - 1 + photos.length) % photos.length);
  const next = () => setLightbox((i) => (i! + 1) % photos.length);

  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Inside the <em>studio</em></h2>
          <p className={styles.subtitle}>A peek into the space where every session happens.</p>
        </motion.div>

        <div className={styles.grid}>
          {photos.map((photo, i) => (
            <motion.button
              key={photo.src}
              className={styles.cell}
              onClick={() => setLightbox(i)}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.07 }}
              aria-label={`View photo: ${photo.alt}`}
            >
              <img src={photo.src} alt={photo.alt} className={styles.img} loading="lazy" />
              <div className={styles.overlay} />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              key={lightbox}
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              className={styles.lightboxImg}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button className={`${styles.navBtn} ${styles.navPrev}`} onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous photo">‹</button>
            <button className={`${styles.navBtn} ${styles.navNext}`} onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next photo">›</button>
            <button className={styles.closeBtn} onClick={() => setLightbox(null)} aria-label="Close">✕</button>
            <span className={styles.counter}>{lightbox + 1} / {photos.length}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
