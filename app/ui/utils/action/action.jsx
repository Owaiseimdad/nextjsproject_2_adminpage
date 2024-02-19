import styles from "./action.module.css";
import Link from "next/link";

const Action = ({ userId }) => {
  return (
    <div className={styles.container}>
      <Link href={`/dashboard/users/${userId}`}>
        <button className={`${styles.button} ${styles.view}`}>View</button>{" "}
      </Link>
      <button className={`${styles.button} ${styles.delete}`}>Delete</button>
    </div>
  );
};

export default Action;
