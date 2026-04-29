import { motion } from "framer-motion";
import styles from "./Pricing.module.css";

const groupPackages = [
  { title: "1 Session",   price: "$25",  validity: "1 time" },
  { title: "4 Sessions",  price: "$80",  validity: "1 month validity" },
  { title: "8 Sessions",  price: "$150", validity: "1 month validity" },
  { title: "12 Sessions", price: "$200", validity: "2 months" },
  { title: "Unlimited",   price: "$200", validity: "1 month validity" },
];

const privatePackages = [
  { title: "Private Solo", price: "$55", validity: "1 session" },
  { title: "Private Duo",  price: "$65", validity: "1 session" },
];

function PkgRow({ title, price, validity, i }: { title: string; price: string; validity: string; i: number }) {
  return (
    <motion.a
      href={`https://wa.me/96171511101?text=Hi!%20I'd%20like%20to%20book%20the%20${encodeURIComponent(title)}%20package.`}
      target="_blank"
      rel="noreferrer"
      className={styles.row}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.07 }}
    >
      <span className={styles.rowTitle}>{title}</span>
      <span className={styles.rowPrice}>{price}</span>
      <span className={styles.rowValidity}>{validity}</span>
    </motion.a>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Invest in <em>Yourself</em></h2>
          <p className={styles.subtitle}>Transparent packages with no hidden fees.</p>
        </motion.div>

        <div className={styles.tables}>
          <div className={styles.tableBlock}>
            <div className={styles.tableLabel}>Group Sessions</div>
            <div className={styles.table}>
              {groupPackages.map((pkg, i) => (
                <PkgRow key={pkg.title} {...pkg} i={i} />
              ))}
            </div>
          </div>

          <div className={styles.tableBlock}>
            <div className={styles.tableLabel}>Private Sessions</div>
            <div className={styles.table}>
              {privatePackages.map((pkg, i) => (
                <PkgRow key={pkg.title} {...pkg} i={i} />
              ))}
            </div>
          </div>
        </div>

        <motion.p
          className={styles.cta}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Book via WhatsApp &mdash;{" "}
          <a href="https://wa.me/96171511101" target="_blank" rel="noreferrer">+961 79 077 076</a>
        </motion.p>
      </div>
    </section>
  );
}
