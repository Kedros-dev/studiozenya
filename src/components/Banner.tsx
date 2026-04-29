import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <nav className={styles.leftNav}>
        <a href="#about" className={styles.link}>Studio</a>
        <a href="#classes" className={styles.link}>Classes</a>
        <a href="#pricing" className={styles.link}>Pricing</a>
      </nav>

      <a href="#" className={styles.logoLink} aria-label="Studio Zenya home">
        <img
          src="/assets/logos/zenya-wordmark.png"
          alt="Studio Zenya"
          className={styles.wordmark}
        />
      </a>

      <nav className={styles.rightNav}>
        <a href="#faq" className={styles.link}>FAQ</a>
        <a href="#visit" className={styles.link}>Visit</a>
        <a
          href="https://wa.me/96171511101"
          target="_blank"
          rel="noreferrer"
          className={styles.bookBtn}
        >
          Reserve
        </a>
      </nav>
    </div>
  );
}
