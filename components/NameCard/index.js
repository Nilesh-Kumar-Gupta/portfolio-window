import styles from "./NameCard.module.css";

export default function NameCard() {
  return (
    <div className={styles.name_card}>
      <p className={styles.helper_text}>Hi, I am</p>
      <div className={styles.name_text}> Nilesh Kumar Gupta</div>
    </div>
  );
}
