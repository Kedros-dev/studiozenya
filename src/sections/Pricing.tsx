import { motion } from "framer-motion";
import styles from "./Pricing.module.css";

export default function Pricing() {
  const packages = [
    {
      title: "1 Session",
      price: "$25",
      validity: "1 time",
      desc: "Perfect for first-timers or visitors dropping in.",
      features: ["1 × 50-min session", "Any group class", "Mat & props included"]
    },
    {
      title: "4 Sessions",
      price: "$80",
      validity: "1 month validity",
      desc: "A great way to build a consistent rhythm.",
      features: ["4 × 50-min sessions", "Any group class", "1 month to use"]
    },
    {
      title: "8 Sessions",
      price: "$150",
      validity: "1 month validity",
      desc: "Feel real progress with a committed practice.",
      features: ["8 × 50-min sessions", "Any group class", "1 month to use"]
    },
    {
      title: "12 Sessions",
      price: "$200",
      validity: "2 months",
      desc: "Our most popular pack — meaningful savings and results.",
      features: ["12 × 50-min sessions", "Any group class", "2 months to use"],
      popular: true
    },
    {
      title: "Unlimited",
      price: "$200",
      validity: "1 month validity",
      desc: "Train as often as you like for a full month.",
      features: ["Unlimited sessions", "Any group class", "1 month to use"]
    },
    {
      title: "Private Solo",
      price: "$55",
      validity: "per session",
      desc: "One-on-one attention tailored entirely to you.",
      features: ["1 private session", "Personalised programme", "Expert coaching"]
    },
    {
      title: "Private Duo",
      price: "$65",
      validity: "per session",
      desc: "Train together — perfect for partners or friends.",
      features: ["1 private session for 2", "Shared personalised plan", "Expert coaching"]
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

        <div className={styles.carouselWrapper}><div className={styles.track}>
          {[...packages, ...packages].map((pkg, i) => (
            <div
              key={i}
              className={`${styles.card} ${pkg.popular ? styles.popular : ""}`}
            >
              {pkg.popular && <div className={styles.badge}>Most Popular</div>}
              <div className={styles.cardHeader}>
                <h3 className={styles.pkgTitle}>{pkg.title}</h3>
                <div className={styles.price}>{pkg.price}</div>
                <div className={styles.perSession}>{pkg.validity}</div>
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
              <a href={`https://wa.me/96179077076?text=Hi!%20I'd%20like%20to%20purchase%20the%20${encodeURIComponent(pkg.title)}%20package.`} target="_blank" rel="noreferrer" className={styles.buyBtn}>
                Purchase via WhatsApp
              </a>
            </div>
          ))}
        </div></div>
      </div>
    </section>
  );
}
