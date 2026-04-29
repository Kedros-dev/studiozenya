import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <p>Mkalles, Lebanon</p>
            <p>Mon–Fri: 7:00–21:00 &nbsp;·&nbsp; Sat: 8:00–18:00</p>
          </div>

          <a href="#" className={styles.logoWrap} aria-label="Studio Zenya home">
            <img src="/assets/logos/zenya-circle-logo.jpg" alt="Studio Zenya" className={styles.logo} />
          </a>

          <div className={styles.contact}>
            <p><a href="tel:+96179077076">+961 79 077 076</a></p>
            <p>
              <a href="https://instagram.com/studiozenya" target="_blank" rel="noreferrer">Instagram</a>
              &nbsp;·&nbsp;
              <a href="https://wa.me/96171511101" target="_blank" rel="noreferrer">WhatsApp</a>
            </p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Studio Zenya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
