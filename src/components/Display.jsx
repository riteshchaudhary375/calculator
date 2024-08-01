import React from "react";
import styles from "./Display.module.css";

const Display = ({ displayCalculate, displayResult }) => {
  return (
    <div className={styles.display}>
      <input
        className={styles.opertaion}
        type="text"
        value={displayCalculate}
        readOnly
      />
      <input
        className={styles.result}
        type="text"
        value={displayResult}
        readOnly
        placeholder="0"
      />
    </div>
  );
};

export default Display;
