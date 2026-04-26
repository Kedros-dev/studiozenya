import { motion } from "framer-motion";
import styles from "./Pricing.module.css";

export default function Pricing() {
  const packages = [
    {
      title: "Drop-In",
      price: "$25",
      desc: "Perfect for visitors or those trying out our classes for the first time.",
      features: ["Valid for any class", "Mat & props included", "Expires in 30 days"]
    },
    {
      title: "5 Classes",
      price: "$110",
      desc: "A consistent start to your weekly wellness ritual.",
      features: ["Valid for any class", "Priority booking", "Expires in 60 days"],
      popular: true
    },
    {
      title: "10 Classes",
      price: "$200",
      desc: "Deepen your practice and see real, lasting transformation.",
      features: ["Valid for any class", "Priority booking", "1 free guest pass", "Expires in 90 days"]
    }
  ];

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
          <p className={styles.subtitle}>Transparent packages with no hidden fees. Choose the commitment that feels right for you.</p>
        </motion.div>

        <div className={styles.grid}>
          {packages.map((pkg, i) => (
            <motion.div 
              key={i}
              className={`${styles.card} ${pkg.popular ? styles.popular : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {pkg.popular && <div className={styles.badge}>Most Popular</div>}
              <div className={styles.cardHeader}>
                <h3 className={styles.pkgTitle}>{pkg.title}</h3>
                <div className={styles.price}>{pkg.price}</div>
              </div>
              <p className={styles.desc}>{pkg.desc}</p>
              <ul className={styles.features}>
                {pkg.features.map((f, j) => (
                  <li key={j}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={`https://wa.me/96171511101?text=Hi!%20I'd%20like%20to%20purchase%20the%20${pkg.title}%20package.`} target="_blank" rel="noreferrer" className={styles.buyBtn}>
                Purchase via WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
