import Expandables from "../Expandables";
import styles from "./Sections.module.css";

export default function Sections() {
  return (
    <div className={styles.container}>
      <Expandables heading={1} />
      <Expandables heading={2} />
      <Expandables heading={3} />
      <Expandables heading={4} />
    </div>
  );
}
