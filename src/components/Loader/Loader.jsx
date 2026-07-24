import React from "react";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loadingMessage}>
      <h2>loading, please wait </h2>
      <div className={styles.dotContainer}>
        <span className={styles.dot}>.</span>
        <span className={styles.dot}>.</span>
        <span className={styles.dot}>.</span>
      </div>
    </div>
  );
}

export default Loader;
