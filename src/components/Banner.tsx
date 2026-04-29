import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <a href="#" className={styles.logoLink} aria-label="Studio Zenya home">
        <img
          src="/assets/logos/zenya-circle.jpg"
          alt="Studio Zenya"
          className={styles.logo}
        />
      </a>
    </div>
  );
}
