import styles from "./Expandables.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Expandables({ heading }) {
  const [toAnimate, setToAnimate] = useState(false);
  const variants = {
    expand: {
      height: "100vh",
      width: "100vw",
      position: "absolute",
      top: 0,
      left: 0,
    },
    idle: {},
  };

  return (
    <motion.div
      variants={variants}
      animate={toAnimate ? "expand" : "idle"}
      className={styles.container}
      onClick={() => setToAnimate(!toAnimate)}
    >
      Expandables {heading}
    </motion.div>
  );
}
