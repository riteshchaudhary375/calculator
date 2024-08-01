import React from "react";
import styles from "./Display.module.css";

const Display = () => {
  return (
    <div className={styles.display}>
      <input className={styles.opertaion} type="text" value="3*7" disabled />
      <input className={styles.result} type="text" value="21" disabled />
    </div>
  );
};

export default Display;
