"use client";

import styles from "./pagination.module.css";

const Pagination = () => {
  const BtnClick = (input) => {
    console.log(input.target.textContent);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={BtnClick} disabled>
        Previous
      </button>
      <button className={styles.button} onClick={BtnClick}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
