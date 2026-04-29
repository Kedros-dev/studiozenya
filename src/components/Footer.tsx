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
            <div className={styles.socials}>
              <a href="https://instagram.com/studiozenya" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://wa.me/96171511101" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Studio Zenya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
