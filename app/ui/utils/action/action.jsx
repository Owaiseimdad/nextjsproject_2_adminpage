import styles from "./action.module.css";

const Action = () => {
  return (
    <div className={styles.container}>
      <button className={`${styles.button} ${styles.view}`}>View</button>
      <button className={`${styles.button} ${styles.delete}`}>Delete</button>
    </div>
  );
};

export default Action;
