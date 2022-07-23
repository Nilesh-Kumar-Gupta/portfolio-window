import styles from "./NameCard.module.css";

export default function NameCard() {
  return (
    <div className={styles.name_card}>
      <p className={styles.helper_text}>Hi, I am</p>
      <div className={styles.name_text}>Nilesh </div>
      <div className={styles.name_text}>Kumar Gupta </div>
      <p className={styles.job_text}>Web Developer</p>
    </div>
  );
}
