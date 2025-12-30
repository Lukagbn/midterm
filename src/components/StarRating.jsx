import React from "react";
import styles from "./StarRating.module.css";

function StarRating({ rating, count }) {
  const percentage = (rating / 5) * 100;
  return (
    <div className={styles.rating}>
      <div className={styles.starContainer}>
        <div className={styles.starOuter}>★★★★★</div>
        <div className={styles.starInner} style={{ width: `${percentage}%` }}>
          ★★★★★
        </div>
      </div>
      <div className={styles.number}>{count} reviews</div>
    </div>
  );
}

export default StarRating;
