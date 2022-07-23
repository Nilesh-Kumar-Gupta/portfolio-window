import NameCard from "../NameCard";
import Navbar from "../Navbar";
import Sections from "../Sections";
import styles from "./App.module.css";

export default function App() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <NameCard />
        <Sections />
      </div>
    </>
  );
}
