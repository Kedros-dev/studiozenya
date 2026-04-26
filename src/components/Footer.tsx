import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <img src="/assets/logos/Studio Zenya-01.png" alt="Studio Zenya" className={styles.logo} />
            <p className={styles.desc}>
              A supportive Pilates studio in Mkalles, Lebanon where every body discovers strength, balance, and confidence through mindful movement.
            </p>
          </div>
          
          <div className={styles.links}>
            <h4>Visit Us</h4>
            <p>Mkalles, Lebanon<br />(VHJF+5Q2)</p>
            <p>Mon–Fri: 7:00–21:00<br />Sat: 8:00–18:00<br />Sun: Closed</p>
          </div>

          <div className={styles.links}>
            <h4>Contact</h4>
            <p><a href="tel:+96179077076">+961 79 077 076</a></p>
            <p><a href="https://wa.me/96171511101">WhatsApp Us</a></p>
            <p><a href="https://instagram.com/studiozenya" target="_blank" rel="noreferrer">Instagram</a></p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Studio Zenya. All rights reserved.</p>
          <div className={styles.socials}>
            <a href="https://instagram.com/studiozenya" target="_blank" rel="noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
